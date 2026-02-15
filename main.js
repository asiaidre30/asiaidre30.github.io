// Dark Mode
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙";
});

// Scroll Reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
sections.forEach((section) => observer.observe(section));

// Smooth Scroll
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// QUIZ GAME
const questions = [
  {
    question: "Which array method returns a new array?",
    answers: ["forEach", "map", "push"],
    correct: 1,
  },
  {
    question: "Which method filters items based on condition?",
    answers: ["filter", "reduce", "every"],
    correct: 0,
  },
  {
    question: "Which method checks if all elements pass a test?",
    answers: ["map", "every", "sort"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextQuestion");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
    scoreEl.textContent = score;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
});

loadQuestion();
