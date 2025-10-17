const words = [
    "Серверов",
    "Ботов",
    "Сайтов",
    "Приложений",
    "Веб-сервисов",
    "API",
    "Чат-ботов",
    "Скриптов"
];
  
let index = 0;
const span = document.getElementById("rotating-text");

function changeWord() {
  span.style.opacity = 0; 
  setTimeout(() => {
    index = (index + 1) % words.length;
    span.textContent = words[index];
    span.style.opacity = 1;
  }, 500);
}

setInterval(changeWord, 2500);

const buttons = document.querySelectorAll(".tab-btn");
const slider = document.querySelector(".slider-bg");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    slider.style.left = `${index * 50}%`;
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
