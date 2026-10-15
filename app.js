/**
 * NPTEL Practice App Logic
 * Pure Vanilla JavaScript - No dependencies required
 */

// Application State
const state = {
  questions: [...questionsData],
  currentIndex: 0,
  userAnswers: {}, // map of { questionIndex: { selectedIndex, isCorrect } }
  soundEnabled: true,
  timerSeconds: 0,
  timerInterval: null,
  reviewFilter: 'all'
};

// Web Audio API Sound Synthesizer (Zero external audio files needed)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5

      osc2.frequency.setValueAtTime(523.25, now);
      osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch (e) {
      console.warn("Audio play prevented:", e);
    }
  }

  playWrong() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.25); // low pitch

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      console.warn("Audio play prevented:", e);
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// DOM Element References
const elements = {
  themeToggle: document.getElementById('themeToggle'),
  soundToggle: document.getElementById('soundToggle'),
  helpBtn: document.getElementById('helpBtn'),
  helpModal: document.getElementById('helpModal'),
  closeHelpBtn: document.getElementById('closeHelpBtn'),
  modalCloseFooterBtn: document.getElementById('modalCloseFooterBtn'),

  // Stats
  statAnswered: document.getElementById('statAnswered'),
  statCorrect: document.getElementById('statCorrect'),
  statWrong: document.getElementById('statWrong'),
  statTimer: document.getElementById('statTimer'),
  progressBarFill: document.getElementById('progressBarFill'),
  progressPercent: document.getElementById('progressPercent'),

  // Palette
  paletteGrid: document.getElementById('paletteGrid'),

  // Quiz Card
  quizCard: document.getElementById('quizCard'),
  questionBadge: document.getElementById('questionBadge'),
  questionStatusBadge: document.getElementById('questionStatusBadge'),
  questionText: document.getElementById('questionText'),
  questionDiagram: document.getElementById('questionDiagram'),
  optionsGrid: document.getElementById('optionsGrid'),
  feedbackBox: document.getElementById('feedbackBox'),
  feedbackHeader: document.getElementById('feedbackHeader'),
  feedbackExp: document.getElementById('feedbackExp'),

  // Navigation
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),

  // Results Screen
  resultsCard: document.getElementById('resultsCard'),
  resultsBadge: document.getElementById('resultsBadge'),
  resultsTitle: document.getElementById('resultsTitle'),
  resultsSubtitle: document.getElementById('resultsSubtitle'),
  scoreCircleFill: document.getElementById('scoreCircleFill'),
  scoreNumber: document.getElementById('scoreNumber'),
  resTotal: document.getElementById('resTotal'),
  resCorrect: document.getElementById('resCorrect'),
  resWrong: document.getElementById('resWrong'),
  resAccuracy: document.getElementById('resAccuracy'),
  resTime: document.getElementById('resTime'),
  restartBtn: document.getElementById('restartBtn'),
  retryMissedBtn: document.getElementById('retryMissedBtn'),
  reviewList: document.getElementById('reviewList'),
  reviewFilterBtns: document.querySelectorAll('.filter-tab')
};

// Formatting helpers
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const optionPrefixes = ['A', 'B', 'C', 'D', 'E', 'F'];

// Start Timer
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    elements.statTimer.textContent = formatTime(state.timerSeconds);
  }, 1000);
}

// Render Question Palette
function renderPalette() {
  elements.paletteGrid.innerHTML = '';
  state.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;
    btn.setAttribute('aria-label', `Go to Question ${idx + 1}`);

    if (idx === state.currentIndex) {
      btn.classList.add('current');
    }

    const ans = state.userAnswers[idx];
    if (ans) {
      if (ans.isCorrect) {
        btn.classList.add('answered-correct');
      } else {
        btn.classList.add('answered-wrong');
      }
    }

    btn.addEventListener('click', () => {
      sfx.playClick();
      goToQuestion(idx);
    });

    elements.paletteGrid.appendChild(btn);
  });
}

// Update Top Stats & Progress Bar
function updateStats() {
  const total = state.questions.length;
  const answeredKeys = Object.keys(state.userAnswers);
  const answeredCount = answeredKeys.length;
  
  let correctCount = 0;
  let wrongCount = 0;

  answeredKeys.forEach(k => {
    if (state.userAnswers[k].isCorrect) correctCount++;
    else wrongCount++;
  });

  elements.statAnswered.textContent = `${answeredCount}/${total}`;
  elements.statCorrect.textContent = correctCount;
  elements.statWrong.textContent = wrongCount;

  const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
  elements.progressBarFill.style.width = `${pct}%`;
  elements.progressPercent.textContent = `${pct}% Completed`;
}

