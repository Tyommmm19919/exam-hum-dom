const audioEl = document.getElementById("mainAudio");
const introEl = document.getElementById("introAudio");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const confirmBtn = document.getElementById("confirmBtn");
const questionContainer = document.querySelector(".question-container");
const progressWrapper = document.querySelector(".audio-progress");
const timerListening = document.getElementById("timerListening");
const audioPlayer = document.getElementById("audio-player");
const mentionSection = document.getElementById("mention-section")
const mobileIntroPlayBtn = document.getElementById("mobileIntroPlayBtn");
const introAudioContainer = document.getElementById("introAudioContainer");
const mobilePlayBtn = document.getElementById("mobilePlayBtn");

//baba
// ===== Autoplay helper + state (add once at top of listening.js) =====
window.AUDIO_UNLOCKED = sessionStorage.getItem("AUDIO_UNLOCKED") === "1";

["pointerdown","keydown","touchstart"].forEach(evt =>
  window.addEventListener(evt, () => {
    if (!window.AUDIO_UNLOCKED) {
      window.AUDIO_UNLOCKED = true;
      sessionStorage.setItem("AUDIO_UNLOCKED","1");
    }
  }, { once: true, capture: true })
);

/**
 * Attempt to play() an <audio>. If blocked by autoplay policy, call showUi(getUserGesture)
 * where getUserGesture() must be called from a click/tap to retry play().
 */
window.playWithAutoplayGuard = async function(el, showUi){
  try {
    await el.play();
    window.AUDIO_UNLOCKED = true;
    sessionStorage.setItem("AUDIO_UNLOCKED","1");
    return true;
  } catch (e) {
    const blocked = e?.name === "NotAllowedError" || /play\(\) failed/i.test(e?.message||"");
    if (!blocked) { console.error("Audio play failed:", e); return false; }
    if (typeof showUi === "function") {
      showUi(async () => {
        try {
          await el.play();
          window.AUDIO_UNLOCKED = true;
          sessionStorage.setItem("AUDIO_UNLOCKED","1");
        } catch (err) {
          console.error("Manual play failed:", err);
          alert("Cannot play audio. Please check your device volume and try again.");
        }
      });
    }
    return false;
  }
};


//final change
const testId = window.TEST_ID || "default_test";
// === Email config (reuse your existing Formspree project) ===
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblpovwz";

// Prevent double-send/race conditions
let __finalizedListening = false;

/** Send Listening results (TOEFL/SH) to Formspree */
function sendListeningResultsEmail(payload) {
  const label = (testType === "sh" ? "SH" : "TPO");
  const wrong = Math.max(0, (payload.total || 0) - (payload.score || 0));
  const pct   = payload.total ? Math.round((payload.score / payload.total) * 100) + "%" : "—";

  const lines = [
    `Exam: ${label} — Listening`,
    `Test ID: ${payload.testId}`,
    `Finished: ${new Date(payload.finishedAt || Date.now()).toLocaleString()}`,
    `Score: ${payload.score}/${payload.total} (${pct})`,
    `Wrong: ${wrong}`,
  ];

  const fd = new FormData();
  fd.append("message", lines.join("\n"));
  fd.append("source", "listening.html auto-send");
  fd.append("subject", `${label} Listening Results • Test ${payload.testId}`);
  fd.append("_subject", `${label} Listening Results • Test ${payload.testId}`);

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(FORMSPREE_ENDPOINT, fd);
      return;
    }
  } catch (_) { /* ignore */ }

  fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: fd,
    keepalive: true,
  }).catch(() => {});
}

const _paramsL = new URLSearchParams(window.location.search);
let testType = (_paramsL.get("type") || sessionStorage.getItem("TEST_TYPE") || "toefl").toLowerCase();
if (!["toefl", "sh"].includes(testType)) testType = "toefl";
sessionStorage.setItem("TEST_TYPE", testType);
let typeName = ''
if(testType === "toefl"){
  typeName = "TPO"
} else if(testType === "sh"){
  typeName = "SH"
}

const urlTestId = _paramsL.get("test");
if (urlTestId) window.TEST_ID = urlTestId;
sessionStorage.setItem("TEST_ID", window.TEST_ID || testId);

