document.addEventListener('DOMContentLoaded', () => {
  const infoDialog = document.getElementById('info-dialog');
  const closeBtn = document.getElementById('close-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');
  const bookAppointmentButton = document.getElementById('book-appointment');
  const infoForm = document.getElementById('info-form');
  const responseMessage = document.createElement('div'); // Create response message element
  responseMessage.id = 'response-message';
  infoDialog.querySelector('.dialog-content').appendChild(responseMessage); // Add response message to dialog

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

  // Handle form submission
  infoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(infoForm);

    fetch(infoForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        responseMessage.textContent = 'Thank you for your submission!';
        responseMessage.style.color = 'green';
        responseMessage.style.display = 'block';
        infoForm.reset(); // Reset the form fields
        setTimeout(() => {
          infoDialog.style.display = 'none'; // Optionally close the dialog after a few seconds
        }, 3000);
      } else {
        throw new Error('Form submission was not successful.');
      }
    })
    .catch(error => {
      responseMessage.textContent = There was an error submitting the form: ${error.message};
      responseMessage.style.color = 'red';
      responseMessage.style.display = 'block';
    });
  });
});