// Render Current Question
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  if (!q) return;

  // Make sure quiz card is visible and results hidden
  elements.quizCard.style.display = 'block';
  elements.resultsCard.classList.remove('show');

  // Badge & Status
  elements.questionBadge.textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  elements.questionText.textContent = q.question;

  // Diagram rendering if available
  if (q.diagram) {
    elements.questionDiagram.innerHTML = q.diagram;
    elements.questionDiagram.style.display = 'block';
  } else {
    elements.questionDiagram.innerHTML = '';
    elements.questionDiagram.style.display = 'none';
  }

  // Answer status badge & feedback box reset
  const ans = state.userAnswers[state.currentIndex];
  elements.optionsGrid.innerHTML = '';

  if (ans) {
    if (ans.isCorrect) {
      elements.questionStatusBadge.className = 'question-status-badge correct';
      elements.questionStatusBadge.innerHTML = '✓ Correct';
    } else {
      elements.questionStatusBadge.className = 'question-status-badge wrong';
      elements.questionStatusBadge.innerHTML = '✗ Incorrect';
    }
  } else {
    elements.questionStatusBadge.className = 'question-status-badge';
    elements.questionStatusBadge.textContent = '';
  }

  // Render Option Buttons
  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.setAttribute('data-index', optIdx);

    const prefix = optionPrefixes[optIdx] || (optIdx + 1);

    btn.innerHTML = `
      <span class="option-prefix">${prefix}</span>
      <span class="option-content">${optText}</span>
      <span class="option-icon"></span>
    `;

    // If already answered, apply highlights
    if (ans) {
      btn.disabled = true;
      if (optIdx === q.correctIndex) {
        btn.classList.add('state-correct');
        btn.querySelector('.option-icon').innerHTML = '✓';
      }
      if (optIdx === ans.selectedIndex && !ans.isCorrect) {
        btn.classList.add('state-wrong');
        btn.querySelector('.option-icon').innerHTML = '✗';
      }
    } else {
      btn.addEventListener('click', () => selectOption(optIdx));
    }

    elements.optionsGrid.appendChild(btn);
  });

  // Feedback Box rendering
  if (ans) {
    elements.feedbackBox.className = `feedback-box show ${ans.isCorrect ? 'correct' : 'wrong'}`;
    const correctLetter = optionPrefixes[q.correctIndex] || (q.correctIndex + 1);
    const correctVal = q.options[q.correctIndex];

    if (ans.isCorrect) {
      elements.feedbackHeader.innerHTML = '<span>✓ Correct! Great job.</span>';
    } else {
      elements.feedbackHeader.innerHTML = `<span>✗ Incorrect! Correct answer is <strong>${correctLetter}. ${correctVal}</strong></span>`;
    }
    elements.feedbackExp.textContent = q.explanation || "No explanation provided for this question.";
  } else {
    elements.feedbackBox.className = 'feedback-box';
    elements.feedbackHeader.innerHTML = '';
    elements.feedbackExp.textContent = '';
  }

  // Navigation button states
  elements.prevBtn.disabled = state.currentIndex === 0;

  const isLastQuestion = state.currentIndex === state.questions.length - 1;
  if (isLastQuestion) {
    elements.nextBtn.className = 'btn btn-finish';
    elements.nextBtn.innerHTML = '<span>View Results</span> <span class="nav-arrow">📊</span>';
  } else {
    elements.nextBtn.className = 'btn btn-primary';
    elements.nextBtn.innerHTML = '<span>Next</span> <span class="nav-arrow">→</span>';
  }

  renderPalette();
  updateStats();
}

// Handle Option Selection
function selectOption(selectedIdx) {
  // If already answered, do nothing
  if (state.userAnswers[state.currentIndex]) return;

  const q = state.questions[state.currentIndex];
  const isCorrect = selectedIdx === q.correctIndex;

  state.userAnswers[state.currentIndex] = {
    selectedIndex: selectedIdx,
    isCorrect: isCorrect,
    answeredAt: new Date()
  };

  if (isCorrect) {
    sfx.playCorrect();
  } else {
    sfx.playWrong();
  }

  // Re-render question to immediately show green/red states and explanation
  renderQuestion();
}

