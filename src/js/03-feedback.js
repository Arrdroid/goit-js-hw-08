import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// Function to save form data to local storage
const saveFormDataToLocalStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

// Function to load form data from local storage and fill the form
const loadFormDataFromLocalStorage = () => {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Clear local storage
  localStorage.removeItem(STORAGE_KEY);

  // Clear form fields
  emailInput.value = '';
  messageInput.value = '';

  // Output form data to the console
  console.log(formData);
};

// Event listeners
form.addEventListener('input', saveFormDataToLocalStorage);
form.addEventListener('submit', handleSubmit);

// Load form data from local storage on page load
loadFormDataFromLocalStorage();

