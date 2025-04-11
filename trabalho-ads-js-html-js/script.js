document.addEventListener('DOMContentLoaded', function () {
  const messageButton = document.getElementById('message-btn');
  const messageDisplay = document.getElementById('message-display');

  const messages = [
    'Acredite em você mesmo e tudo será possível!',
    'O sucesso nasce da constância do esforço.',
    'Cada dia é uma nova oportunidade para ser melhor.',
    'Os desafios são oportunidades disfarçadas.',
    'A jornada de mil quilômetros começa com um único passo.',
  ];

  messageButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    messageDisplay.textContent = randomMessage;
    messageDisplay.style.display = 'block';

    messageDisplay.style.animation = 'none';
    setTimeout(function () {
      messageDisplay.style.animation = 'fadeIn 0.5s';
    }, 10);
  });

  const style = document.createElement('style');
  style.textContent = `
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
      }
  `;
  document.head.appendChild(style);
});
