const isValidEmail = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

const isValidPassword = (password) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return passwordPattern.test(password);
};

const validateForm = (fields) => {
  let isValid = true;

  fields.forEach((field) => {
    if (!field.value?.trim()) {
      field.setError('This field is required.');
      isValid = false;
    } else {
      switch (field.name) {
        case 'email':
          if (!isValidEmail(field.value)) {
            field.setError('You have entered an invalid e-mail address. Please try again.');
            isValid = false;
          }
          break;
        case 'password':
        case 'newPassword':
          if (!isValidPassword(field.value)) {
            field.setError('Please choose a stronger password. Try a mix of letters, numbers, and symbols.');
            isValid = false;
          }
          break;
        case 'confirmPassword':
          const newPasswordField = fields.find(f => f.name === 'newPassword' || f.name === 'password');
          if (field.value !== newPasswordField?.value) {
            field.setError("Passwords don't match");
            isValid = false;
          }
          break;
        // Add more cases for other form fields as needed
        default:
          break;
      }
    }
  });

  return isValid;
};

export { validateForm };