let writingTasks = [];
let writingIndex = 0;
let writtenEssays = [];

let readingCountdown = null;
let writingTimer = null;

const _wrParams = new URLSearchParams(window.location.search);
let _WR_TYPE = (_wrParams.get("type") || sessionStorage.getItem("TEST_TYPE") || "toefl").toLowerCase();
if (!["toefl","sh"].includes(_WR_TYPE)) _WR_TYPE = "toefl";
let typeName = ''
if(_WR_TYPE === "toefl"){
  typeName = "TPO"
} else if(_WR_TYPE === "sh"){
  typeName = "SH"
}
sessionStorage.setItem("TEST_TYPE", _WR_TYPE);

const _WR_TESTID = String(_wrParams.get("test") || sessionStorage.getItem("TEST_ID") || "1");
sessionStorage.setItem("TEST_ID", _WR_TESTID);

const writingSection          = document.getElementById("writing-section");
const writingDirectionsScreen = document.getElementById("writingDirections");
const startWritingBtn         = document.getElementById("startWritingBtn");
const sectionName     = document.getElementById("sectionName");
const timerDisplay    = document.getElementById("writing-timer");
const perTaskDirections = document.getElementById("writing-directions");
const writingLayout   = document.getElementById("writing-layout");
const readingPassage  = document.getElementById("reading-passage");
const typing          = document.getElementById("typing");
const writingArea     = document.getElementById("writing-area");
const wordCountEl     = document.getElementById("word-count");
const writingAudio    = document.getElementById("writing-audio");
const progressWrap    = document.getElementById("writing-progress-container");
const progressBar     = document.getElementById("writing-progress-bar");
const finishBtn       = document.getElementById("finish-writing-btn");
const finalResults    = document.getElementById("final-results");
const downloadBtn     = document.getElementById("download-btn");

const testId = _WR_TESTID;

function pad2(n){ return n < 10 ? "0" + n : "" + n; }

function updateWordCount(){
  if (!writingArea || !wordCountEl) return;
  const words = writingArea.value.trim().split(/\s+/).filter(Boolean);
  wordCountEl.textContent = `Words: ${words.length}`;
}

function setVisible(el, visible){
  if (!el) return;
  el.classList[visible ? "remove" : "add"]("hidden");
  if (visible) el.style.display = ""; 
}

function moveProgressToTop(){
  const sec    = writingSection;
  const header = sec ? sec.querySelector(".topSpWr") : null;
  if (!sec || !header || !progressWrap) return;

  if (header.nextSibling !== progressWrap) {
    sec.insertBefore(progressWrap, header.nextSibling);
  }
  progressWrap.style.position = "sticky";
  progressWrap.style.top = "62px";
  progressWrap.style.zIndex = "9";
}

window.goToNextSection = function () {
  const selected = JSON.parse(sessionStorage.getItem("SELECTED_SECTIONS") || "[]");
  let currentIndex = parseInt(sessionStorage.getItem("CURRENT_SECTION_INDEX") || "0", 10);

  currentIndex++;
  if (currentIndex < selected.length) {
    sessionStorage.setItem("CURRENT_SECTION_INDEX", String(currentIndex));
    const sectionMap = {
      reading:   `reading.html?type=${encodeURIComponent(_WR_TYPE)}&test=${encodeURIComponent(testId)}`,
      listening: `listening.html?type=${encodeURIComponent(_WR_TYPE)}&test=${encodeURIComponent(testId)}`,
      speaking:  `speaking.html?type=${encodeURIComponent(_WR_TYPE)}&test=${encodeURIComponent(testId)}`,
      writing:   `writing.html?type=${encodeURIComponent(_WR_TYPE)}&test=${encodeURIComponent(testId)}`
    };
    window.location.href = sectionMap[selected[currentIndex]];
  } else {
    window.location.href = `results.html?type=${encodeURIComponent(_WR_TYPE)}&test=${encodeURIComponent(testId)}`;
  }
};