// Navigation Handlers
function goToQuestion(index) {
  if (index >= 0 && index < state.questions.length) {
    state.currentIndex = index;
    renderQuestion();
    window.scrollTo({ top: elements.quizCard.offsetTop - 30, behavior: 'smooth' });
  }
}

function handleNext() {
  sfx.playClick();
  if (state.currentIndex < state.questions.length - 1) {
    goToQuestion(state.currentIndex + 1);
  } else {
    showResults();
  }
}

function handlePrev() {
  sfx.playClick();
  if (state.currentIndex > 0) {
    goToQuestion(state.currentIndex - 1);
  }
}

// Calculate and Display Results
function showResults() {
  elements.quizCard.style.display = 'none';
  elements.resultsCard.classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const total = state.questions.length;
  let correct = 0;
  let wrong = 0;

  state.questions.forEach((q, idx) => {
    const ans = state.userAnswers[idx];
    if (ans && ans.isCorrect) correct++;
    else if (ans && !ans.isCorrect) wrong++;
  });

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Badge & Title based on performance
  if (accuracy >= 80) {
    elements.resultsBadge.textContent = "🏆 Outstanding Performance";
    elements.resultsTitle.textContent = "Excellent! You're NPTEL Exam Ready!";
    elements.resultsSubtitle.textContent = "You demonstrated a strong command of IoT concepts, protocols, and sensor architectures.";
  } else if (accuracy >= 50) {
    elements.resultsBadge.textContent = "👍 Good Progress";
    elements.resultsTitle.textContent = "Good Effort! A Little More Practice Will Do.";
    elements.resultsSubtitle.textContent = "Review the incorrect questions below to master the concepts before taking the test.";
  } else {
    elements.resultsBadge.textContent = "📚 Needs Improvement";
    elements.resultsTitle.textContent = "Keep Practicing!";
    elements.resultsSubtitle.textContent = "Go through the lecture notes and review the explanations below to improve your score.";
  }

  // Score circle animation
  elements.scoreNumber.textContent = `${accuracy}%`;
  // SVG radius is 70, circumference is 2 * PI * 70 ≈ 440
  const offset = 440 - (440 * accuracy) / 100;
  setTimeout(() => {
    elements.scoreCircleFill.style.strokeDashoffset = offset;
    elements.scoreCircleFill.style.stroke = accuracy >= 80 ? 'var(--success)' : (accuracy >= 50 ? 'var(--accent-primary)' : 'var(--danger)');
  }, 100);

  // Metrics
  elements.resTotal.textContent = total;
  elements.resCorrect.textContent = correct;
  elements.resWrong.textContent = wrong;
  elements.resAccuracy.textContent = `${accuracy}%`;
  elements.resTime.textContent = formatTime(state.timerSeconds);

  // Show/Hide "Retry Missed" button
  if (wrong > 0 || (total - (correct + wrong)) > 0) {
    elements.retryMissedBtn.style.display = 'inline-flex';
  } else {
    elements.retryMissedBtn.style.display = 'none';
  }

  renderReviewList();
}

