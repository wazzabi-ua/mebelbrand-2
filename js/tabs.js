document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button.mny');
  const tabContents = document.querySelectorAll('.tab-content.mny');

  tabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      tabContents.forEach(function(content) {
        content.classList.remove('active');
      });
      
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});