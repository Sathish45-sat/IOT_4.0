# NPTEL IoT 4.0 - Practice Portal

An interactive, responsive, frontend-only practice website for NPTEL Online Certification Exam preparation (IoT 4.0 & Sensor Networks).

## 🚀 Features

- **One Question at a Time**: Focused, distraction-free MCQ practice interface.
- **Instant Visual Feedback**:
  - Highlights correct answers in green with a checkmark badge.
  - Highlights incorrect answers in red and reveals the correct answer automatically.
- **Detailed Explanations**: Immediate conceptual explanations for every question.
- **Interactive Question Palette**: Jump directly to any question, color-coded by performance (correct, incorrect, unattempted).
- **Audio Feedback**: Subtle synthesized sounds for correct and wrong answers (toggleable, uses browser Web Audio API with zero external dependencies).
- **Real-time Stats & Timer**: Live tracking of correct, incorrect, progress percentage, and time elapsed.
- **Exam Summary & Analytics**:
  - Animated score gauge with accuracy percentage.
  - Motivational readiness message.
  - Filterable review list (All, Incorrect/Skipped, Correct).
  - "Retake Missed Questions" feature to target weak areas.
- **Keyboard Shortcuts**:
  - `1` - `4` or `A` - `D`: Select option
  - `←` / `→`: Navigate Previous / Next
- **Light & Dark Mode**: Seamless toggle with persistent preference.
- **Easy to Expand**: Questions are cleanly organized in `questions.js`.

## 🛠️ Tech Stack

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Custom design system, modern gradients, glassmorphism, responsive across desktop and mobile.
- **Vanilla JavaScript**: Pure JS with zero frameworks or external runtime dependencies.

## 🏃 Getting Started

Simply open `index.html` in any web browser:

```bash
# Or run with a lightweight local server:
python -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.
