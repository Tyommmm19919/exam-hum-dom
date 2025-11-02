/* ===============================
   TOEFL Reading 2026 — simple linear flow (no MST)
   Types supported:
   - clozeLetters (Type 1)
   - emailSet (Type 2)
   - dailySet (Type 3)
   - academic (Type 4, incl. vocab-in-context)
   =============================== */

const TOTAL_TIME_SEC = 25 * 60;       // 25 minutes (adjust if you want)
const STORAGE_PREFIX = 'result_toefl2026_simple_';

// DOM
const passageTitleEl = document.getElementById('passage-title');
const passageTextEl  = document.getElementById('passage-text');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finalScoreEl = document.getElementById('final-score');
const timerEl = document.getElementById('timer');
const readingContainer = document.getElementById('reading-container');
const mentionSection = document.getElementById('mention-section');
const directionsR = document.getElementById('directionsR');

let DATA = null;                 // window.readingData2026 (linear)
let FLAT = [];                   // flattened items
let timerId = null;
let totalTime = TOTAL_TIME_SEC;
let current = 0;
let userAnswers = [];            // parallel to FLAT
// Prevent double-fires (Chrome throttling)
let __READING2026_DONE__ = false;
let __NAV_LOCK__ = false;
function goto(url) {
  if (__NAV_LOCK__) return;
  __NAV_LOCK__ = true;
  window.location.assign(url);
}

// ---- 2026-only router (robust) ----
(function () {
  if (!sessionStorage.getItem('CURRENT_SECTION_INDEX')) {
    sessionStorage.setItem('CURRENT_SECTION_INDEX', '0');
  }

  window.goToNextSection = function () {
    try {
      const type   = (sessionStorage.getItem('TEST_TYPE') || 'toefl2026').toLowerCase();
      const testId = sessionStorage.getItem('TEST_ID')
                   || new URLSearchParams(location.search).get('test')
                   || '';

      let selected = [];
      try { selected = JSON.parse(sessionStorage.getItem('SELECTED_SECTIONS') || '[]') || []; } catch {}
      if (!Array.isArray(selected)) selected = [];

      let idx = parseInt(sessionStorage.getItem('CURRENT_SECTION_INDEX') || '0', 10);
      if (!Number.isFinite(idx)) idx = 0;

      if (selected.length === 0) {
        return goto(`results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`);
      }

      idx++;
      if (idx < selected.length) {
        sessionStorage.setItem('CURRENT_SECTION_INDEX', String(idx));
        const next = String(selected[idx] || '').toLowerCase();

        const map = {
          reading:   `reading2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          listening: `listening2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          speaking:  `speaking2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`,
          writing:   `writing2026.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`
        };

        return goto(map[next] || `results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`);
      } else {
        return goto(`results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`);
      }
    } catch {
      const type   = (sessionStorage.getItem('TEST_TYPE') || 'toefl2026').toLowerCase();
      const testId = sessionStorage.getItem('TEST_ID') || '';
      return goto(`results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId)}`);
    }
  };
})();




// Utilities
function setPassageHidden(hidden) {
  const passageSection = document.getElementById('passage-section');
  const rc = document.getElementById('reading-container');
  const questionSection = document.getElementById('question-section');
  if (hidden) {
    passageSection.style.display = 'none';
    rc.classList.add('summary-mode'); // reuse your responsive rule
    questionSection.style.display = 'block';
  } else {
    passageSection.style.display = 'block';
    rc.classList.remove('summary-mode');
    questionSection.style.display = 'block';
  }
}

