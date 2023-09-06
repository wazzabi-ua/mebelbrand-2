document.addEventListener('DOMContentLoaded', function() {
    const previewImage = document.getElementById('active-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const imagePath = thumbnail.getAttribute('src');
        previewImage.setAttribute('src', imagePath);
  
        // Знімаємо клас "active" з усіх мініатюр і додаємо його лише до обраної мініатюри
        thumbnails.forEach(item => item.classList.remove('active'));
        thumbnail.classList.add('active');
      });
    });
  });
  
  