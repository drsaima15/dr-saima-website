// JavaScript for dialog form and hamburger menu

document.addEventListener('DOMContentLoaded', () => {
  const infoDialog = document.getElementById('info-dialog');
  const closeBtn = document.getElementById('close-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');
  const bookAppointmentButton = document.getElementById('book-appointment');
  
  // Open the info dialog on page load
  infoDialog.style.display = 'block';

  // Close dialog
  closeBtn.addEventListener('click', () => {
    infoDialog.style.display = 'none';
  });

  // Toggle the menu on mobile view
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Handle book appointment button
  bookAppointmentButton.addEventListener('click', () => {
    infoDialog.style.display = 'block';
  });
});
