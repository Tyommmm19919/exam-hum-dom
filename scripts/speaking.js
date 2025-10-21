const _spParams = new URLSearchParams(window.location.search);
let __SPEAK_TYPE__ = (_spParams.get('type') || sessionStorage.getItem('TEST_TYPE') || 'toefl').toLowerCase();
if (!['toefl','sh'].includes(__SPEAK_TYPE__)) __SPEAK_TYPE__ = 'toefl';
sessionStorage.setItem('TEST_TYPE', __SPEAK_TYPE__);
let typeName = ''
if(__SPEAK_TYPE__ === "toefl"){
  typeName = "TPO"
} else if(__SPEAK_TYPE__ === "sh"){
  typeName = "SH"
}
const __SPEAK_TEST__ = String(_spParams.get('test') || sessionStorage.getItem('TEST_ID') || '1');
sessionStorage.setItem('TEST_ID', __SPEAK_TEST__);

const TYPE_LABELS = { toefl: 'TOEFL', sh: 'SH' };

let questions = [];
let current = 0;
let stream, mediaRecorder, chunks = [], recordingCount = 1;
const pendingSaves = [];

let flowToken = 0;

let activeCountdown = null;
let activeProgressInterval = null;

const speakingDirections = document.getElementById('speakingDirections');
const spDirectionAu = document.getElementById('spDirectionAu');
const continueDirec = document.getElementById('continueDirec');
const bibPrepare = document.getElementById('bibPrepare');
const bibSpeak = document.getElementById('bibSpeak');
const app = document.getElementById('app');
const sectionName = document.getElementById('sectionName');
const questionText = document.getElementById('question-text');
const quesT = document.getElementById('quesT');
const questionWrap = document.getElementById('question-wrap');
const timerDisplay = document.getElementById('timer');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const audioPlayer = document.getElementById('audio-player');
const recordingsDiv = document.getElementById('recordings');
const downloadBtn = document.getElementById('download-btn'); 

const interstitial = document.getElementById('interstitial');
const interstitialText = document.getElementById('interstitialText');
const interstitialAudio = document.getElementById('interstitialAudio');
const interstitialContinue = document.getElementById('interstitialContinue');
// === Allow all audio autoplay after first click ===
// Track that the user interacted at least once (no forced playback)
let __USER_INTERACTED__ = false;
document.addEventListener("click", () => { __USER_INTERACTED__ = true; }, { once: true });


function getRepoBasePath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const repo = parts.length > 0 ? parts[0] : '';
  return repo ? `/${repo}/` : '/';
}



function fixLeadingSlashesInData(data) {
  const base = getRepoBasePath();

  const visit = (node) => {
    if (Array.isArray(node)) return node.map(visit);
    if (node && typeof node === 'object') {
      const out = {};
      for (const [k, v] of Object.entries(node)) out[k] = visit(v);
      return out;
    }
    if (typeof node === 'string' && node.startsWith('/')) {
      return base + node.slice(1);
    }
    return node;
  };

  return visit(data);
}

function addMp3IfMissing(path) {
  if (typeof path !== 'string' || !path) return path;

  // Ensure .mp3 extension if it’s missing (and no query string)
  let p = (!path.includes('?') && !path.endsWith('.mp3')) ? `${path}.mp3` : path;

  // Absolute URLs are fine
  if (/^https?:\/\//i.test(p)) return p;

  // If it already starts with the repo base, don't add it again
  const base = getRepoBasePath();
  if (p.startsWith(base)) return p;

  // If it starts with a plain leading slash, prefix with repo base once
  if (p.startsWith('/')) return base + p.slice(1);

  // Relative paths are OK as-is
  return p;
}



async function getMicAccess() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    alert('Microphone access denied.');
  }
}

function createMediaRecorder() {
  const opts = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
    ? { mimeType: 'audio/webm;codecs=opus', audioBitsPerSecond: 64000 }
    : { mimeType: 'audio/ogg;codecs=opus', audioBitsPerSecond: 64000 };
  return new MediaRecorder(stream, opts);
}