function startTimer() {
  timerEl.style.display = 'block';
  function tick() {
    if (totalTime <= 0) {
      clearInterval(timerId);
      finishSection();
      return;
    }
    const m = Math.floor(totalTime / 60);
    const s = totalTime % 60;
    timerEl.textContent = `Time Left: ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    totalTime--;
  }
  tick();
  timerId = setInterval(tick, 1000);
}

function html(node, str) { node.innerHTML = str; }

// Loading
(async function bootstrap() {
  const params = new URLSearchParams(location.search);
  const testId = String(params.get('test') || window.TEST_ID || sessionStorage.getItem('TEST_ID') || '1');
  sessionStorage.setItem('TEST_ID', testId);
  sessionStorage.setItem('TEST_TYPE', 'toefl2026'); // ensure results page knows our type
  window.TEST_ID = testId;

  if (mentionSection) mentionSection.textContent = `TOEFL — Test ${testId} — Reading (2026)`;

  // Directions view visible initially
  directionsR.style.display = 'block';
  readingContainer.style.display = 'none';
  timerEl.style.display = 'none';

  // Load data: ../data2026/<id>/readingData2026_Test<id>.js
  const url = new URL(`../data2026/${testId}/readingData2026_Test${testId}.js`, document.baseURI);
  url.searchParams.set('_', Date.now().toString());

  await new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = url.toString();
    s.onload = res;
    s.onerror = () => rej(new Error('Failed to load data.'));
    document.body.appendChild(s);
  });

  if (!window.readingData2026) {
    alert('readingData2026 not found. Your data file must set window.readingData2026 = {...}');
    return;
  }
  DATA = window.readingData2026;

  // Flatten into a simple linear sequence
  FLAT = buildFlat(DATA);
  userAnswers = new Array(FLAT.length).fill(null);

  // Hook Start
  document.getElementById('endDirect').onclick = startReading;
})().catch(err => {
  console.error(err);
  alert('Initialization failed.');
});

// Build flat list
function buildFlat(data) {
  const out = [];

  // Normalize each family to an array
  const clozeArr = Array.isArray(data.clozeLetters)
    ? data.clozeLetters
    : (data.clozeList || (data.clozeLetters ? [data.clozeLetters] : []));

  const emailArr = Array.isArray(data.emailSet)
    ? data.emailSet
    : (data.emails || (data.emailSet ? [data.emailSet] : []));

  const dailyArr = Array.isArray(data.dailySet)
    ? data.dailySet
    : (data.dailies || (data.dailySet ? [data.dailySet] : []));

  const acadArr = Array.isArray(data.academic)
    ? data.academic
    : (data.academics || (data.academic ? [data.academic] : []));

  // How many cycles? (max length of the 4 arrays)
  const cycles = Math.max(clozeArr.length, emailArr.length, dailyArr.length, acadArr.length);

  for (let i = 0; i < cycles; i++) {
    // 1) Cloze (single page with many gaps)
    if (clozeArr[i]) {
      const cl = clozeArr[i];
      out.push({
        kind: 'clozeLetters',
        prompt: cl.prompt || 'Type the missing letters.',
        textHtml: cl.textHtml || '',
        answersByGap: cl.answersByGap || {}
      });
    }

    // 2) Email set (each item is its own MCQ)
    if (emailArr[i]) {
      const blk = emailArr[i];
      for (const it of (blk.items || [])) {
        out.push({
          kind: 'emailMCQ',
          stimulusTitle: blk.title || 'Email',
          stimulusMeta: blk.meta || '',
          stimulusHtml: blk.stimulusHtml || '',
          stemHtml: it.stemHtml,
          options: it.options,
          answerIndex: it.answerIndex
        });
      }
    }

    // 3) Daily set (each item is its own MCQ)
    if (dailyArr[i]) {
      const blk = dailyArr[i];
      for (const it of (blk.items || [])) {
        out.push({
          kind: 'dailyMCQ',
          stimulusTitle: blk.title || 'Notice',
          stimulusMeta: blk.meta || '',
          stimulusHtml: blk.stimulusHtml || '',
          stemHtml: it.stemHtml,
          options: it.options,
          answerIndex: it.answerIndex
        });
      }
    }

    // 4) Academic passage (mcq + vocab)
    if (acadArr[i]) {
      const blk = acadArr[i];
      for (const it of (blk.items || [])) {
        if (it.type === 'vocab') {
          out.push({
            kind: 'acadVocab',
            passageTitle: blk.title || 'Reading Passage',
            passageHtml: blk.passageHtml || '',
            token: it.token,
            stemHtml: it.stemHtml,
            options: it.options,
            answerIndex: it.answerIndex
          });
        } else {
          out.push({
            kind: 'acadMCQ',
            passageTitle: blk.title || 'Reading Passage',
            passageHtml: blk.passageHtml || '',
            stemHtml: it.stemHtml,
            options: it.options,
            answerIndex: it.answerIndex
          });
        }
      }
    }
  }

  return out;
}

// Start
function startReading() {
  directionsR.style.display = 'none';
  readingContainer.style.display = 'flex';
  timerEl.style.display = 'block';
  totalTime = Number.isFinite(DATA?.timeSec) ? DATA.timeSec : TOTAL_TIME_SEC;
  startTimer();
  current = 0;
  render();
}

// Render
function render() {
  if (!FLAT[current]) {
    finishSection(); return;
  }

  // reset shared UI areas
  questionContainer.innerHTML = '';
  passageTextEl.innerHTML = '';
  passageTitleEl.textContent = '';

  const item = FLAT[current];

  if (item.kind === 'clozeLetters') {
    // Single page with all gaps editable
    setPassageHidden(true);
    passageTitleEl.textContent = '';

    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `<h3>${item.prompt}</h3><div id="clozeHost"></div>`;

    const host = block.querySelector('#clozeHost');
    const tmp = document.createElement('div');
    tmp.innerHTML = item.textHtml || '';

    // keep a single object for all gap values
    const currentState = (userAnswers[current] && userAnswers[current].byGap)
      ? userAnswers[current]
      : { byGap: {} };

    const gaps = Array.from(tmp.querySelectorAll('[data-gap]'));
    gaps.forEach(g => {
      const gid = String(g.getAttribute('data-gap'));
      const need = String((item.answersByGap || {})[gid] || '');
      const len = Math.max(1, need.length);

      const inp = document.createElement('input');
      inp.type = 'text';
      inp.maxLength = len;
      inp.size = Math.max(2, len);
      inp.className = 'gap-input';
      inp.autocomplete = 'off';
      inp.spellcheck = false;
      inp.inputMode = 'latin';
      inp.value = currentState.byGap[gid] || '';

      inp.oninput = () => {
        const st = userAnswers[current] || { byGap: {} };
        st.byGap[gid] = inp.value;
        userAnswers[current] = st;

        // (optional) live correctness hint when length matches expected
        if (inp.value.length === need.length) {
          const ok = inp.value.trim().toLowerCase() === need.toLowerCase();
          inp.classList.toggle('correct', ok);
          inp.classList.toggle('incorrect', !ok);
        } else {
          inp.classList.remove('correct', 'incorrect');
        }
      };

      g.replaceWith(inp);
    });

    host.appendChild(tmp);
    questionContainer.appendChild(block);

  } else if (item.kind === 'emailMCQ' || item.kind === 'dailyMCQ') {
    // Type 2/3: show stimulus on the left; MCQ on right
    setPassageHidden(false);
    passageTitleEl.textContent = item.stimulusTitle || (item.kind === 'emailMCQ' ? 'Email' : 'Notice');
    passageTextEl.innerHTML = (item.stimulusMeta ? `<p class="stimulus-meta">${item.stimulusMeta}</p>` : '') + (item.stimulusHtml || '');

    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `<h3>${item.stemHtml}</h3><ul class="options"></ul>`;

    const ul = block.querySelector('.options');
    (item.options || []).forEach((opt, i) => {
      const li = document.createElement('li');
      li.innerHTML = opt;
      if (userAnswers[current] === i) li.classList.add('selected');
      li.onclick = () => { userAnswers[current] = i; render(); };
      ul.appendChild(li);
    });

    questionContainer.appendChild(block);

  } else if (item.kind === 'acadMCQ') {
    // Regular academic question with shared passage
    setPassageHidden(false);
    passageTitleEl.textContent = item.passageTitle || 'Reading Passage';
    passageTextEl.innerHTML = item.passageHtml || '';

    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `<h3>${item.stemHtml}</h3><ul class="options"></ul>`;

    const ul = block.querySelector('.options');
    (item.options || []).forEach((opt, i) => {
      const li = document.createElement('li');
      li.innerHTML = opt;
      if (userAnswers[current] === i) li.classList.add('selected');
      li.onclick = () => { userAnswers[current] = i; render(); };
      ul.appendChild(li);
    });

    questionContainer.appendChild(block);

  } else if (item.kind === 'acadVocab') {
    // Same as academic MCQ, but highlight the target token in the passage
    setPassageHidden(false);
    passageTitleEl.textContent = item.passageTitle || 'Reading Passage';
    passageTextEl.innerHTML = item.passageHtml || '';

    // highlight the target token: look for [data-token="..."]
    if (item.token) {
      const target = passageTextEl.querySelector(`[data-token="${item.token}"]`);
      if (target) target.classList.add('vocab-highlight');
    }

    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `<h3>${item.stemHtml}</h3><ul class="options"></ul>`;

    const ul = block.querySelector('.options');
    (item.options || []).forEach((opt, i) => {
      const li = document.createElement('li');
      li.innerHTML = opt;
      if (userAnswers[current] === i) li.classList.add('selected');
      li.onclick = () => { userAnswers[current] = i; render(); };
      ul.appendChild(li);
    });

    questionContainer.appendChild(block);
  }

  // nav state
  prevBtn.disabled = current === 0;
  prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
  nextBtn.textContent = (current === FLAT.length - 1) ? 'Finish' : 'Next';
}

// Navigation
prevBtn.onclick = () => {
  if (current > 0) { current--; render(); }
};
nextBtn.onclick = () => {
  if (current < FLAT.length - 1) { current++; render(); }
  else { finishSection(); }
};

// Finish & score — saves detailed rows and redirects to results.html
function finishSection() {
  if (__READING2026_DONE__) return;           // 👈 prevent double-run
  __READING2026_DONE__ = true;

  clearInterval(timerId);
  // stop user from clicking Finish twice
  try { nextBtn.disabled = true; prevBtn.disabled = true; } catch {}
  readingContainer.style.display = 'none';
  timerEl.style.display = 'none';

  clearInterval(timerId);
  readingContainer.style.display = 'none';
  timerEl.style.display = 'none';

  let pts = 0, max = 0;
  const answersRows = [];

  for (let i = 0; i < FLAT.length; i++) {
    const it = FLAT[i];
    const ans = userAnswers[i];

    if (it.kind === 'clozeLetters') {
      const byGap = (ans && ans.byGap) || {};
      const keys = Object.keys(it.answersByGap || {}).sort((a,b)=>Number(a)-Number(b));
      max += keys.length; // each gap is one question
      for (const k of keys) {
        const typed = String(byGap[k] || '').trim();
        const need  = String(it.answersByGap[k] || '').trim();
        const ok = typed.toLowerCase() === need.toLowerCase();
        if (ok) pts += 1;
        answersRows.push({ selected: typed || null, correct: need });
      }

    } else if (
      it.kind === 'emailMCQ' ||
      it.kind === 'dailyMCQ' ||
      it.kind === 'acadMCQ'  ||
      it.kind === 'acadVocab'
    ) {
      max += 1;
      const isCorrect = (typeof ans === 'number' && ans === it.answerIndex);
      if (isCorrect) pts += 1;
      answersRows.push({
        selected: (typeof ans === 'number' ? ans : null),
        correct:  it.answerIndex
      });
    }
  }

  // Shape that results.html expects: {score,total,answers}
  const payload = JSON.stringify({ score: pts, total: max, answers: answersRows });

  const testId = sessionStorage.getItem('TEST_ID') || '1';
  // Save under the namespaced key the results page already knows how to read:
  // result_<type>_<test>_reading
  localStorage.setItem(`result_toefl2026_${testId}_reading`, payload);

  // Optional on-page summary (brief flash)
  finalScoreEl.style.display = 'block';
  finalScoreEl.innerHTML = `
    <h2>Reading — Result</h2>
    <p><strong>Raw:</strong> ${pts} / ${max}</p>
    <p><strong>Percent:</strong> ${max ? Math.round((pts/max)*100) : 0}%</p>
  `;

// Chain to next selected section if any; else results
const type = (sessionStorage.getItem('TEST_TYPE') || 'toefl2026').toLowerCase();
setTimeout(() => {
  try {
    if (typeof window.goToNextSection === 'function') {
      window.goToNextSection();
    } else {
      const testId2 = sessionStorage.getItem('TEST_ID') || '1';
      goto(`results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId2)}`);
    }
  } catch {
    const testId2 = sessionStorage.getItem('TEST_ID') || '1';
    goto(`results.html?type=${encodeURIComponent(type)}&test=${encodeURIComponent(testId2)}`);
  }
}, 0);



}
