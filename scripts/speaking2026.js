  /* Speaking 2026 — Independent only, zero prep
    Flow per task: intro audio -> bibSpeak -> immediate recording -> next task (no waits)
  */

  const TYPE_LABEL_2026 = "Speaking 2026";

  let questions2026 = [];
  let current2026 = 0;
  let stream, mediaRecorder, chunks = [], recordingCount = 1;
  const pendingSaves = [];

  let flowToken2026 = 0;
  let activeProgressInterval = null;

  const speakingDirections = document.getElementById('speakingDirections');
  const spDirectionAu = document.getElementById('spDirectionAu');
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
  const downloadBtn = document.getElementById('download-btn');


  // legacy references kept harmlessly (not used)
  const recordingsDiv = document.getElementById('recordings'); // we won't show recordings

  // Router bootstrap
  if (!sessionStorage.getItem('TEST_TYPE')) {
    sessionStorage.setItem('TEST_TYPE', 'toefl2026');
  }
  (function () {
    const type = (sessionStorage.getItem('TEST_TYPE') || 'toefl2026').toLowerCase();
    if (!sessionStorage.getItem('TEST_TYPE')) {
      sessionStorage.setItem('TEST_TYPE', 'toefl2026');
    }
    if (!sessionStorage.getItem('CURRENT_SECTION_INDEX')) {
      sessionStorage.setItem('CURRENT_SECTION_INDEX', '0');
    }

    window.goToNextSection = function () {
      const selected = JSON.parse(sessionStorage.getItem('SELECTED_SECTIONS') || '[]');
      let idx = parseInt(sessionStorage.getItem('CURRENT_SECTION_INDEX') || '0', 10);
      idx++;

      const testId = sessionStorage.getItem('TEST_ID') || '';

      if (idx < selected.length) {
        sessionStorage.setItem('CURRENT_SECTION_INDEX', String(idx));
        const next = (selected[idx] || '').toLowerCase();

        const map = {
          reading: `reading2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          listening: `listening2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          speaking: `speaking2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          writing: `writing2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`
        };

        const url = map[next];
        if (url) {
          window.location.href = url;
        } else {
          window.location.href = `results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`;
        }
      } else {
        window.location.href = `results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`;
      }
    };
  })();

  // Init
  window.initSpeaking2026 = function initSpeaking2026(dataArray) {
    questions2026 = fixLeadingSlashesInData(Array.isArray(dataArray) ? dataArray : []);
    if (!questions2026.length) {
      console.error('[speaking2026] No tasks in dataArray.');
      alert('No speaking tasks found in the 2026 data file.');
      return;
    }

    try {
      if (bibSpeak && bibSpeak.getAttribute('src')) {
        bibSpeak.src = addMp3IfMissing(bibSpeak.getAttribute('src'));
      }
    } catch { }

    speakingDirections.style.display = "block";
    spDirectionAu?.play?.().catch(() => { });

    const testId = sessionStorage.getItem("TEST_ID") || '';
    sectionName.innerText = `Speaking 2026 — Test ${testId}`;

  document.getElementById("continueDirec").onclick = () => {
    try { spDirectionAu.pause(); spDirectionAu.currentTime = 0; } catch {}
    speakingDirections.style.display = "none";
    app.style.display = "block";

    // 🔒 set a single stable attempt id for the full speaking run
    const testId = sessionStorage.getItem("TEST_ID") || "default";
    const key = `ATTEMPT_ID_${testId}`;
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, String(Date.now()));
    }

    getMicAccess().then(runQuestion2026);
  };

  };

  // ---------- path helpers ----------
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
      if (typeof node === 'string' && node.startsWith('/')) return base + node.slice(1);
      return node;
    };
    return visit(data);
  }

  function addMp3IfMissing(path) {
    if (typeof path !== 'string' || !path) return path;
    let p = (!path.includes('?') && !path.endsWith('.mp3')) ? `${path}.mp3` : path;
    if (/^https?:\/\//i.test(p)) return p;
    const base = getRepoBasePath();
    if (p.startsWith(base)) return p;
    if (p.startsWith('/')) return base + p.slice(1);
    return p;
  }

  // ---------- media ----------
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
      try { el.currentTime = 0; } catch { }
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

  function clearProgressUI() {
    if (activeProgressInterval) {
      clearInterval(activeProgressInterval);
      activeProgressInterval = null;
    }
    audioPlayer.classList.add('hidden');
    progressContainer.classList.add('hidden');
    progressBar.style.width = '0%';
  }

  // ---------- flow ----------
  function runQuestion2026() {
    if (!questions2026 || !questions2026.length) {
      console.error('[speaking2026] No questions loaded yet.');
      alert('No speaking tasks available. Check the data file.');
      return;
    }
    flowToken2026++;
    const myToken = flowToken2026;
    // DIRECTLY run the task (no interstitial screen)
    runQuestionAfterInterstitial2026(myToken);
  }

  async function runQuestionAfterInterstitial2026(myToken) {
    const q = questions2026[current2026];
    if (!q) return;

    // Reset UI
    questionText.innerHTML = '';
    quesT.innerHTML = '';
    timerDisplay.textContent = '';
    timerDisplay.classList.remove('hidden'); // we keep the visible recording timer
    clearProgressUI();
    questionWrap.style.display = "block";    // ensure main area is visible

    // Show prompt text (keep this on screen)
    if (q.prompt) {
      questionText.style.display = "block";
      questionText.innerHTML = q.prompt;
    }

    // Intro
    if (q.intro) {
      const introList = Array.isArray(q.intro) ? q.intro : [q.intro];
      await playAudioListWithProgress(introList);
      clearProgressUI();
      if (myToken !== flowToken2026) return;
    }

    // “Begin speaking” tone (no prep time)
    await playElementOnce(bibSpeak);
    if (myToken !== flowToken2026) return;

    // Record immediately
    const recSecs = Number(q.recordTime || 60);
    await startRecording2026(recSecs, myToken);
    if (myToken !== flowToken2026) return;

    // Clear for next task
    questionText.innerHTML = '';

    // Instantly move on to the next task
    advanceOrFinish2026(myToken);
  }

  function advanceOrFinish2026(myToken) {
    if (myToken !== flowToken2026) return;
    current2026++;
    if (current2026 < questions2026.length) {
      runQuestion2026(); // immediately start the next one (no waits)
    } else {
      finishSection2026();
    }
  }

  function finishSection2026() {
    sectionName.innerText = "Test Completed";
    timerDisplay.innerHTML = '<h2>Speaking section finished.</h2>';
    questionText.classList.add("hidden");

    const testId = sessionStorage.getItem("TEST_ID");

    if (testId) {
      localStorage.setItem(`result_toefl2026_${testId}_speaking`, "completed");
      localStorage.setItem(`result_2026_${testId}_speaking`, "completed");
      localStorage.setItem(`result_${testId}_speaking`, "completed");
    }
    sessionStorage.removeItem(`ATTEMPT_ID_${testId}`);

    Promise.allSettled(pendingSaves).then(() => {
      if (typeof window.goToNextSection === "function") {
        window.goToNextSection();
      } else {
        const id = testId || '';
        const type = (sessionStorage.getItem('TEST_TYPE') || 'toefl2026').toLowerCase();
        window.location.href = `results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(id)}`;
      }
    });
  }

  // ---------- recording (no on-screen previews) ----------
  function startRecording2026(duration, myToken) {
    return new Promise(resolve => {
      chunks = [];
      const mr = createMediaRecorder();
      mediaRecorder = mr;

      let saved = false;

      mr.onstart = () => console.log('Recording started (2026)');
      mr.ondataavailable = (e) => chunks.push(e.data);
      mr.onstop = () => {
        if (saved) return;
        saved = true;

        const blob = new Blob(chunks, { type: mr.mimeType || 'audio/ogg;codecs=opus' });

        // speaking2026.js (inside mr.onstop)
  const currentTestId = sessionStorage.getItem("TEST_ID") || "default";
  const attemptKey = `ATTEMPT_ID_${currentTestId}`;
  const stableAttemptId = Number(sessionStorage.getItem(attemptKey)) || Date.now();

  const qIndex = current2026;
  const ext = (blob.type.startsWith('audio/webm')) ? 'webm' : 'ogg';
  const filename = `T2026_${currentTestId}_Q${qIndex + 1}_${Date.now()}.${ext}`;

  // 🔑 make the primary key deterministic and unique per question in an attempt
  const record = {
    id: `sp2026:${currentTestId}:${stableAttemptId}:${qIndex}`, // <= KEY CHANGE
    testId: currentTestId,
    attemptId: stableAttemptId,
    index: qIndex,
    filename,
    mime: blob.type,
    createdAt: Date.now(),
    blob
  };

  const savePromise = (window.recStore && typeof window.recStore.save === 'function')
    ? window.recStore.save(record)
    : Promise.resolve();

  pendingSaves.push(savePromise.catch(err => console.error('[speaking2026] save error', err)));

        resolve();
      };

      // visible countdown timer only
      timerDisplay.classList.remove('hidden');
      timerDisplay.textContent = `Recording time: ${duration}s`;

      mr.start();

      const id = setInterval(() => {
        if (myToken !== flowToken2026) {
          clearInterval(id);
          try { mr.stop(); } catch { }
          return;
        }
        duration--;
        timerDisplay.textContent = `Recording time: ${Math.max(0, duration)}s`;
        if (duration <= 0) {
          clearInterval(id);
          try { mr.stop(); } catch { }
        }
      }, 1000);
    });
  }

  // Optional ZIP download (kept). No previews are shown, but the files are still downloadable.
  downloadBtn?.addEventListener('click', async () => {
    if (!window.recStore || !window.recStore.list) return alert('No stored recordings found.');
    const testId = sessionStorage.getItem("TEST_ID") || "default";
    const items = await window.recStore.list(testId);
    if (!items || !items.length) return alert('No stored recordings found.');

    const zip = new JSZip();
    for (const r of items) {
      if (r && r.blob && r.filename) {
        zip.file(r.filename, r.blob);
      }
    }
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Speaking2026_Test${testId}_responses.zip`;
    a.click();
    URL.revokeObjectURL(url);
  });
