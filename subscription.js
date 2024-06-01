function validateForm(event) {
    event.preventDefault();
    clearErrors();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countryInput = document.getElementById('country');
    const termsInput = document.getElementById('terms');

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
      displayError(nameInput, 'Name is required');
      isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === '') {
      displayError(emailInput, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      displayError(emailInput, 'Invalid email format');
      isValid = false;
    }

    // Phone validation
    if (phoneInput.value.trim() === '') {
      displayError(phoneInput, 'Phone number is required');
      isValid = false;
    } else if (!isValidPhone(phoneInput.value.trim())) {
      displayError(phoneInput, 'Invalid phone number format');
      isValid = false;
    }

    // Country validation
    if (countryInput.value === '') {
      displayError(countryInput, 'Country is required');
      isValid = false;
    }

    // Terms and conditions validation
    if (!termsInput.checked) {
      displayError(termsInput, 'You must agree to the terms and conditions');
      isValid = false;
    }

    if (isValid) {
      // Form submission code goes here
      alert('Subscription form submitted successfully');
      document.getElementById('subscription-form').reset();
    }
  }

  function displayError(inputElement, errorMessage) {
    const errorElementId = inputElement.id + '-error';
    const errorElement = document.getElementById(errorElementId);
    errorElement.innerText = errorMessage;
  }

  function clearErrors() {
    const errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerText = '';
    }
  }

  function isValidEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    // Basic phone number format validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }