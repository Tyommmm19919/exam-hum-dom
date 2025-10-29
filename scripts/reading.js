const AUTO_START = true;

const params = new URLSearchParams(window.location.search);
const TYPE_LABELS = { toefl: 'TPO', sh: 'SH' };

let testType = (params.get('type') || sessionStorage.getItem('TEST_TYPE') || 'toefl').toLowerCase();
if (!['toefl', 'sh'].includes(testType)) testType = 'toefl';
sessionStorage.setItem('TEST_TYPE', testType);

window.TEST_ID = String(params.get('test') || window.TEST_ID || sessionStorage.getItem('TEST_ID') || '1');
const testId = window.TEST_ID;
sessionStorage.setItem('TEST_ID', testId);

const passageTitleEl   = document.getElementById('passage-title');
const passageTextEl    = document.getElementById('passage-text');
const questionContainer= document.getElementById('question-container');
const prevBtn          = document.getElementById('prev-btn');
const nextBtn          = document.getElementById('next-btn');
const finalScoreEl     = document.getElementById('final-score');
const timerEl          = document.getElementById('timer');
const readingContainer = document.getElementById('reading-container');
const mentionSection   = document.getElementById('mention-section');
const viewText         = document.getElementById('viewText');
const closeText        = document.getElementById('closeText');
const directionsR      = document.getElementById('directionsR');
let __finalizingReading = false;

// Reuse your existing Formspree form:
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblpovwz";

/** Send Reading results (TOEFL/SH) to Formspree */
async function sendReadingResultsEmail(payload) {
  // payload: { testType, testId, score, total, answers, finishedAt, stats }
  const wrong = Math.max(0, (payload.total || 0) - (payload.score || 0));
  const pct   = payload.total ? Math.round((payload.score / payload.total) * 100) + "%" : "—";
  const label = (TYPE_LABELS?.[payload.testType] || payload.testType || '').toUpperCase();

  // Optional short per-type breakdown (counts & points)
  const st = payload.stats || {};
  const tidy = (k) => st[k] ? `${st[k].correctPts}/${st[k].totalPts}` : "—";
  // mcq=multiple-choice, ms=multiple-answer, ins=insert-sentence, sum=summary, db=dual-bucket

  const lines = [
    `Exam: ${label} — Reading`,
    `Test ID: ${payload.testId}`,
    `Finished: ${new Date(payload.finishedAt || Date.now()).toLocaleString()}`,
    `Score: ${payload.score}/${payload.total} (${pct})`,
    `Wrong points: ${wrong}`,
    `Breakdown (points):`,
    `  • Multiple-choice: ${tidy("mcq")}`,
    `  • Multiple-answer: ${tidy("ms")}`,
    `  • Insert-sentence: ${tidy("ins")}`,
    `  • Summary:        ${tidy("sum")}`,
    `  • Dual-bucket:    ${tidy("db")}`,
  ];

  const fd = new FormData();
  fd.append("message", lines.join("\n"));
  fd.append("source", "reading.html auto-send");
  fd.append("subject", `${label} Reading Results • Test ${payload.testId}`);
  fd.append("_subject", `${label} Reading Results • Test ${payload.testId}`);
  // If you capture a student email on-page, include it so replies go straight to them:
  // const studentEmail = document.querySelector("#studentEmail")?.value || "";
  // if (studentEmail) fd.append("email", studentEmail);

  await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: fd,
    keepalive: true, // ✅ lets the browser finish sending even if we navigate away
  });
}


function buildCandidateUrls(tt, tnum) {
  // Simplified and reliable: direct paths
  const baseFolder = tt === 'sh' ? '../dataSH' : '../data';
  const filePath = `${baseFolder}/${tnum}/readingData_Test${tnum}.js`;

  // Add cache-busting timestamp
  const now = Date.now().toString();
  const url = new URL(filePath, document.baseURI);
  url.searchParams.set('_', now);

  console.log(`[reading] Loading from: ${url.toString()}`);
  return [url.toString()];
}

