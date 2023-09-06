const toggleElementsButtons = document.querySelectorAll('.toggle-elements-button');

function toggleElements(button) {
  const elementsToHide = button.parentElement.querySelectorAll('.element-to-hide');
  const openEyeIcon = button.querySelector('.open-eye-icon');
  const closedEyeIcon = button.querySelector('.closed-eye-icon');
  
  elementsToHide.forEach(element => {
    element.style.display = button.classList.contains('hide-elements') ? 'none' : 'block';
  });

  if (button.classList.contains('hide-elements')) {
    openEyeIcon.classList.add('hidden');
    closedEyeIcon.classList.remove('hidden');
  } else {
    openEyeIcon.classList.remove('hidden');
    closedEyeIcon.classList.add('hidden');
  }
}

toggleElementsButtons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('hide-elements');
    toggleElements(button);
  });
});
