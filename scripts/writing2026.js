// Supports three task types in one page:
// "integrated" | "independent" | "reorder"
let wrIndex = 0;
let wrTasks = [];
let wrResponses = [];  // we’ll keep type info inside each entry
let wrTaskTimer = null;

const startBtn    = document.getElementById("startWritingBtn");
const dirScreen   = document.getElementById("writingDirections");
const section     = document.getElementById("writing-section");
const sectionName = document.getElementById("sectionName");
const timerEl     = document.getElementById("writing-timer");
const directions  = document.getElementById("writing-directions");

const readingBox  = document.getElementById("reading-passage");
const typingWrap  = document.getElementById("typing");
const textArea    = document.getElementById("writing-area");
const wordCount   = document.getElementById("word-count");
const essayFinishBtn = document.getElementById("finish-writing-btn");

const reorderWrap   = document.getElementById("reorder");
const reorderSent   = document.getElementById("reorder-sentence");
const reorderBank   = document.getElementById("reorder-bank");
const reorderReset  = document.getElementById("reorder-reset-btn");
const reorderClear  = document.getElementById("reorder-clear-btn");
const reorderFinish = document.getElementById("finish-writing-btn-reorder");

const audioEl  = document.getElementById("writing-audio");
const progWrap = document.getElementById("writing-progress-container");
const progBar  = document.getElementById("writing-progress-bar");

// (We still render #final-results / #download-btn in DOM, but we auto-redirect after finish)
const resultsEl = document.getElementById("final-results");
const zipBtn    = document.getElementById("download-btn");
const writingLayout = document.getElementById("writing-layout");

// ----------------- helpers -----------------
function setVisible(el, show) {
  if (!el) return;
  el.classList[show ? "remove" : "add"]("hidden");
  // Force a visible value to beat CSS rules like #writing-section{display:none}
  el.style.display = show ? "block" : "none";
}
function pad2(n){ return n < 10 ? "0" + n : "" + n; }
function updateWordCount() {
  const words = (textArea?.value || "").trim().split(/\s+/).filter(Boolean);
  if (wordCount) wordCount.textContent = `Words: ${words.length}`;
}
textArea?.addEventListener("input", updateWordCount);

function startTimer(totalSeconds, onExpire) {
  clearInterval(wrTaskTimer);
  let remaining = typeof totalSeconds === "number" ? totalSeconds : 600;
  if (timerEl) timerEl.textContent = `Time: ${Math.floor(remaining/60)}:${pad2(remaining%60)}`;
  wrTaskTimer = setInterval(() => {
    remaining--;
    if (timerEl) timerEl.textContent = `Time: ${Math.floor(remaining/60)}:${pad2(remaining%60)}`;
    if (remaining <= 0) {
      clearInterval(wrTaskTimer);
      onExpire && onExpire();
    }
  }, 1000);
}
function ensureReorderContextEl() {
  let el = document.getElementById("reorder-context");
  if (!el) {
    el = document.createElement("div");
    el.id = "reorder-context";
    el.className = "reorder-context";
    // Insert it at the top of the reorder area
    const wrap = document.querySelector("#reorder .reorder-wrap") || document.getElementById("reorder");
    wrap?.insertBefore(el, wrap.firstChild);
  }
  return el;
}

function getRepoBasePath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const repo = parts[0] || '';
  return repo ? `/${repo}/` : '/';
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

function moveProgressToTop(){
  const header = section ? section.querySelector(".topSpWr") : null;
  if (!section || !header || !progWrap) return;
  if (header.nextSibling !== progWrap) section.insertBefore(progWrap, header.nextSibling);
  progWrap.style.position = "sticky";
  progWrap.style.top = "62px";
  progWrap.style.zIndex = "9";
}
function playAudio(src, onEnded) {
  moveProgressToTop();
  if (!src) { onEnded && onEnded(); return; }
  const fixed = addMp3IfMissing(src);
  if (audioEl) audioEl.src = fixed;

  setVisible(audioEl, true);
  setVisible(progWrap, true);
  if (progBar) progBar.style.width = "0%";

  const tryPlay = () => {
    audioEl.play().catch(() => {
      const resume = () => {
        document.removeEventListener("click", resume);
        audioEl.play().catch(() => {
          setVisible(audioEl, false);
          setVisible(progWrap, false);
          onEnded && onEnded();
        });
      };
      document.addEventListener("click", resume, { once: true });
    });
  };
  tryPlay();

  const interval = setInterval(() => {
    if (audioEl.duration) {
      if (progBar) progBar.style.width = `${(audioEl.currentTime / audioEl.duration) * 100}%`;
    }
    if (audioEl.ended) {
      clearInterval(interval);
      setVisible(audioEl, false);
      setVisible(progWrap, false);
      onEnded && onEnded();
    }
  }, 200);
}

// ----------------- drag–drop (reorder) + correctness -----------------
function makeWordEl(text, id) {
  const el = document.createElement("span");
  el.className = "word";        // pill in bank
  el.draggable = true;
  el.textContent = text;
  el.dataset.word = text;
  if (id != null) el.id = `w2026_${id}`;
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ type: "word", text, id: el.id || "" }));
  });
  return el;
}
function makeSlotEl(idx) {
  const el = document.createElement("span");
  el.className = "slot";
  el.dataset.slotIndex = String(idx);
  el.textContent = "____";

  el.addEventListener("dragover", (e) => e.preventDefault());

  el.addEventListener("drop", (e) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("text/plain");
    if (!raw) return;

    let parsed;
    try { parsed = JSON.parse(raw); } catch { return; }
    if (!parsed || parsed.type !== "word") return;

    // If slot already filled, send previous word back to bank
    if (el.firstElementChild) {
      const prev = el.firstElementChild;
      prev.classList.remove("in-slot");
      reorderBank.appendChild(prev);
    }

    // Reuse dragged node if it exists; otherwise create a fresh one
    let node = parsed.id ? document.getElementById(parsed.id) : null;
    if (!node) {
      node = makeWordEl(parsed.text, Date.now());
    }

    // Make it look like inline text inside the sentence
    node.classList.add("in-slot");

    // Place into this slot
    el.textContent = "";
    el.appendChild(node);
    el.classList.add("filled");
  });

  return el;
}

function enableBankDrop() {
  reorderBank.addEventListener("dragover", (e) => e.preventDefault());
  reorderBank.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (!data) return;
    const parsed = JSON.parse(data);
    if (parsed.type !== "word") return;

    const wordEl = document.getElementById(parsed.id);
    if (wordEl) {
      const parent = wordEl.parentElement;
      if (parent && parent.classList.contains("slot")) {
        parent.textContent = "____";
        parent.classList.remove("filled");
      }
      wordEl.classList.remove("in-slot");
      reorderBank.appendChild(wordEl);
    } else {
      reorderBank.appendChild(makeWordEl(parsed.text, Date.now()));
    }
  });
}
function parseTemplate(template) {
  const parts = [];
  const token = "__";
  let s = String(template || "");
  let i, counter = 0;
  while ((i = s.indexOf(token)) !== -1) {
    const before = s.slice(0, i);
    if (before) parts.push({ type: "text", value: before });
    parts.push({ type: "slot", index: counter++ });
    s = s.slice(i + token.length);
  }
  if (s) parts.push({ type: "text", value: s });
  return parts;
}
function assembleReorderSentence() {
  const nodes = Array.from(reorderSent.childNodes);
  let out = "";
  nodes.forEach(n => {
    if (n.nodeType === Node.TEXT_NODE) out += n.textContent;
    else if (n.nodeType === Node.ELEMENT_NODE) {
      if (n.classList.contains("slot")) {
        const child = n.firstElementChild;
        const word = child ? (child.dataset.word || child.textContent || "").trim() : "____";
        out += word;
      } else {
        out += n.textContent;
      }
    }
  });
  return out.replace(/\s+/g, " ").trim();
}

// --- NEW: multi-word aware expected-slot derivation ---
// Priority:
// 1) task.correctTokens (exact array, length === #slots)
// 2) smartLongestMatch using provided `words` list against `correctSentence`
// 3) fallback to old alignment (works when template has solid anchors)
function deriveExpectedSlotValues(template, correctSentence, wordsOpt, correctTokensOpt) {
  const parts = parseTemplate(template);
  const slotCount = parts.filter(p => p.type === "slot").length;
  const cs = String(correctSentence || "");
  if (!slotCount || !cs) return [];

  // 1) explicit tokens override
  if (Array.isArray(correctTokensOpt) && correctTokensOpt.length === slotCount) {
    return correctTokensOpt.slice();
  }

  // helper: get next "anchor" text (non-whitespace) after a given index in parts
  function nextAnchor(startIdx) {
    for (let i = startIdx + 1; i < parts.length; i++) {
      if (parts[i].type === "text" && /\S/.test(parts[i].value || "")) {
        return parts[i].value;
      }
    }
    return "";
  }

  const norm = s => String(s || "").replace(/\s+/g, " ").trim().toLowerCase();
  const csLower = norm(cs);

  // 2) smart longest-match using words (multi-word tokens supported)
  const words = Array.isArray(wordsOpt) ? wordsOpt.slice().sort((a,b)=>b.length-a.length) : [];
  if (words.length) {
    const expected = [];
    let pos = 0;

    let seenSlots = 0;
    for (let idx = 0; idx < parts.length; idx++) {
      const part = parts[idx];
      if (part.type === "text") {
        const t = part.value || "";
        if (!t) continue;
        const tLower = norm(t);
        if (!tLower) continue;
        const found = csLower.indexOf(tLower, pos);
        if (found === -1) {
          // If anchors don't align, bail to legacy later
          break;
        }
        pos = found + tLower.length;
      } else {
        // this is a slot
        const slotIdx = seenSlots++;
        const anchor = nextAnchor(idx) || "";
        const aLower = norm(anchor);
        let anchorPos = -1;
        if (aLower) anchorPos = csLower.indexOf(aLower, pos);

        let match = "";
        let matchedLen = 0;

        // try direct match at pos, longest-first
        for (const w of words) {
          const wLower = norm(w);
          if (!wLower) continue;
          if (csLower.startsWith(wLower, pos)) {
            const endPos = pos + wLower.length;
            if (anchorPos !== -1 && endPos > anchorPos) continue; // don't spill past anchor
            if (wLower.length > matchedLen) {
              match = w;
              matchedLen = wLower.length;
            }
          }
        }

        // forgiving skip of one space
        if (!match) {
          if (csLower[pos] === " ") pos++;
          for (const w of words) {
            const wLower = norm(w);
            if (!wLower) continue;
            if (csLower.startsWith(wLower, pos)) {
              const endPos = pos + wLower.length;
              if (anchorPos !== -1 && endPos > anchorPos) continue;
              if (wLower.length > matchedLen) {
                match = w;
                matchedLen = wLower.length;
              }
            }
          }
        }

        // fallback: slice to anchor or next space
        if (!match) {
          let end = anchorPos !== -1 ? anchorPos : csLower.length;
          const nextSpace = csLower.indexOf(" ", pos);
          if (nextSpace !== -1 && nextSpace < end) end = nextSpace;
          match = cs.slice(pos, end).trim();
          matchedLen = norm(match).length;
        }

        expected.push(match);
        pos += matchedLen;
        if (csLower[pos] === " ") pos++;
      }
    }

    if (expected.length === slotCount) {
      return expected.map(x => String(x || "").trim());
    }
    // else fall through to legacy
  }

  // 3) legacy: align by slicing between static text anchors
  const legacy = [];
  let pos = 0;
  for (let idx = 0; idx < parts.length; idx++) {
    const part = parts[idx];
    if (part.type === "text") {
      const t = part.value || "";
      if (!t) continue;
      const found = cs.indexOf(t, pos);
      if (found === -1) return [];
      pos = found + t.length;
    } else {
      const anchor = nextAnchor(idx) || "";
      let endIdx = anchor ? cs.indexOf(anchor, pos) : cs.length;
      if (endIdx === -1) endIdx = cs.length;
      legacy.push(cs.slice(pos, endIdx).trim());
      pos = endIdx;
    }
  }
  return legacy;
}