// Render Review Breakdown
function renderReviewList() {
  elements.reviewList.innerHTML = '';

  state.questions.forEach((q, idx) => {
    const ans = state.userAnswers[idx];
    const isAnswered = !!ans;
    const isCorrect = isAnswered && ans.isCorrect;
    const isWrong = isAnswered && !ans.isCorrect;
    const isUnanswered = !isAnswered;

    // Filter check
    if (state.reviewFilter === 'correct' && !isCorrect) return;
    if (state.reviewFilter === 'wrong' && !isWrong && !isUnanswered) return;

    const item = document.createElement('div');
    let itemClass = 'review-item ';
    let statusTag = '';

    if (isCorrect) {
      itemClass += 'is-correct';
      statusTag = '<span class="review-item-status status-tag-correct">✓ Correct</span>';
    } else if (isWrong) {
      itemClass += 'is-wrong';
      statusTag = '<span class="review-item-status status-tag-wrong">✗ Incorrect</span>';
    } else {
      itemClass += 'is-unanswered';
      statusTag = '<span class="review-item-status status-tag-unanswered">⚠ Skipped</span>';
    }
    item.className = itemClass;

    const correctLetter = optionPrefixes[q.correctIndex] || (q.correctIndex + 1);
    const correctText = q.options[q.correctIndex];

    let userSelectionText = 'None (Skipped)';
    if (isAnswered) {
      const userLetter = optionPrefixes[ans.selectedIndex] || (ans.selectedIndex + 1);
      userSelectionText = `${userLetter}. ${q.options[ans.selectedIndex]}`;
    }

    item.innerHTML = `
      <div class="review-item-header">
        <div class="review-item-title">Q${idx + 1}: ${q.question}</div>
        ${statusTag}
      </div>
      <div class="review-item-answers">
        <div><strong>Your Answer:</strong> <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">${userSelectionText}</span></div>
        <div><strong>Correct Answer:</strong> <span style="color: var(--success); font-weight: 600;">${correctLetter}. ${correctText}</span></div>
      </div>
      <div class="review-exp"><strong>Explanation:</strong> ${q.explanation || 'No explanation available.'}</div>
    `;

    elements.reviewList.appendChild(item);
  });

  if (elements.reviewList.children.length === 0) {
    elements.reviewList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No questions match this filter.</div>`;
  }
}

// Reset / Restart Entire Practice
function restartQuiz(newQuestions = null) {
  sfx.playClick();
  if (newQuestions && newQuestions.length > 0) {
    state.questions = newQuestions;
  } else {
    state.questions = [...questionsData];
  }
  state.currentIndex = 0;
  state.userAnswers = {};
  state.timerSeconds = 0;
  state.reviewFilter = 'all';

  elements.reviewFilterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
  elements.scoreCircleFill.style.strokeDashoffset = 440;

  renderQuestion();
}

// Retry Missed Questions Only
function retryMissedQuestions() {
  sfx.playClick();
  const missed = state.questions.filter((q, idx) => {
    const ans = state.userAnswers[idx];
    return !ans || !ans.isCorrect;
  });

  if (missed.length > 0) {
    restartQuiz(missed);
  }
}

// Keyboard Navigation
function handleKeyDown(e) {
  // If typing in an input or modal is open, ignore
  if (elements.helpModal.classList.contains('open')) {
    if (e.key === 'Escape') closeHelp();
    return;
  }

  // Next / Prev via Arrow Keys
  if (e.key === 'ArrowRight' || e.key === 'KeyN') {
    if (elements.resultsCard.classList.contains('show')) return;
    handleNext();
  } else if (e.key === 'ArrowLeft' || e.key === 'KeyP') {
    if (elements.resultsCard.classList.contains('show')) return;
    handlePrev();
  }

  // Options 1, 2, 3, 4 or a, b, c, d
  if (!elements.resultsCard.classList.contains('show')) {
    const key = e.key.toLowerCase();
    if (key === '1' || key === 'a') selectOption(0);
    else if (key === '2' || key === 'b') selectOption(1);
    else if (key === '3' || key === 'c') selectOption(2);
    else if (key === '4' || key === 'd') selectOption(3);
  }
}

// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('nptel_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  sfx.playClick();
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('nptel_theme', target);
  updateThemeIcon(target);
}

function updateThemeIcon(theme) {
  elements.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  elements.themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
}

// Sound Toggle
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  elements.soundToggle.textContent = state.soundEnabled ? '🔔' : '🔕';
  elements.soundToggle.setAttribute('title', state.soundEnabled ? 'Mute Audio Effects' : 'Enable Audio Effects');
  if (state.soundEnabled) sfx.playClick();
}

// Help Modal
function openHelp() {
  sfx.playClick();
  elements.helpModal.classList.add('open');
}

function closeHelp() {
  elements.helpModal.classList.remove('open');
}

// Event Listeners
function setupEventListeners() {
  elements.prevBtn.addEventListener('click', handlePrev);
  elements.nextBtn.addEventListener('click', handleNext);
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.soundToggle.addEventListener('click', toggleSound);

  elements.helpBtn.addEventListener('click', openHelp);
  elements.closeHelpBtn.addEventListener('click', closeHelp);
  elements.modalCloseFooterBtn.addEventListener('click', closeHelp);
  elements.helpModal.addEventListener('click', (e) => {
    if (e.target === elements.helpModal) closeHelp();
  });

  elements.restartBtn.addEventListener('click', () => restartQuiz());
  elements.retryMissedBtn.addEventListener('click', retryMissedQuestions);

  elements.reviewFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      elements.reviewFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.reviewFilter = btn.dataset.filter;
      renderReviewList();
    });
  });

  window.addEventListener('keydown', handleKeyDown);
}

// App Initialization
function init() {
  initTheme();
  setupEventListeners();
  startTimer();
  renderQuestion();
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