function playElementOnce(el) {
  return new Promise(resolve => {
    try { el.currentTime = 0; } catch {}
    const onEnd = () => resolve();
    el.addEventListener('ended', onEnd, { once: true });
    el.play().catch(() => {
      const resume = () => {
        document.removeEventListener('click', resume);
        el.play().catch(() => resolve());
      };
      document.addEventListener('click', resume, { once: true });
    });
  });
}

function playAudioListWithProgress(srcList) {
  const list = Array.isArray(srcList) ? srcList : [srcList];
  return new Promise(resolve => {
    let idx = 0;

    if (activeProgressInterval) {
      clearInterval(activeProgressInterval);
      activeProgressInterval = null;
    }

    audioPlayer.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
    progressBar.style.width = '0%';
    timerDisplay.classList.add('hidden');

    function playNext() {
      if (idx >= list.length) {
        audioPlayer.classList.add('hidden');
        progressContainer.classList.add('hidden');
        progressBar.style.width = '0%';
        if (activeProgressInterval) {
          clearInterval(activeProgressInterval);
          activeProgressInterval = null;
        }
        resolve();
        return;
      }
      const src = addMp3IfMissing(list[idx]);
      audioPlayer.src = src;

      if (activeProgressInterval) clearInterval(activeProgressInterval);
      activeProgressInterval = setInterval(() => {
        if (audioPlayer.duration) {
          const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
          progressBar.style.width = percent + '%';
        }
      }, 200);

      const onEnd = () => {
        audioPlayer.removeEventListener('ended', onEnd);
        idx++;
        playNext();
      };
      audioPlayer.addEventListener('ended', onEnd, { once: true });
      audioPlayer.play().catch(() => {
        setTimeout(() => {
          audioPlayer.removeEventListener('ended', onEnd);
          idx++;
          playNext();
        }, 300);
      });
    }

    playNext();
  });
}

function startCountdown(seconds, label) {
  if (activeCountdown && typeof activeCountdown.cancel === 'function') {
    activeCountdown.cancel();
  }

  let cancelled = false;

  function setText(s) {
    timerDisplay.textContent = `${label} time: ${s}s`;
  }

  timerDisplay.classList.remove('hidden');
  setText(seconds);

  const id = setInterval(() => {
    if (cancelled) return clearInterval(id);
    seconds--;
    setText(Math.max(0, seconds));
    if (seconds <= 0) {
      clearInterval(id);
      if (!cancelled && activeCountdown && activeCountdown.resolve) {
        activeCountdown.resolve();
      }
    }
  }, 1000);

  let resolveFn;
  const p = new Promise(res => (resolveFn = res));

  activeCountdown = {
    cancel() { cancelled = true; clearInterval(id); },
    resolve: resolveFn
  };

  return p;
}

function clearProgressUI() {
  if (activeProgressInterval) {
    clearInterval(activeProgressInterval);
    activeProgressInterval = null;
  }
  audioPlayer.classList.add('hidden');
  progressContainer.classList.add('hidden');
  progressBar.style.width = '0%';
}

window.goToNextSection = function () {
  const selected = JSON.parse(sessionStorage.getItem("SELECTED_SECTIONS") || "[]");
  let currentIndex = parseInt(sessionStorage.getItem("CURRENT_SECTION_INDEX") || "0");

  currentIndex++;

  if (currentIndex < selected.length) {
    sessionStorage.setItem("CURRENT_SECTION_INDEX", currentIndex.toString());
    const testId = sessionStorage.getItem("TEST_ID") || "";
    const sectionMap = {
      reading: `reading.html?type=${encodeURIComponent(__SPEAK_TYPE__)}&test=${encodeURIComponent(testId)}`,
      listening: `listening.html?type=${encodeURIComponent(__SPEAK_TYPE__)}&test=${encodeURIComponent(testId)}`,
      speaking: `speaking.html?type=${encodeURIComponent(__SPEAK_TYPE__)}&test=${encodeURIComponent(testId)}`,
      writing: `writing.html?type=${encodeURIComponent(__SPEAK_TYPE__)}&test=${encodeURIComponent(testId)}`
    };
    const nextSection = selected[currentIndex];
    window.location.href = sectionMap[nextSection];
  } else {
    const testId = sessionStorage.getItem("TEST_ID");
    window.location.href = `results.html?type=${encodeURIComponent(__SPEAK_TYPE__)}&test=${encodeURIComponent(testId || "")}`;
  }
};