function normToken(s) {
  return String(s || "")
    .replace(/[.,!?;:()"'`]/g, "") // strip basic punctuation for robustness
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// ----------------- flow -----------------
function runTask() {
  clearInterval(wrTaskTimer);
  if (wrIndex >= wrTasks.length) { return finalizeAndExit(); }

  const task = wrTasks[wrIndex];
  const testId = sessionStorage.getItem("TEST_ID") || "1";
  if (sectionName) sectionName.textContent = `Writing 2026 — Test ${testId} — Item ${wrIndex + 1}/${wrTasks.length}`;

  if (directions) directions.innerHTML = task.directions || "";
  setVisible(directions, true); // ensure visible; CSS default hides it

  // reset UI
  if (readingBox) readingBox.innerHTML = "";
  if (textArea) textArea.value = "";
  updateWordCount();
  setVisible(typingWrap, false);
  setVisible(reorderWrap, false);
  setVisible(audioEl, false);
  setVisible(progWrap, false);
  setVisible(section, true); // ensure section shows despite CSS default

  if (task.type === "integrated") {
    if (writingLayout) writingLayout.style.gridTemplateColumns = "1.05fr .95fr";
    if (readingBox) readingBox.style.display = 'block'
    // reading first
    if (readingBox) readingBox.innerHTML = task.readingPassage || "";
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.onclick = () => {
      // audio -> writing
      playAudio(task.audioSrc, () => {
        if (readingBox) readingBox.innerHTML = task.readingPassage || "";
        setVisible(typingWrap, true);
        textArea?.focus();
        updateWordCount();
        if (essayFinishBtn) essayFinishBtn.textContent = "Finish";
        if (essayFinishBtn) essayFinishBtn.onclick = () => {
          clearInterval(wrTaskTimer);
          wrResponses.push({ type: "integrated", label: `Integrated Essay ${wrIndex + 1}`, content: textArea?.value || "" });
          wrIndex++;
          runTask();
        };
        startTimer(task.timeLimit || 20 * 60, () => essayFinishBtn?.click());
      });
    };
    readingBox?.appendChild(nextBtn);

  } else if (task.type === "independent") {
    if (writingLayout) writingLayout.style.gridTemplateColumns = "1.05fr .95fr";
    if (readingBox) readingBox.style.display = 'block'
    if (readingBox) readingBox.innerHTML = `<h2>Prompt</h2>${task.question || ""}`;
    setVisible(typingWrap, true);
    textArea?.focus();
    updateWordCount();
    if (essayFinishBtn) essayFinishBtn.textContent = "Finish";
    if (essayFinishBtn) essayFinishBtn.onclick = () => {
      clearInterval(wrTaskTimer);
      wrResponses.push({ type: "independent", label: `Independent Essay ${wrIndex + 1}`, content: textArea?.value || "" });
      wrIndex++;
      runTask();
    };
    startTimer(task.timeLimit || 10 * 60, () => essayFinishBtn?.click());

  } else if (task.type === "reorder") {
    if (writingLayout) writingLayout.style.gridTemplateColumns = "1fr";

    if (readingBox) readingBox.style.display = 'none'
    setVisible(reorderWrap, true);
    if (readingBox) readingBox.innerHTML = "";
    buildReorderUI(task);
    // template
    if (reorderFinish) reorderFinish.onclick = () => {
      clearInterval(wrTaskTimer);
      const assembled = assembleReorderSentence();
      const wordsUsed = Array.from(reorderSent.querySelectorAll(".slot")).map(slot =>
        slot.firstElementChild ? (slot.firstElementChild.dataset.word || slot.firstElementChild.textContent || "").trim() : ""
      );

      // correctness (supports multi-word via deriveExpectedSlotValues)
      let perSlot = [];
      let score = null;
      const correctSentence = task.correctSentence;
      if (correctSentence) {
        const expectedSlots = deriveExpectedSlotValues(
          task.template,
          correctSentence,
          task.words,
          task.correctTokens
        );
        if (expectedSlots.length && expectedSlots.length === wordsUsed.length) {
          perSlot = expectedSlots.map((exp, i) => {
            const actual = wordsUsed[i] || "";
            const ok = normToken(exp) === normToken(actual);
            return { expected: exp, actual, correct: ok };
          });
          score = perSlot.reduce((a, b) => a + (b.correct ? 1 : 0), 0) + "/" + perSlot.length;
        }
      }

      wrResponses.push({
        type: "reorder",
        label: `Sentence ${wrIndex + 1}`,
        template: String(task.template || ""),
        wordsUsed,
        finalText: assembled,
        correctSentence: correctSentence || null,
        perSlot,
        score
      });

      wrIndex++;
      runTask();
    };
    startTimer(task.timeLimit || 600, () => reorderFinish?.click());

  } else {
    console.warn("Unknown task type:", task.type);
    wrIndex++;
    runTask();
  }
}

/**
 * Finalize like your original writing:
 * - Save:  result_${TEST_ID}_writing = "completed"
 * - Save:  writtenEssays_${TEST_ID} = JSON.stringify([...])
 * - Also save detailed reorder breakdown for results page:
 *       writing2026_detail_${TEST_ID} = { items: [...] }
 * - And the type-namespaced version your Results page prefers:
 *       writing2026_detail_${TEST_TYPE}_${TEST_ID}
 * - Then auto-navigate to results.
 */
function finalizeAndExit() {
  const testId = sessionStorage.getItem("TEST_ID") || "1";
  const testType = (sessionStorage.getItem("TEST_TYPE") || "toefl2026").toLowerCase();

  // Legacy array: essays as raw text; reorder as a single line "Sentence: <text> (score X/Y if available)"
  const normalized = wrResponses.map(r => {
    if (r.type === "integrated" || r.type === "independent") {
      return r.content || "";
    } else if (r.type === "reorder") {
      const scoreStr = r.score ? ` (score ${r.score})` : "";
      return `Sentence: ${r.finalText}${scoreStr}`;
    }
    return "";
  });

  // ✅ Match your original key names
  localStorage.setItem(`result_${testId}_writing`, "completed");
  localStorage.setItem(`writtenEssays_${testId}`, JSON.stringify(normalized));

  // 📦 Save detailed breakdown for the results rendering
  const detail = wrResponses
    .filter(r => r.type === "reorder")
    .map((r, idx) => ({
      index: idx + 1,                // sentence number
      template: r.template,
      finalText: r.finalText,
      correctSentence: r.correctSentence,
      perSlot: r.perSlot,           // [{expected, actual, correct}]
      score: r.score || null
    }));

  // Back-compat key (old)
  localStorage.setItem(`writing2026_detail_${testId}`, JSON.stringify({ items: detail }));
  // Namespaced key (preferred by Results page)
  localStorage.setItem(`writing2026_detail_${testType}_${testId}`, JSON.stringify({ items: detail }));

  // Keep your 2026 result flag used elsewhere
  localStorage.setItem(`result_toefl2026_${testId}_writing`, "completed");

  // 🚀 Navigate to results page or chain
  if (typeof window.goToNextSection === "function") {
    window.goToNextSection();
  } else {
    window.location.href = `results.html?test=${encodeURIComponent(testId)}`;
  }
}

// ----------------- UI builders for reorder -----------------
function buildReorderUI(task) {
  // Context (lead-in) — supports task.context, task.leadIn, task.initial
  const contextHTML = task.context || task.leadIn || task.initial || "";
  const ctxEl = ensureReorderContextEl();
  if (contextHTML) {
    ctxEl.innerHTML = `<p style="margin:0;line-height:1.6;">${contextHTML}</p>`;
    ctxEl.style.display = "block";
  } else {
    ctxEl.innerHTML = "";
    ctxEl.style.display = "none";
  }

  // Build sentence with blanks
  reorderSent.innerHTML = "";
  reorderBank.innerHTML = "";

  const parts = parseTemplate(task.template);
  parts.forEach(p => {
    if (p.type === "text") {
      const span = document.createElement("span");
      span.textContent = p.value;
      reorderSent.appendChild(span);
    } else {
      reorderSent.appendChild(makeSlotEl(p.index));
    }
  });

  (Array.isArray(task.words) ? task.words.slice() : []).forEach((w, i) => {
    reorderBank.appendChild(makeWordEl(w, i));
  });

  enableBankDrop();

  if (reorderReset) reorderReset.onclick = () => buildReorderUI(task);
  if (reorderClear) reorderClear.onclick = () => {
    reorderSent.querySelectorAll(".slot").forEach(slot => {
      const child = slot.firstElementChild;
      if (child) {
        child.classList.remove("in-slot");
        reorderBank.appendChild(child);
      }
      slot.textContent = "____";
      slot.classList.remove("filled");
    });
  };
}


// ----------------- boot -----------------
document.addEventListener("DOMContentLoaded", () => {
  if (startBtn) startBtn.onclick = () => {
    if (!Array.isArray(window.writing2026Tasks)) {
      alert("No tasks found for Writing 2026.");
      return;
    }
    wrTasks = window.writing2026Tasks.slice();
    setVisible(dirScreen, false);
    setVisible(section, true);
    runTask();
  };

  // We keep download button logic out since we auto-redirect now.
});
