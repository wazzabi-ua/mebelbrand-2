// Отримуємо всі слайди та кнопки
const slides = document.querySelectorAll('.slide');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;
let intervalId;

// Функція для відображення поточного слайду
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Функція для перехоплення події кліку на кнопці "Play"
playButton.addEventListener('click', () => {
  // Починаємо автоматичну прокрутку
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 200); // Змінюйте цей інтервал на ваш власний
  playButton.style.display = 'none';
  stopButton.style.display = 'block';
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
});

// Функція для перехоплення події кліку на кнопці "Stop"
stopButton.addEventListener('click', () => {
  // Зупиняємо автоматичну прокрутку
  clearInterval(intervalId);
  playButton.style.display = 'block';
  stopButton.style.display = 'none';
  prevButton.style.display = 'block';
  nextButton.style.display = 'block';
});

// Функція для перехоплення події кліку на кнопці "Previous"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Функція для перехоплення події кліку на кнопці "Next"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Починаємо автоматичну прокрутку після завантаження сторінки
intervalId = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 200); // Змінюйте цей інтервал на ваш власний
