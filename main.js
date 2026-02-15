// DARK MODE
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// MINI GAME
const orb = document.getElementById("orb");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;

function moveOrb() {
  const x = Math.random() * 260;
  const y = Math.random() * 260;
  orb.style.left = x + "px";
  orb.style.top = y + "px";
}

orb.addEventListener("click", () => {
  score++;
  scoreText.textContent = "Score: " + score;
  moveOrb();
});

moveOrb();

// GALAXY
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#5f9cff";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(drawStars);
}

drawStars();