function getSpeakingDataPath(tt, tnum) {
  return tt === 'sh'
    ? `../dataSH/${tnum}/speakingData_Test${tnum}.js`
    : `../data/${tnum}/speakingData_Test${tnum}.js`;
}

function loadSpeakingData(tt, tnum) {
  return new Promise((resolve, reject) => {
    const path = getSpeakingDataPath(tt, tnum);
    const src = `${path}?_=${Date.now()}`; 

    try { delete window.questions; } catch {}
    try { delete window.speakingData; } catch {}

    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => {
      if (Array.isArray(window.questions)) {
        resolve();
      } else if (Array.isArray(window.speakingData)) {
        window.questions = window.speakingData; // normalize
        resolve();
      } else {
        reject(new Error(`"${path}" loaded but neither window.questions nor window.speakingData is defined as an array.`));
      }
    };
    s.onerror = () => reject(new Error(`Failed to load ${path}`));
    document.head.appendChild(s);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!window.recStore) {
    console.warn('[speaking] window.recStore not found. Did you include /scripts/recStore.js before speaking.js?');
  }

  const testId = sessionStorage.getItem("TEST_ID");
  if (!testId) {
    document.body.innerHTML = "<h2 style='color:red;'>TEST_ID is missing. Please return to the section selection page.</h2>";
    return;
  }

  sessionStorage.setItem("TEST_ID", testId);

  loadSpeakingData(__SPEAK_TYPE__, testId)
    .then(() => {
  // ✅ Fix every "/data/..." path so GitHub Pages can find your audio files
  questions = fixLeadingSlashesInData(window.questions || window.speakingData || []);

  // Load optional 'speakingScreens.js' file (it’s OK if it’s missing)
  const screensScript = document.createElement("script");
  screensScript.src = `../data/speakingScreens.js`;
  screensScript.onload = () => startDirections();
  screensScript.onerror = () => {
    console.warn('[speaking] speakingScreens file not found — using auto-generated screens.');
    startDirections();
  };
  document.body.appendChild(screensScript);
})

    .catch(err => {
      console.error(err);
      alert('Speaking test data failed to load. Check file paths and that the data file defines window.questions = [...] or window.speakingData = [...].');
    });
});

function startDirections() {
  try {
  if (spDirectionAu && spDirectionAu.getAttribute('src')) {
    spDirectionAu.src = addMp3IfMissing(spDirectionAu.getAttribute('src'));
  }
  if (bibPrepare && bibPrepare.getAttribute('src')) {
    bibPrepare.src = addMp3IfMissing(bibPrepare.getAttribute('src'));
  }
  if (bibSpeak && bibSpeak.getAttribute('src')) {
    bibSpeak.src = addMp3IfMissing(bibSpeak.getAttribute('src'));
  }
} catch {}
  speakingDirections.style.display = "block";
  spDirectionAu?.play?.().catch(() => {});

  const endDirecStart = async () => {
    try { spDirectionAu.pause(); spDirectionAu.currentTime = 0; } catch {}
    const testId2 = sessionStorage.getItem("TEST_ID");
    const attemptId = Date.now();
    sessionStorage.setItem(`ATTEMPT_ID_${testId2}`, String(attemptId));

    speakingDirections.style.display = "none";
    app.style.display = "block";
    sectionName.innerHTML = `${typeName} — Speaking — Test ${testId2}`;
    await getMicAccess();

    current = 0;
    runQuestion();
  };

  continueDirec.addEventListener('click', endDirecStart, { once: true });
  spDirectionAu.addEventListener('ended', endDirecStart, { once: true });
}