// Router function
window.goToNextSection = function () {
  const selected = JSON.parse(sessionStorage.getItem("SELECTED_SECTIONS") || "[]");
  let currentIndex = parseInt(sessionStorage.getItem("CURRENT_SECTION_INDEX") || "0");
  currentIndex++;
  const effTestId = window.TEST_ID || testId;

  if (currentIndex < selected.length) {
    sessionStorage.setItem("CURRENT_SECTION_INDEX", currentIndex.toString());
    const sectionMap = {
      reading: `reading.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(effTestId)}`,
      listening: `listening.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(effTestId)}`,
      speaking: `speaking.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(effTestId)}`,
      writing: `writing.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(effTestId)}`
    };
    window.location.href = sectionMap[selected[currentIndex]];
  } else {
    window.location.href = `results.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(effTestId)}`;
  }
};

// Visibility handler
let visibilityTimeout = null;
function visibilityHandler() {
  if (document.visibilityState === "hidden") {
    visibilityTimeout = setTimeout(() => {
      alert("You left the test window. The test will now reset.");
      location.reload();
    }, 1000);
  } else if (document.visibilityState === "visible") {
    clearTimeout(visibilityTimeout);
    visibilityTimeout = null;
  }
}
document.addEventListener("visibilitychange", visibilityHandler);

let timeFull = testType === "toefl"? 15*60 : 20*60;
let interval = null;
let passageIndex = 0, questionIndex = 0, userAnswers = [], currentQuestion;
let questionV = 0;

// ========== UNIVERSAL PATH CONFIGURATION ==========
// This works on GitHub Pages, Local Development, and Future GoDaddy Domain
function getUniversalBasePath() {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  // GitHub Pages detection
  if (hostname.includes('github.io')) {
    // Extract repo name from pathname (e.g., '/exam-hum-dom/' from '/exam-hum-dom/indexes/listening.html')
    const parts = pathname.split('/').filter(part => part && !part.includes('.html'));
    const repoName = parts[0];
    return repoName ? `/${repoName}/` : '/';
  }
  
  // Local development (Live Server, etc.)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return '/';
  }
  
  // Production domains (your future GoDaddy domain, Vercel, Netlify, etc.)
  return '/';
}

// Universal path fixing - works everywhere
function fixUniversalPath(path) {
  if (!path || typeof path !== 'string') return path;
  
  const base = getUniversalBasePath();
  
  // If it's already a full URL, leave it alone
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // If path starts with / but we need base path, add it
  if (path.startsWith('/') && base !== '/') {
    return base + path.slice(1);
  }
  
  // If it's a relative path without /, make it absolute from base
  if (!path.startsWith('/') && !path.startsWith('../')) {
    return base + path;
  }
  
  return path;
}

// Apply universal path fixing to all data
function applyUniversalPaths(data) {
  if (Array.isArray(data)) {
    return data.map(applyUniversalPaths);
  }
  
  if (data && typeof data === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      if (key === 'audio' || key === 'intro') {
        if (Array.isArray(value)) {
          result[key] = value.map(fixUniversalPath);
        } else {
          result[key] = fixUniversalPath(value);
        }
      } else {
        result[key] = applyUniversalPaths(value);
      }
    }
    return result;
  }
  
  return data;
}
// ========== END UNIVERSAL PATH CONFIGURATION ==========

// Data loading with relative paths
function getListeningDataPath(tt, tnum) {
  if (tt === "sh") {
    return `../dataSH/${tnum}/listeningData_Test${tnum}.js`;
  } else {
    return `../data/${tnum}/listeningData_Test${tnum}.js`;
  }
}

mentionSection.innerHTML = `${typeName} — Test ${testId} — Listening`;

function loadListeningData(tt, tnum) {
  return new Promise((resolve, reject) => {
    const path = getListeningDataPath(tt, tnum);
    const src = `${path}?_=${Date.now()}`;
    console.log('Loading listening data from:', src);
    console.log('Universal base path:', getUniversalBasePath());
    
    try { delete window.listeningData; } catch { }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => {
      if (typeof window.listeningData !== "undefined") {
        console.log('Listening data loaded successfully');
        console.log('Raw audio path example:', window.listeningData[0]?.audio);
        
        // Apply universal path fixing
        const fixedData = applyUniversalPaths(window.listeningData);
        console.log('Fixed audio path example:', fixedData[0]?.audio);
        
        resolve(fixedData);
      } else {
        reject(new Error(`"${path}" loaded but window.listeningData is undefined`));
      }
    };
    s.onerror = (err) => {
      console.error('Failed to load listening data from:', src);
      reject(new Error(`Failed to load ${path}`));
    };
    document.body.appendChild(s);
  });
}