function getWritingDataPath(tt, tnum) {
  return tt === "sh"
    ? `/dataSH/${tnum}/writingData_Test${tnum}.js`
    : `/data/${tnum}/writingData_Test${tnum}.js`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!testId) {
    document.body.innerHTML = "<h2 style='color:red;'>TEST_ID is missing. Please return to the section selection page.</h2>";
    return;
  }

  const script = document.createElement("script");
  script.src = `${getWritingDataPath(_WR_TYPE, testId)}?_=${Date.now()}`; // cache-buster like other sections
  script.onload = () => {
    if (Array.isArray(window.writingTasks)) {
      writingTasks = window.writingTasks.slice();
      writingDirectionsScreen.style.display = "block";
      writingSection.style.display = "none";
      hookEvents();
    } else {
      alert("Writing data failed to load (window.writingTasks is not an array).");
    }
  };
  script.onerror = () => {
    alert(`Error loading writing data for type=${_WR_TYPE}, test=${testId}.`);
  };
  document.body.appendChild(script);
});

function hookEvents(){
  if (startWritingBtn) {
    startWritingBtn.onclick = () => {
      writingDirectionsScreen.style.display = "none";
      writingSection.style.display = "block";
      sectionName.innerHTML = `${typeName} — Writing — Test ${testId}`;
      runWritingTask();
    };
  }

  if (writingArea) {
    writingArea.removeEventListener("input", updateWordCount);
    writingArea.addEventListener("input", updateWordCount);
  }
}

function runWritingTask(){
  clearInterval(readingCountdown);
  clearInterval(writingTimer);

  if (writingIndex >= writingTasks.length) {
    showFinalResults();
    return;
  }

  const task = writingTasks[writingIndex];

  writingArea.value = "";
  updateWordCount();
  finishBtn.classList.add("hidden");

  perTaskDirections.style.display = "none";
  setVisible(progressWrap, false);
  setVisible(writingAudio, false);

  setVisible(writingLayout, true);
  writingLayout.style.display = "";
  typing.classList.add("hidden");
  readingPassage.style.display = "block";
  timerDisplay.textContent = "";
  timerDisplay.style.display = "block";

  if (task.type === "integrated") {
    readingPassage.innerHTML = task.readingPassage || "";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.style.cssText = "margin-top:10px;padding:6px 12px;font-weight:700;";
    nextBtn.onclick = () => startAudioThenWriting(task);
    readingPassage.appendChild(nextBtn);

    let remaining = typeof task.readingTime === "number" ? task.readingTime : 180;
    timerDisplay.textContent = `Reading time: ${remaining}s`;
    clearInterval(readingCountdown);
    readingCountdown = setInterval(() => {
      remaining--;
      timerDisplay.textContent = `Reading time: ${remaining}s`;
      if (remaining <= 0) {
        clearInterval(readingCountdown);
        startAudioThenWriting(task);
      }
    }, 1000);

  } else {
    readingPassage.innerHTML = `<h2>Prompt</h2><p>${task.question || ""}</p>`;
    perTaskDirections.innerHTML = task.directions || "";
    perTaskDirections.style.display = "block";

    typing.classList.remove("hidden");
    writingArea.focus();
    updateWordCount();
    finishBtn.classList.remove("hidden");
    startWritingTimer(task.timeLimit || 600);
  }
}

function startAudioThenWriting(task){
  clearInterval(readingCountdown);

  setVisible(writingLayout, false);
  timerDisplay.style.display = "none";
  perTaskDirections.style.display = "none";

  playWritingAudio(task.audioSrc, () => {
    perTaskDirections.innerHTML = task.directions || "";
    perTaskDirections.style.display = "block";

    setVisible(writingLayout, true);
    readingPassage.innerHTML = task.readingPassage || "";
    readingPassage.style.display = "block";

    typing.classList.remove("hidden");
    writingArea.focus();
    updateWordCount();
    finishBtn.classList.remove("hidden");

    timerDisplay.style.display = "block";
    startWritingTimer(task.timeLimit || 600);
  });
}