function showInterstitial(index, onContinue) {
  interstitialContinue.style.display = "block";
  questionWrap.style.display = "none";

  const total = questions.length;
  const defaults = Array.from({ length: total }, (_, i) => ({
    textHtml: `<h2>Task ${i + 1}</h2><p>Follow the on-screen directions for this task.</p>`
  }));
  const screens = Array.isArray(window.speakingScreens) && window.speakingScreens.length
    ? window.speakingScreens
    : defaults;

  const screen = screens[index] || defaults[index] || { textHtml: `<h2>Task ${index + 1}</h2>` };

  interstitialText.innerHTML = screen.textHtml || `<h2>Task ${index + 1}</h2>`;

  try { interstitialAudio.pause(); interstitialAudio.currentTime = 0; } catch {}
  if (screen.audio) {
    interstitialAudio.src = addMp3IfMissing(screen.audio);
  } else {
    interstitialAudio.removeAttribute('src');
  }

  interstitial.style.display = 'block';
  questionText.innerHTML = '';
  quesT.innerHTML = '';
  timerDisplay.textContent = '';
  timerDisplay.classList.add('hidden');
  clearProgressUI();

  const handler = () => {
    interstitialContinue.style.display = "none";
    try { interstitialAudio.pause(); } catch {}
    questionWrap.style.display = "block";
    interstitial.style.display = 'none';
    interstitialContinue.removeEventListener('click', handler);
    if (typeof onContinue === 'function') onContinue();
  };

  interstitialContinue.addEventListener('click', handler, { once: true });

  // ✅ Play only that interstitial’s own audio, not all audios
  if (screen.audio) {
    // Try to play automatically — if browser blocks it, enable on first user click
    const tryPlay = () => {
      interstitialAudio.play().catch(() => {
        // if playback fails, wait for a single user click to start
        const resume = () => {
          document.removeEventListener('click', resume);
          interstitialAudio.play().catch(() => {});
        };
        document.addEventListener('click', resume, { once: true });
      });
    };
    tryPlay();
  }
}

function runQuestion() {
  flowToken++;
  const myToken = flowToken;

  showInterstitial(current, () => {
    if (myToken !== flowToken) return; 
    runQuestionAfterInterstitial(myToken);
  });
}

async function runQuestionAfterInterstitial(myToken) {
  const q = questions[current];
  if (!q) return;

  // reset UI
  questionText.innerHTML = '';
  quesT.innerHTML = '';
  timerDisplay.textContent = '';
  timerDisplay.classList.add('hidden');
  clearProgressUI();

  if (q.type === 'independent') {
    questionText.innerHTML = q.prompt; 

    if (q.intro) {
      const introList = Array.isArray(q.intro) ? q.intro : [q.intro];
      for (const src of introList) {
        if (myToken !== flowToken) return;
        const tmp = new Audio(addMp3IfMissing(src));
        await playElementOnce(tmp);
      }
    }

    if (myToken !== flowToken) return;

    await playElementOnce(bibPrepare);
    if (myToken !== flowToken) return;

    await startCountdown(q.prepTime, 'Preparation');
    if (myToken !== flowToken) return;

    await playElementOnce(bibSpeak);
    if (myToken !== flowToken) return;

    await startRecording(q.recordTime, myToken);
    if (myToken !== flowToken) return;

    advanceOrFinish(myToken);
    return; 
  }

  if (q.intro) {
    const introList = Array.isArray(q.intro) ? q.intro : [q.intro];
    for (const src of introList) {
      if (myToken !== flowToken) return;
      const tmp = new Audio(addMp3IfMissing(src));
      await playElementOnce(tmp);
    }
  }

  if (myToken !== flowToken) return;

  try {
if (q.type === 'integrated') {
  // ✅ Show passage immediately before any audio autoplay tries to run
  questionText.style.display = "block";
  questionText.innerHTML = q.prompt || "<p>Loading passage...</p>";

  // Allow passage to appear immediately (browser won't block this)
  await new Promise(r => setTimeout(r, 50));

  await startCountdown(q.readTime, 'Reading');

      if (myToken !== flowToken) return;

      questionText.innerHTML = '';
      await playAudioListWithProgress(q.audioSrc);
      clearProgressUI();
      if (myToken !== flowToken) return;

      questionText.style.display = "none";
      quesT.innerHTML = q.ques;

      await playElementOnce(bibPrepare);
      if (myToken !== flowToken) return;

      await startCountdown(q.prepTime, 'Preparation');
      if (myToken !== flowToken) return;

      await playElementOnce(bibSpeak);
      if (myToken !== flowToken) return;

      await startRecording(q.recordTime, myToken);
      if (myToken !== flowToken) return;

      quesT.innerHTML = '';
      advanceOrFinish(myToken);

    } else if (q.type === 'listening') {
      await playAudioListWithProgress(q.audioSrc);
      clearProgressUI();
      if (myToken !== flowToken) return;

      quesT.innerHTML = q.ques;

      await playElementOnce(bibPrepare);
      if (myToken !== flowToken) return;

      await startCountdown(q.prepTime, 'Preparation');
      if (myToken !== flowToken) return;

      await playElementOnce(bibSpeak);
      if (myToken !== flowToken) return;

      await startRecording(q.recordTime, myToken);
      if (myToken !== flowToken) return;

      quesT.innerHTML = '';
      advanceOrFinish(myToken);
    }
  } catch (e) {
    console.error('[speaking] flow error', e);
  }
}

