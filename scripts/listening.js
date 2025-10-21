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

const testId = window.TEST_ID || "default_test";

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
// prefer URL test if present; keep session in sync
const urlTestId = _paramsL.get("test");
if (urlTestId) window.TEST_ID = urlTestId;
sessionStorage.setItem("TEST_ID", window.TEST_ID || testId);

// ---------- CHANGED: router to preserve ?type=... just like reading ----------
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

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
//   alert("Right-click is disabled on this page.");
// });

// let visibilityTimeout = null;
// function visibilityHandler() {
//   if (document.visibilityState === "hidden") {
//     visibilityTimeout = setTimeout(() => {
//       alert("You left the test window. The test will now reset.");
//       location.reload();
//     }, 1000);
//   } else if (document.visibilityState === "visible") {
//     clearTimeout(visibilityTimeout);
//     visibilityTimeout = null;
//   }
// }
// document.addEventListener("visibilitychange", visibilityHandler);
let timeFull = testType === "toefl"? 15*60 : 20*60;
let interval = null;
let passageIndex = 0, questionIndex = 0, userAnswers = [], currentQuestion;
let questionV = 0;

function getListeningDataPath(tt, tnum) {
  return tt === "sh"
    ? `../dataSH/${tnum}/listeningData_Test${tnum}.js`
    : `../data/${tnum}/listeningData_Test${tnum}.js`;
}
mentionSection.innerHTML = `${typeName} — Test ${testId} — Listening`;

function loadListeningData(tt, tnum) {
  return new Promise((resolve, reject) => {
    const path = getListeningDataPath(tt, tnum);
    const src = `${path}?_=${Date.now()}`;
    try { delete window.listeningData; } catch { }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => {
      if (typeof window.listeningData !== "undefined") {
        resolve(window.listeningData);
      } else {
        reject(new Error(`"${path}" loaded but window.listeningData is undefined. Ensure the file sets: window.listeningData = [...]`));
      }
    };
    s.onerror = () => reject(new Error(`Failed to load ${path}`));
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
  loadListeningData(testType, effTestId)
    .then(() => setTimeout(loadPassage, 1000))
    .catch(err => {
      console.error(err);
      alert("Could not load listening test data. Check file paths and that the data file sets window.listeningData.");
    });
};

audioEl.onended = loadQuestion;

function loadPassage() {
  audioPlayer.style.display = "block"
  nextBtn.style.display = "none";
  timerListening.style.display = "none";
  clearInterval(interval);
  document.getElementById("listening-section").style.display = "block";
  const passage = window.listeningData[passageIndex];
  audioEl.src = passage.audio;
  progressWrapper.style.display = "block";
  audioEl.play().catch(() => console.warn("Autoplay blocked"));
  updateProgress();
}

function updateProgress() {
  const progressInterval = setInterval(() => {
    if (audioEl.duration) {
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
  audioPlayer.style.display = "none"
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
  playIntroSequence(intros, () => {
    renderOptions();
    goTime();
  });
}

function playIntroSequence(introList, callback) {
  let index = 0;
  function playNext() {
    if (index >= introList.length) return callback();
    introEl.src = introList[index];
    introEl.play().catch(() => console.warn("Intro autoplay blocked"));
    introEl.onended = () => {
      index++;
      playNext();
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
      sendToFinalResults(); // Ensure results are saved
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
  const allQuestions = window.listeningData.flatMap(p => p.questions);
  const totalPoints = userAnswers.reduce((sum, ans) => {
    const q = allQuestions[ans.qNum - 1];
    if (q.type === "single") {
      return sum + (ans.selected[0] === ans.correct[0] ? 1 : 0);
    }
    if (q.type === "multiple" || q.type === "triple") {
      return sum + (setsEqual(ans.selected, ans.correct) ? 1 : 0);
    }
    if (q.type === "matrix") {
      const allCorrect = ans.selected.every((val, i) => val === q.rows[i].correct);
      return sum + (allCorrect ? 1 : 0);
    }
    return sum;
  }, 0);

  const maxPoints = allQuestions.length;

  const result = {
    section: "listening",
    score: totalPoints,
    total: maxPoints,
    answers: userAnswers
  };

  const effTestId = window.TEST_ID || testId;
  localStorage.setItem(`result_${testType}_${effTestId}_listening`, JSON.stringify(result));
  localStorage.setItem(`result_${effTestId}_listening`, JSON.stringify(result));
}
