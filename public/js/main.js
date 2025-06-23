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

// signupSubmitBtn.addEventListener('submit')

// // submit form data using AJAX (avoid page refreshing)
// document.querySelector('.signup-form').addEventListener('submit', async (def) => {
//   def.preventDefault(); // Prevent the default form submission

//   // define form fields for submission
//   userName = document.querySelector('.userName').value.trim()
//   email = document.querySelector('.email').value.trim()
//   password = document.querySelector('.password').value.trim()
//   confirmPassword = document.querySelector('.confirmPassword').value.trim()

//   const res = await fetch('/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userName, email, password, confirmPassword)
//   })


// })