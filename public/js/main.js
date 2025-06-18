const registerBtn = document.querySelector('.register-btn')

registerBtn.addEventListener('click', () => {
  const modal = document.querySelector('.signup-modal-container')
  modal.offsetHeight

    if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('visible'), 10); // Ensures transition
  } else {
    modal.classList.remove('visible');
    setTimeout(() => modal.classList.add('hidden'), 500); // Matches transition timing
  }

}
)