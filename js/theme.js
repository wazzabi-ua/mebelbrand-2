const themeSwitch = document.getElementById('themeSwitch');

// Завантажте збережену тему з локального сховища (якщо вона існує)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  themeSwitch.checked = savedTheme === 'dark';
}

themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

