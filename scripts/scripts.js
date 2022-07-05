// Selects the password containing form row by selecting the 2nd to last form-row.
const passwordContainer = document.querySelector('#password-input');

// Selects the submit button.
const submitButton = document.querySelector('.submit-button');

// Selects the form.
const form = document.querySelector('.form');

function validateForm() {
  let first_password = document.querySelector('#user_password').value;
  let second_password = document.querySelector('#confirm_user_password').value;

  if (first_password != second_password) {
    // If the passwords do not match, disable submit and append a 'p' which contains an error message.
    submitButton.disabled = true;
    const p = document.createElement('p');
    p.textContent = '* Passwords do not match.';
    p.setAttribute("class", "error-message");

    if (document.querySelector('.error-message') == null) {
      passwordContainer.appendChild(p);
    };
  } else {
    // Removes the error message if it exists.
    if (document.querySelector('.error-message') != null) {
      errorMessage = document.querySelector('.error-message')
      passwordContainer.removeChild(errorMessage);
    };
    // Enables the submit button.
    submitButton.enabled = true;
  };
};