function advanceOrFinish(myToken) {
  if (myToken !== flowToken) return;
  current++;
  if (current < questions.length) {
    runQuestion();
  } else {
    finishSection();
  }
}

function finishSection() {
  sectionName.innerText = "Test Completed";
  timerDisplay.innerHTML = '<h2>Speaking section finished.</h2>';
  questionText.classList.add("hidden");

  const testId = sessionStorage.getItem("TEST_ID");
  if (testId) {
    // Namespaced + TOEFL legacy for backward compatibility
    localStorage.setItem(`result_${__SPEAK_TYPE__}_${testId}_speaking`, "completed");
    if (__SPEAK_TYPE__ === 'toefl') {
      localStorage.setItem(`result_${testId}_speaking`, "completed");
    }
  }

  Promise.allSettled(pendingSaves).then(() => {
    if (typeof window.goToNextSection === "function") {
      window.goToNextSection();
    }
  });
}

function startRecording(duration, myToken) {
  return new Promise(resolve => {
    chunks = [];
    const mr = createMediaRecorder();
    mediaRecorder = mr;

    let stopped = false;

    mr.onstart = () => console.log('Recording started');
    mr.ondataavailable = (e) => chunks.push(e.data);
    mr.onstop = () => {
      if (stopped) return;
      stopped = true;

      const blob = new Blob(chunks, { type: mr.mimeType || 'audio/ogg;codecs=opus' });

      const currentTestId = sessionStorage.getItem("TEST_ID") || "default";
      const qIndex = current;
      const filename = `Test_${currentTestId}_Recording_${qIndex + 1}.ogg`;

      const url = URL.createObjectURL(blob);
      const label = document.createElement('p');
      label.textContent = `Recording ${qIndex + 1}`;
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = url;
      const wrapper = document.createElement('div');
      wrapper.appendChild(label);
      wrapper.appendChild(audio);
      recordingsDiv.appendChild(wrapper);

      const record = {
        id: `${currentTestId}-${qIndex + 1}-${Date.now()}`,
        testId: currentTestId,
        attemptId: Number(sessionStorage.getItem(`ATTEMPT_ID_${currentTestId}`)) || 0,
        index: qIndex,
        filename,
        mime: blob.type,
        createdAt: Date.now(),
        blob
      };

      const savePromise = window.recStore ? window.recStore.save(record) : Promise.resolve();
      pendingSaves.push(savePromise.catch(err => console.error('[speaking] save error', err)));

      resolve();
    };

    timerDisplay.classList.remove('hidden');
    timerDisplay.textContent = `Recording time: ${duration}s`;

    mr.start();

    const id = setInterval(() => {
      if (myToken !== flowToken) {
        clearInterval(id);
        try { mr.stop(); } catch {}
        return;
      }
      duration--;
      timerDisplay.textContent = `Recording time: ${Math.max(0, duration)}s`;
      if (duration <= 0) {
        clearInterval(id);
        try { mr.stop(); } catch {}
      }
    }, 1000);
  });
}
