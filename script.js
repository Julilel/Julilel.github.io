// Contact Form Handler
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formMessage.style.display = 'none';
  
  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Success message
      formMessage.style.display = 'block';
      formMessage.style.backgroundColor = '#4CAF50';
      formMessage.style.color = 'white';
      formMessage.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';
      
      // Reset form
      form.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Error message with LinkedIn fallback
    formMessage.style.display = 'block';
    formMessage.style.backgroundColor = '#f44336';
    formMessage.style.color = 'white';
    formMessage.innerHTML = '❌ Failed to send message. Please contact me via <a href="https://www.linkedin.com/in/julian-leutz" target="_blank" rel="noopener noreferrer" class="form-message-link">LinkedIn</a> instead.';
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
