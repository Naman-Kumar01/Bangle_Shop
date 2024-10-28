// Chat Popup Toggle
const chatButton = document.getElementById('chat-button');
const chatPopup = document.getElementById('chat-popup');

chatButton.addEventListener('click', () => {
  chatPopup.style.display = chatPopup.style.display === 'none' ? 'block' : 'none';
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});
