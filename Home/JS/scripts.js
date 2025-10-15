fetch('tariffs.json')
  .then(response => response.json())
  .then(tariffs => {
    const container = document.querySelector('.tariffs-container');

    tariffs.forEach(tariff => {
      const card = document.createElement('div');
      card.className = 'tariff-card';

      card.innerHTML = `
        <div class="location">
          <img src="${tariff.location.flag}" alt="${tariff.location.country}" />
          <span>${tariff.location.country}</span>
        </div>
        <h3>${tariff.name}</h3>
        <div class="tariff-features">
          <p><strong>ОЗУ:</strong> ${tariff.ram}</p>
          <p><strong>GPU:</strong> ${tariff.gpu}</p>
          <p><strong>Диск:</strong> ${tariff.disk}</p>
          <p><strong>Портов:</strong> ${tariff.ports}</p>
          <p>
            <strong>FTP:</strong>
            <img src="/Home/img/icons/${tariff.ftp ? 'check.png' : 'cross.png'}" class="status-icon">
          </p>
        </div>
        <div class="price">${tariff.price}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Ошибка загрузки тарифов:', error));

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