async function loadReadingData(tt, tnum) {
  try {
    // Clear any previous data
    delete window.readingData;

    const [url] = buildCandidateUrls(tt, tnum);
    await loadScript(url);

    if (typeof window.readingData === 'undefined') {
      throw new Error(`Loaded ${url}, but window.readingData was not defined. Ensure your file includes "window.readingData = {...}"`);
    }

    console.log(`[reading] Successfully loaded reading data from ${url}`);
    return window.readingData;
  } catch (err) {
    console.error('[reading] Failed to load reading data:', err);
    alert(
      'Failed to load reading test data.\n' +
      'Make sure your file exists at:\n\n' +
      '../data/<testId>/readingData_Test<testId>.js\n' +
      'or\n' +
      '../dataSH/<testId>/readingData_Test<testId>.js'
    );
    throw err;
  }
}


function loadScript(srcUrl) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = srcUrl;
    script.async = true;
    script.onload  = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${srcUrl}`));
    document.body.appendChild(script);
  });
}

function computePassageMeta() {
  const counts = (window.readingData?.passages || []).map(p => (p?.questions || []).length);
  const starts = [];
  let sum = 0;
  for (const c of counts) { starts.push(sum); sum += c; }
  return { counts, starts, total: sum };
}
let PASSAGE_META = { counts: [], starts: [], total: 0 };

let timerInterval = null;
let userAnswers = []; 
window.currentQuestionIndex = 0;

window.goToNextSection = function () {
  const selected = JSON.parse(sessionStorage.getItem('SELECTED_SECTIONS') || '[]');
  let currentIndex = parseInt(sessionStorage.getItem('CURRENT_SECTION_INDEX') || '0', 10);
  currentIndex++;
  if (currentIndex < selected.length) {
    sessionStorage.setItem('CURRENT_SECTION_INDEX', String(currentIndex));
    const sectionMap = {
      reading:   `reading.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(testId)}`,
      listening: `listening.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(testId)}`,
      speaking:  `speaking.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(testId)}`,
      writing:   `writing.html?type=${encodeURIComponent(testType)}&test=${encodeURIComponent(testId)}`
    };
    const nextSection = selected[currentIndex];
    window.location.href = sectionMap[nextSection];
  } else {
    const tId = sessionStorage.getItem('TEST_ID');
    const tType = sessionStorage.getItem('TEST_TYPE') || 'toefl';
    window.location.href = `results.html?type=${encodeURIComponent(tType)}&test=${encodeURIComponent(tId)}`;
  }
};

function startReading() {
  if (mentionSection) mentionSection.innerHTML = `${TYPE_LABELS[testType]} — Test ${testId} — Reading`;
  if (directionsR) directionsR.style.display = 'none';
  if (readingContainer) readingContainer.style.display = 'flex';
  if (timerEl) timerEl.style.display = 'block';

  userAnswers = new Array(PASSAGE_META.total).fill(null);
  window.currentQuestionIndex = 0;

  let totalTime = 0;
  if(testType === "toefl"){
    totalTime = 35*60
  } else if(testType === "sh"){
    totalTime = 80*60
  }
timerInterval = setInterval(async () => {
  if (totalTime <= 0) {
    clearInterval(timerInterval);
    await showFinalScore();
    if (readingContainer) readingContainer.style.display = 'none';
    if (timerEl) timerEl.style.display = 'none';
    if (typeof window.goToNextSection === 'function') window.goToNextSection();
    return;
  }
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerEl.textContent = `Time Left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  totalTime--;
}, 1000);


  setTimeout(() => render(), 0);
}
window.startReading = startReading;