function playWritingAudio(src, onEnded){
  moveProgressToTop();

  if (!src) {
    onEnded && onEnded();
    return;
  }

  writingAudio.src = src.endsWith(".mp3") ? src : `${src}.mp3`;
  setVisible(writingAudio, true);
  setVisible(progressWrap, true);
  progressBar.style.width = "0%";

  writingAudio.play().catch(() => {
    setVisible(writingAudio, false);
    setVisible(progressWrap, false);
    onEnded && onEnded();
  });

  const interval = setInterval(() => {
    if (writingAudio.duration) {
      const pct = (writingAudio.currentTime / writingAudio.duration) * 100;
      progressBar.style.width = `${pct}%`;
    }
    if (writingAudio.ended) {
      clearInterval(interval);
      setVisible(writingAudio, false);
      setVisible(progressWrap, false);
      onEnded && onEnded();
    }
  }, 200);
}

function startWritingTimer(totalSeconds){
  const task = writingTasks[writingIndex];
  finishBtn.innerText = task.type === "integrated" ? "Next" : "Finish";

  let remaining = totalSeconds;
  clearInterval(writingTimer);
  timerDisplay.textContent = `Time: ${Math.floor(remaining/60)}:${pad2(remaining%60)}`;
  writingTimer = setInterval(() => {
    remaining--;
    timerDisplay.textContent = `Time: ${Math.floor(remaining/60)}:${pad2(remaining%60)}`;
    if (remaining <= 0) {
      clearInterval(writingTimer);
      saveAndNextEssay();
    }
  }, 1000);

  finishBtn.onclick = () => {
    clearInterval(writingTimer);
    saveAndNextEssay();
  };
}

function saveAndNextEssay(){
  const task = writingTasks[writingIndex];
  writtenEssays.push({
    label: task.type === "integrated" ? "Integrated Essay" : "Independent Essay",
    content: writingArea.value || ""
  });
  writingIndex++;
  runWritingTask();
}

function showFinalResults(){
  setVisible(writingSection, false);

  finalResults.innerHTML = '<h2>You can download your essays below:</h2>';
  writtenEssays.forEach((essay) => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${essay.label}</h4><p>${(essay.content || "").replace(/\n/g, "<br>")}</p>`;
    finalResults.appendChild(div);
  });

  finalResults.classList.remove("hidden");
  downloadBtn.classList.remove("hidden");
  downloadBtn.onclick = downloadAllResults;

  const currentTestId = testId;
  if (currentTestId) {
    localStorage.setItem(`result_${_WR_TYPE}_${currentTestId}_writing`, "completed");
    localStorage.setItem(`result_${currentTestId}_writing`, "completed");
    localStorage.setItem(`writtenEssays_${_WR_TYPE}_${currentTestId}`, JSON.stringify(writtenEssays));
    localStorage.setItem(`writtenEssays_${currentTestId}`, JSON.stringify(writtenEssays));
  }

  if (typeof window.goToNextSection === "function") {
    window.goToNextSection();
  }
}

async function downloadAllResults(){
  if (typeof JSZip === "undefined") {
    alert("JSZip not found. Please ensure the JSZip script is included.");
    return;
  }

  const zip = new JSZip();
  writtenEssays.forEach((essay, index) => {
    zip.file(`essay${index + 1}.txt`, essay.content || "");
  });

  const blob = await zip.generateAsync({ type: "blob" });
  const currentTestId = testId || "unknown";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Test_${currentTestId}_Writing_Responses.zip`;
  a.click();
}

function undoText(){ document.execCommand("undo"); }
function redoText(){ document.execCommand("redo"); }
function cutText(){ document.execCommand("cut"); }
function copyText(){ document.execCommand("copy"); }
function pasteText(){ document.execCommand("paste"); }
