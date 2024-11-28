const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const passwordEye = document.getElementById('toggle-password');
const confirmPasswordEye = document.getElementById('toggle-confirm-password');

const passwordFieldOpt = document.getElementById('password-opt');
const confirmPasswordFieldOpt = document.getElementById('confirm-password-opt');
const passwordEyeOpt = document.getElementById('toggle-password-opt');
const confirmPasswordEyeOpt = document.getElementById('toggle-confirm-password-opt');

const passwordFieldLog = document.getElementById('password-log');
const passwordEyeLog = document.getElementById('toggle-password-log');

const passwordFieldReset = document.getElementById('password-reset');
const passwordEyeReset = document.getElementById('toggle-password-reset');

const togglePasswordVisibility = (inputField) => {
  if (inputField.type === 'password') {
    inputField.type = 'text';
  } else {
    inputField.type = 'password';
  }
}

// Обработчики событий для глаз (пароль)
passwordEye.addEventListener('click', () => {
  togglePasswordVisibility(passwordField);
});
confirmPasswordEye.addEventListener('click', () => {
  togglePasswordVisibility(confirmPasswordField);
});

passwordEyeOpt.addEventListener('click', () => {
  togglePasswordVisibility(passwordFieldOpt);
});
confirmPasswordEyeOpt.addEventListener('click', () => {
  togglePasswordVisibility(confirmPasswordFieldOpt);
});

passwordEyeLog.addEventListener('click', () => {
  togglePasswordVisibility(passwordFieldLog);
});

passwordEyeReset.addEventListener('click', () => {
  togglePasswordVisibility(passwordFieldReset);
});