function setUpTime() {
  const min = Math.floor(timeFull / 60);
  const sec = timeFull % 60;
  timerListening.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function valuedTime() {
  timeFull--;
  if (timeFull === 0) {
    sendToFinalResults();
    if (typeof window.goToNextSection === "function") {
      window.goToNextSection();
    }
  }
  setUpTime();
}

function goTime() {
  interval = setInterval(valuedTime, 1000);
  timerListening.style.display = "block";
}

window.startAllAll = function () {
  const effTestId = window.TEST_ID || testId;
  console.log('Starting listening test:', { 
    testType, 
    effTestId,
    environment: window.location.hostname,
    basePath: getUniversalBasePath()
  });
  
  loadListeningData(testType, effTestId)
    .then((data) => {
      window.listeningData = data;
      console.log('Data loaded with universal paths applied');
      setTimeout(loadPassage, 1000);
    })
    .catch(err => {
      console.error('Loading error:', err);
      alert("Could not load listening test data. Check:\n1. Data file exists\n2. File sets window.listeningData\n3. Correct test number\n\nError: " + err.message);
    });
};

// Audio error handling
audioEl.addEventListener('error', function(e) {
  console.error('Main audio error:', e);
  console.log('Failed audio src:', audioEl.src);
});

introEl.addEventListener('error', function(e) {
  console.error('Intro audio error:', e);
  console.log('Failed intro src:', introEl.src);
});

audioEl.onended = loadQuestion;

function loadPassage() {
  audioPlayer.style.display = "block";
  nextBtn.style.display = "none";
  timerListening.style.display = "none";
  clearInterval(interval);
  document.getElementById("listening-section").style.display = "block";
  
  const passage = window.listeningData[passageIndex];
  console.log('Loading passage audio:', passage.audio);
  
  audioEl.src = passage.audio;
  progressWrapper.style.display = "block";
  
  const showMainPlayUi = (getUserGesture) => {
    // Use your existing green mobile button
    mobilePlayBtn.style.display = 'block';
    mobilePlayBtn.onclick = async () => {
      mobilePlayBtn.style.display = 'none';
      await getUserGesture(); // calls audioEl.play() and unlocks on success
    };
  };

window.playWithAutoplayGuard(audioEl, showMainPlayUi);


  updateProgress();
}

function updateProgress() {
  const progressInterval = setInterval(() => {
    if (audioEl.duration && !isNaN(audioEl.duration)) {
      const percent = (audioEl.currentTime / audioEl.duration) * 100;
      progressBar.style.width = percent + "%";
    }
    if (audioEl.ended) {
      clearInterval(progressInterval);
      progressWrapper.style.display = "none";
      progressBar.style.width = "0%";
      nextBtn.style.display = "block";
    }
  }, 200);
}

function loadQuestion() {
  audioPlayer.style.display = "none";
  currentQuestion = window.listeningData[passageIndex].questions[questionIndex];
  questionText.innerHTML = `${questionV + 1}. &nbsp;${currentQuestion.question}`;
  
  if (currentQuestion.type === "multiple") {
    questionText.innerHTML += "<h3>Select 2 answers</h3>";
  } else if (currentQuestion.type === "triple") {
    questionText.innerHTML += "<h3>Select 3 answers</h3>";
  } else if (currentQuestion.type === "matrix") {
    questionText.innerHTML += "<h3>Click in the correct box for each phrase</h3>";
  }
  
  clearInterval(interval);
  questionContainer.style.display = "block";
  
  const intros = Array.isArray(currentQuestion.intro) ? currentQuestion.intro : [currentQuestion.intro];
  console.log('Loading intro audios:', intros);
  
  playIntroSequence(intros, () => {
    renderOptions();
    goTime();
  });
}

function playIntroSequence(introList, callback) {
  let index = 0;
  
  function playNext() {
    if (index >= introList.length) return callback();
    
    console.log('Playing intro:', introList[index]);
    introEl.src = introList[index];
    
    introEl.play().catch((error) => {
      console.error('Intro audio play failed:', error);
      index++;
      setTimeout(playNext, 100);
    });
    
    introEl.onended = () => {
      index++;
      playNext();
    };
    
    introEl.onerror = () => {
      console.error('Intro audio loading failed');
      index++;
      setTimeout(playNext, 100);
    };
  }
  
  playNext();
}

function renderOptions() {
  optionsDiv.innerHTML = "";
  if (currentQuestion.type === "matrix") {
    const table = document.createElement("table");
    table.classList.add("yesno-table");
    const headerRow = document.createElement("tr");
    headerRow.appendChild(document.createElement("th"));
    currentQuestion.columns.forEach(col => {
      const th = document.createElement("th");
      th.textContent = col;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    currentQuestion.rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");
      const tdLabel = document.createElement("td");
      tdLabel.textContent = row.text;
      tr.appendChild(tdLabel);
      currentQuestion.columns.forEach((col, colIndex) => {
        const td = document.createElement("td");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `row${rowIndex}`;
        input.value = col;
        input.id = `r${rowIndex}_c${colIndex}`;
        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.classList.add("matrix-radio-label");
        td.appendChild(input);
        td.appendChild(label);
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    optionsDiv.appendChild(table);
    nextBtn.disabled = false;
  } else {
    currentQuestion.options.forEach((opt, i) => {
      const input = document.createElement("input");
      input.type = currentQuestion.type === "multiple" || currentQuestion.type === "triple" ? "checkbox" : "radio";
      input.name = "option";
      input.value = opt.value;
      input.id = `opt${i}`;
      const label = document.createElement("label");
      label.htmlFor = `opt${i}`;
      label.textContent = opt.text;
      const wrapper = document.createElement("div");
      wrapper.appendChild(input);
      wrapper.appendChild(label);
      optionsDiv.appendChild(wrapper);
      if (currentQuestion.type === "multiple" || currentQuestion.type === "triple") {
        input.addEventListener("change", () => {
          const checked = optionsDiv.querySelectorAll("input:checked");
          const max = currentQuestion.type === "multiple" ? 2 : 3;
          if (checked.length > max) input.checked = false;
        });
      }
    });
    nextBtn.disabled = false;
  }
  optionsDiv.style.display = "block";
}

nextBtn.onclick = () => {
  nextBtn.style.display = "none";
  confirmBtn.style.display = "inline-block";
};

confirmBtn.onclick = () => {
  questionV++;
  let selected = [];
  if (currentQuestion.type === "matrix") {
    selected = currentQuestion.rows.map((_, i) => {
      const selectedInput = optionsDiv.querySelector(`input[name="row${i}"]:checked`);
      return selectedInput ? selectedInput.value : "";
    });
  } else {
    selected = [...optionsDiv.querySelectorAll("input:checked")].map(i => i.value);
  }

  const correct = currentQuestion.type === "matrix"
    ? currentQuestion.rows.map(r => r.correct)
    : currentQuestion.correct;

  userAnswers.push({ qNum: questionV, selected, correct });

  questionIndex++;
  confirmBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  optionsDiv.innerHTML = "";
  questionText.textContent = "";
  nextBtn.disabled = true;
  optionsDiv.style.display = "none";
  questionContainer.style.display = "none";

  if (questionIndex >= window.listeningData[passageIndex].questions.length) {
    passageIndex++;
    questionIndex = 0;
    if (passageIndex >= window.listeningData.length) {
      sendToFinalResults();
      if (typeof window.goToNextSection === "function") {
        window.goToNextSection();
      }
    } else {
      loadPassage();
    }
  } else {
    loadQuestion();
  }
};

function setsEqual(a, b) {
  if (a.length !== b.length) return false;
  const A = new Set(a), B = new Set(b);
  for (const v of A) if (!B.has(v)) return false;
  return true;
}

function sendToFinalResults() {
  if (__finalizedListening) return;
  __finalizedListening = true;

  const allQuestions = window.listeningData.flatMap(p => p.questions);
  const totalPoints = userAnswers.reduce((sum, ans) => {
    const q = allQuestions[ans.qNum - 1];
    if (!q) return sum;

    if (q.type === "single") {
      return sum + (ans.selected[0] === (q.correct?.[0] ?? "") ? 1 : 0);
    }
    if (q.type === "multiple" || q.type === "triple") {
      return sum + (setsEqual(ans.selected, q.correct || [] ) ? 1 : 0);
    }
    if (q.type === "matrix") {
      const allCorrect = ans.selected.every((val, i) => val === (q.rows?.[i]?.correct ?? ""));
      return sum + (allCorrect ? 1 : 0);
    }
    return sum;
  }, 0);

  const maxPoints = allQuestions.length;

  const effTestId = window.TEST_ID || testId;
  const result = {
    section: "listening",
    score: totalPoints,
    total: maxPoints,
    answers: userAnswers,
    finishedAt: new Date().toISOString(),
    testId: effTestId,
    testType
  };

  localStorage.setItem(`result_${testType}_${effTestId}_listening`, JSON.stringify(result));
  localStorage.setItem(`result_${effTestId}_listening`, JSON.stringify(result));

  sendListeningResultsEmail(result);
}