function getPassageAndQuestion(globalIndex) {
  let offset = 0;
  for (let pi = 0; pi < window.readingData.passages.length; pi++) {
    const passage = window.readingData.passages[pi];
    const qLen = passage.questions.length;
    if (globalIndex < offset + qLen) {
      const localIndex = globalIndex - offset;
      return { passageIndex: pi, localIndex, passage, question: passage.questions[localIndex] };
    }
    offset += qLen;
  }
  const lastPi = window.readingData.passages.length - 1;
  const lastPassage = window.readingData.passages[lastPi];
  const lastIdx = Math.max(0, lastPassage.questions.length - 1);
  return { passageIndex: lastPi, localIndex: lastIdx, passage: lastPassage, question: lastPassage.questions[lastIdx] };
}
function render() {
  const passageSection = document.getElementById('passage-section');
  const questionSection = document.getElementById('question-section');
  const layoutEl = document.getElementById('layout');
  const rc = document.getElementById('reading-container');

  rc.classList.remove('summary-mode');
  if (viewText) viewText.style.display = 'none';
  if (closeText) closeText.style.display = 'none';
  passageSection.style.display = 'block';
  questionSection.style.display = 'block';
  questionSection.style.marginTop = '';
  questionSection.style.maxWidth = '';
  questionSection.style.position = '';
  questionSection.style.top = '';
  questionSection.style.maxHeight = '';
  questionSection.style.overflowY = '';
  layoutEl.style.overflowY = '';
  layoutEl.style.height = '';
  layoutEl.style.minHeight = '';

  finalScoreEl.style.display = 'none';
  finalScoreEl.innerHTML = '';

  const ctx = getPassageAndQuestion(currentQuestionIndex);
  const { passage, question, localIndex } = ctx;
  const localNumber = localIndex + 1;

  passageTitleEl.textContent = passage.title;

  passageTextEl.innerHTML = '';
  const paragraph = document.createElement('p');
  const fullText = passage.text.join(' ');
  const parts = fullText.split('[BOX]');
  let firstBoxToScroll = null;

  parts.forEach((part, i) => {
    const span = document.createElement('span');
    span.innerHTML = part;
    paragraph.appendChild(span);
    if (i < parts.length - 1 && question.type === 'insert-sentence') {
      if (userAnswers[currentQuestionIndex] === i) {
        const sentence = document.createElement('span');
        sentence.innerHTML = ' ' + question.sentence;
        sentence.style.fontWeight = '600';
        paragraph.appendChild(sentence);
      } else {
        const box = document.createElement('span');
        box.className = 'insert-box';
        box.dataset.index = i;
        box.onclick = () => { userAnswers[currentQuestionIndex] = i; render(); };
        paragraph.appendChild(box);
        if (firstBoxToScroll === null) firstBoxToScroll = box;
      }
    }
  });
  if (firstBoxToScroll) {
    setTimeout(() => { firstBoxToScroll.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
  }
  passageTextEl.appendChild(paragraph);

  questionContainer.innerHTML = '';
  const block = document.createElement('div');
  block.className = 'question-block';

  const qTitle = document.createElement('h3');
  if (question.type === 'multiple-answer') {
    qTitle.innerHTML = `${localNumber}. ${question.prompt || question.question}<br><h4>Select 2 answers</h4>`;
  } else if (question.type === 'summary') {
    qTitle.innerHTML = `${localNumber}. ${question.prompt || question.question}<br><h4>Drag your choices to the spaces where they belong. To review the passage, select View Passage.</h4>`;
  } else {
    qTitle.innerHTML = `${localNumber}. ${question.prompt || question.question}`;
  }
  block.appendChild(qTitle);

  if (question.type === 'insert-sentence') {
    qTitle.innerHTML = `${localNumber}. Look at the four squares ■ that indicate where the following sentence could be added to the passage.`;
    if (viewText) viewText.style.display = 'none';
    const sentenceToInsert = document.createElement('div');
    sentenceToInsert.style.fontWeight = '100';
    sentenceToInsert.style.margin = '10px 0';
    sentenceToInsert.innerHTML = `"${question.sentence}"<br><br><h3>Where would the sentence best fit? Click on a square ■ to add the sentence to the passage.</h3>`;
    block.appendChild(sentenceToInsert);
  }

  if (question.type === 'multiple-choice') {
    if (viewText) viewText.style.display = 'none';
    const ul = document.createElement('ul');
    ul.className = 'options';
    question.options.forEach((opt, i) => {
      const li = document.createElement('li');
      li.textContent = opt;
      if (userAnswers[currentQuestionIndex] === i) li.classList.add('selected');
      li.onclick = () => { userAnswers[currentQuestionIndex] = i; render(); };
      ul.appendChild(li);
    });
    block.appendChild(ul);
  }

  if (question.type === 'multiple-answer') {
    if (viewText) viewText.style.display = 'none';
    const ul = document.createElement('ul');
    ul.className = 'options';
    let selectedOptions = userAnswers[currentQuestionIndex] || [];
    question.options.forEach((opt, i) => {
      const li = document.createElement('li');
      li.textContent = opt;
      if (selectedOptions.includes(i)) li.classList.add('selected');
      li.onclick = () => {
        if (selectedOptions.includes(i)) {
          selectedOptions = selectedOptions.filter((selected) => selected !== i);
        } else if (selectedOptions.length < 2) {
          selectedOptions.push(i);
        }
        userAnswers[currentQuestionIndex] = selectedOptions;
        render();
      };
      ul.appendChild(li);
    });
    block.appendChild(ul);
  }

  if (question.type === 'summary') {
    const passageSection = document.getElementById('passage-section');
    const questionSection = document.getElementById('question-section');
    const layoutEl = document.getElementById('layout');
    const rc = document.getElementById('reading-container');

    passageSection.style.display = 'none';
    rc.classList.add('summary-mode');

    layoutEl.style.overflowY = 'auto';
    layoutEl.style.minHeight = '0';

    questionSection.style.position = 'relative';
    questionSection.style.top = '0';
    questionSection.style.maxHeight = 'none';
    questionSection.style.overflowY = 'auto';
    questionSection.style.marginTop = '8px';
    questionSection.style.maxWidth = '100%';

    if (viewText) viewText.style.display = 'block';
    if (closeText) closeText.style.display = 'none';

    if (viewText) viewText.onclick = function () {
      rc.classList.remove('summary-mode');
      passageSection.style.display = 'block';
      questionSection.style.display = 'none';
      viewText.style.display = 'none';
      if (closeText) closeText.style.display = 'block';
      if (typeof window.checkSpecialBehavior === 'function') setTimeout(() => window.checkSpecialBehavior(), 0);
    };
    if (closeText) closeText.onclick = function () {
      rc.classList.add('summary-mode');
      passageSection.style.display = 'none';
      questionSection.style.display = 'block';
      layoutEl.style.overflowY = 'auto';
      questionSection.style.position = 'relative';
      questionSection.style.top = '0';
      questionSection.style.maxHeight = 'none';
      questionSection.style.overflowY = 'auto';
      questionSection.style.marginTop = '8px';
      questionSection.style.maxWidth = '100%';
      viewText.style.display = 'block';
      closeText.style.display = 'none';
    };

    const dropZone = document.createElement('div');
    const choiceArea = document.createElement('div');
    choiceArea.className = 'summary-choices';
    dropZone.className = 'summary-drop-zone';
    dropZone.textContent = 'Drop up to 3 statements here';

    const selected = userAnswers[currentQuestionIndex] || [];
    const droppedMap = new Map();

    selected.forEach((i) => {
      const item = document.createElement('div');
      item.className = 'dropped-item';
      item.textContent = question.choices[i].text;
      item.title = 'Double-click to remove';
      item.ondblclick = () => {
        selected.splice(selected.indexOf(i), 1);
        userAnswers[currentQuestionIndex] = selected;
        render();
      };
      droppedMap.set(i, true);
      dropZone.appendChild(item);
    });

    dropZone.ondragover = (e) => e.preventDefault();
    dropZone.ondrop = (e) => {
      const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
      if (!selected.includes(draggedIndex) && selected.length < 3) {
        selected.push(draggedIndex);
        userAnswers[currentQuestionIndex] = selected;
        render();
      }
    };

    question.choices.forEach((choice, i) => {
      if (!droppedMap.has(i)) {
        const div = document.createElement('div');
        div.className = 'choice-draggable';
        div.textContent = choice.text;
        div.draggable = true;
        div.ondragstart = (e) => { e.dataTransfer.setData('text/plain', i); };
        choiceArea.appendChild(div);
      }
    });
    block.appendChild(dropZone);
    block.appendChild(choiceArea);
  }

  if (question.type === 'dual-bucket') {
    const passageSection = document.getElementById('passage-section');
    const questionSection = document.getElementById('question-section');
    const layoutEl = document.getElementById('layout');
    const rc = document.getElementById('reading-container');

    passageSection.style.display = 'none';
    rc.classList.add('summary-mode');

    layoutEl.style.overflowY = 'auto';
    layoutEl.style.minHeight = '0';

    questionSection.style.position = 'relative';
    questionSection.style.top = '0';
    questionSection.style.maxHeight = 'none';
    questionSection.style.overflowY = 'auto';
    questionSection.style.marginTop = '8px';
    questionSection.style.maxWidth = '100%';

    if (viewText) viewText.style.display = 'block';
    if (closeText) closeText.style.display = 'none';

    if (viewText) viewText.onclick = function () {
      rc.classList.remove('summary-mode');
      passageSection.style.display = 'block';
      questionSection.style.display = 'none';
      viewText.style.display = 'none';
      if (closeText) closeText.style.display = 'block';
      if (typeof window.checkSpecialBehavior === 'function') setTimeout(() => window.checkSpecialBehavior(), 0);
    };
    if (closeText) closeText.onclick = function () {
      rc.classList.add('summary-mode');
      passageSection.style.display = 'none';
      questionSection.style.display = 'block';

      layoutEl.style.overflowY = 'auto';
      questionSection.style.position = 'relative';
      questionSection.style.top = '0';
      questionSection.style.maxHeight = 'none';
      questionSection.style.overflowY = 'auto';
      questionSection.style.marginTop = '8px';
      questionSection.style.maxWidth = '100%';

      viewText.style.display = 'block';
      closeText.style.display = 'none';
    };

    const b0 = question.buckets[0];
    const b1 = question.buckets[1];
    const qTitle2 = document.createElement('h3');
    qTitle2.innerHTML = `${localNumber}. ${question.prompt}
    <h4>Drag your answer choices to the spaces where they belong. To remove an answer choice, click on it. To review the passage, click VIEW TEXT.</h4>
      <div style="font-weight:400;margin-top:6px;">
        <em>${b0.title}</em> (Select ${b0.selectCount}) &nbsp;&nbsp;|&nbsp;&nbsp;
        <em>${b1.title}</em> (Select ${b1.selectCount})
      </div><br> `;
    block.appendChild(qTitle2);

    const state = userAnswers[currentQuestionIndex] || { a: [], b: [] };
    const chosen = new Set([...(state.a || []), ...(state.b || [])]);

    const layout = document.createElement('div');
    layout.style.display = 'grid';
    layout.style.gridTemplateColumns = '1fr 1fr 1fr';
    layout.style.gap = '16px';

    // Pool
    const choiceCol = document.createElement('div');
    const choiceHeader = document.createElement('h4');
    choiceHeader.textContent = 'Answer Choices';
    choiceHeader.style.margin = '0 0 8px 0';
    choiceCol.appendChild(choiceHeader);

    const choiceArea = document.createElement('div');
    choiceArea.className = 'dual-choices';
    question.choices.forEach((txt, i) => {
      if (!chosen.has(i)) {
        const d = document.createElement('div');
        d.className = 'choice-draggable';
        d.textContent = txt;
        d.draggable = true;
        d.ondragstart = (e) => e.dataTransfer.setData('text/plain', String(i));
        choiceArea.appendChild(d);
      }
    });
    choiceCol.appendChild(choiceArea);

    function makeBucket(idxKey, bucketDef) {
      const wrap = document.createElement('div');
      const title = document.createElement('h4');
      title.style.margin = '0 0 8px 0';
      title.textContent = `${bucketDef.title} (Select ${bucketDef.selectCount})`;
      wrap.appendChild(title);

      const zone = document.createElement('div');
      zone.className = 'dual-drop-zone';
      zone.textContent = (state[idxKey] && state[idxKey].length) ? '' : 'Drop items here';
      zone.ondragover = (e) => e.preventDefault();
      zone.ondrop = (e) => {
        const idx = parseInt(e.dataTransfer.getData('text/plain'), 10);
        if (Number.isNaN(idx)) return;
        if ((state.a || []).includes(idx) || (state.b || []).includes(idx)) return;
        if ((state[idxKey] || []).length >= (bucketDef.selectCount || 0)) return;

        state[idxKey] = [...(state[idxKey] || []), idx];
        userAnswers[currentQuestionIndex] = state;
        render();
      };

      (state[idxKey] || []).forEach((i) => {
        const item = document.createElement('div');
        item.className = 'dropped-item';
        item.textContent = question.choices[i];
        item.title = 'Double-click to remove';
        item.ondblclick = () => {
          state[idxKey] = (state[idxKey] || []).filter((x) => x !== i);
          userAnswers[currentQuestionIndex] = state;
          render();
        };
        zone.appendChild(item);
      });

      wrap.appendChild(zone);
      return wrap;
    }

    layout.appendChild(choiceCol);
    layout.appendChild(makeBucket('a', b0));
    layout.appendChild(makeBucket('b', b1));

    block.appendChild(layout);
  }

  questionContainer.appendChild(block);

  if (typeof window.checkSpecialBehavior === 'function' && document.getElementById('passage-section').style.display !== 'none') {
    setTimeout(() => window.checkSpecialBehavior(), 0);
  }

  const isPassageStart = PASSAGE_META.starts.includes(currentQuestionIndex);
  if (isPassageStart) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0';
    prevBtn.style.cursor = 'context-menu';
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = '1';
    prevBtn.style.cursor = 'pointer';
  }
}

prevBtn.onclick = () => {
  if (currentQuestionIndex > 0) {
    window.currentQuestionIndex--;
    render();
  }
};

nextBtn.onclick = async () => {
  const lastIndex = PASSAGE_META.total - 1;
  if (currentQuestionIndex < lastIndex) {
    window.currentQuestionIndex++;
    render();
  } else {
    clearInterval(timerInterval);
    await showFinalScore();             // ← let the guard live inside the function
    readingContainer.style.display = 'none';
    timerEl.style.display = 'none';
    if (typeof window.goToNextSection === 'function') {
      window.goToNextSection();
    }
  }
};



async function showFinalScore() {
  if (__finalizingReading) return;   // ✅ single source of truth
  __finalizingReading = true;

  document.getElementById('passage-section').style.display = 'none';
  document.getElementById('question-section').style.display = 'none';
  finalScoreEl.style.display = 'none';
  finalScoreEl.innerHTML = '';

  let score = 0;
  let totalPoints = 0;
  const answers = [];
  const TOTAL = PASSAGE_META.total;

  const stats = {
    mcq: { correctPts: 0, totalPts: 0 },
    ms:  { correctPts: 0, totalPts: 0 },
    ins: { correctPts: 0, totalPts: 0 },
    sum: { correctPts: 0, totalPts: 0 },
    db:  { correctPts: 0, totalPts: 0 },
  };

  for (let i = 0; i < TOTAL; i++) {
    const { question } = getPassageAndQuestion(i);
    const userAnswer = userAnswers[i];
    let correctAnswer = question.correct;

    let earned = 0;
    let maxPts = 1;
    let kind = "mcq";

    if (question.type === 'multiple-choice') {
      kind = "mcq"; maxPts = 1;
      earned = (userAnswer === question.correct) ? 1 : 0;

    } else if (question.type === 'insert-sentence') {
      kind = "ins"; maxPts = 1;
      earned = (userAnswer === question.correct) ? 1 : 0;

    } else if (question.type === 'multiple-answer') {
      kind = "ms"; maxPts = 1;
      const correct = question.correct || [];
      const picked = Array.isArray(userAnswer) ? userAnswer : [];
      const set = new Set(picked);
      const isCorrect = picked.length === correct.length && correct.every(x => set.has(x));
      earned = isCorrect ? 1 : 0;

    } else if (question.type === 'summary') {
      kind = "sum"; maxPts = 2;
      const correct = question.correct || [];
      const picked = Array.isArray(userAnswer) ? userAnswer : [];
      const correctSet = new Set(correct);
      const correctCount = picked.filter(x => correctSet.has(x)).length;
      earned = (picked.length === 3 && correctCount === 3) ? 2 : (correctCount === 2 ? 1 : 0);

    } else if (question.type === 'dual-bucket') {
      kind = "db";
      const state = userAnswer || { a: [], b: [] };
      const [bA, bB] = question.buckets || [{}, {}];

      const correctA = new Set(bA.correct || []);
      const correctB = new Set(bB.correct || []);

      const aPicked = Array.isArray(state.a) ? state.a : [];
      const bPicked = Array.isArray(state.b) ? state.b : [];

      const totalNeeded = (bA.selectCount || 0) + (bB.selectCount || 0);
      const totalPicked = aPicked.length + bPicked.length;

      let wrongPlacements = 0;
      aPicked.forEach(iIdx => { if (!correctA.has(iIdx)) wrongPlacements++; });
      bPicked.forEach(iIdx => { if (!correctB.has(iIdx)) wrongPlacements++; });

      const missing = Math.max(0, totalNeeded - totalPicked);
      const wrongCount = wrongPlacements + missing;

      earned = (wrongCount === 0) ? 3 : (wrongCount === 1) ? 2 : (wrongCount === 2) ? 1 : 0;

      correctAnswer = { a: bA.correct, b: bB.correct };
      maxPts = 3;
    }

    score += earned;
    totalPoints += maxPts;

    if (stats[kind]) {
      stats[kind].correctPts += earned;
      stats[kind].totalPts += maxPts;
    }

    answers.push({ selected: (typeof userAnswer !== 'undefined' ? userAnswer : null), correct: correctAnswer });
  }

  const payloadObj = { score, total: totalPoints, answers };
  const payload = JSON.stringify(payloadObj);

  // ✅ Always write both keys so results page finds the data for any type
  localStorage.setItem(`result_${testType}_${testId}_reading`, payload);
  localStorage.setItem(`result_${testId}_reading`, payload);

  try {
    await sendReadingResultsEmail({
      testType,
      testId,
      score,
      total: totalPoints,
      answers,
      stats,
      finishedAt: new Date().toISOString(),
    });
  } catch (_) {
    /* ignore email errors */
  }
}



function toKebab(prop) { return prop.replace(/[A-Z]/g, m => '-' + m.toLowerCase()); }
function applyStyles(el, styles = {}) {
  for (const [k, v] of Object.entries(styles)) {
    try { el.style.setProperty(toKebab(k), String(v), 'important'); } catch {}
  }
}

window.highlightOnQuestion = function (targetId, questionIndex, styles = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const current = window.currentQuestionIndex;
  const matches = Array.isArray(questionIndex)
    ? questionIndex.includes(current)
    : current === questionIndex;

  if (!matches) return;

  applyStyles(el, styles || {});
  const isArrow = typeof targetId === 'string' && targetId.startsWith('arr');

  if (styles.display === undefined && getComputedStyle(el).display === 'none') {
    el.style.setProperty('display', '', 'important');
  }
  el.style.setProperty('scroll-margin-top', isArrow ? '72px' : '', 'important');

  try { el.scrollIntoView({ behavior: 'smooth', block: isArrow ? 'start' : 'center' }); } catch {}
};

window.checkSpecialBehavior = function () {
  const sb = window.readingData && window.readingData.specialBehavior;
  if (!sb) return;

  if (typeof sb === 'function') {
    try { sb(window.highlightOnQuestion, window.currentQuestionIndex); }
    catch (e) { console.error('specialBehavior function error:', e); }
    return;
  }

  const rules = Array.isArray(sb) ? sb : [];
  const current = window.currentQuestionIndex;

  const expanded = rules.flatMap(rule => {
    if (!rule || !rule.targetId) return [];
    const q = rule.questionIndex;
    const base = { targetId: rule.targetId, styles: rule.styles || {} };
    return Array.isArray(q) ? q.map(n => ({ ...base, questionIndex: n })) : [{ ...base, questionIndex: q }];
  });

  const keysByTarget = new Map();
  expanded.forEach(r => {
    const set = keysByTarget.get(r.targetId) || new Set();
    Object.keys(r.styles || {}).forEach(k => set.add(k));
    set.add('scrollMarginTop');
    keysByTarget.set(r.targetId, set);
  });

  keysByTarget.forEach((keys, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    keys.forEach(k => { el.style.removeProperty(toKebab(k)); });
    el.style.removeProperty('scroll-margin-top');
  });

  let scrolledOnce = false;
  expanded.forEach(r => {
    if (r.questionIndex !== current) return;
    const el = document.getElementById(r.targetId);
    if (!el) return;

    applyStyles(el, r.styles || {});
    const isArrow = typeof r.targetId === 'string' && r.targetId.startsWith('arr');
    el.style.setProperty('scroll-margin-top', isArrow ? '0' : '', 'important');

    if (!scrolledOnce) {
      try { el.scrollIntoView({ behavior: 'smooth', block: isArrow ? 'start' : 'center' }); } catch {}
      scrolledOnce = true;
    }
  });
};

(async function bootstrapReading() {
  try {
    await loadReadingData(testType, testId);
    PASSAGE_META = computePassageMeta();

    userAnswers = new Array(PASSAGE_META.total).fill(null);
    window.currentQuestionIndex = 0;


      if (directionsR) directionsR.style.display = 'block';
  } catch (err) {
    console.error(err);
    alert(
      'Failed to load reading test data.\n' +
      'Open the console to see the exact URLs tried.\n' +
      'Ensure the file exists and sets: window.readingData = {...}\n' +
      'Adjust folder depth if needed.'
    );
  }
})();
