document.addEventListener('DOMContentLoaded', function() {
  // Info Dialog Handling
  const infoDialog = document.getElementById('info-dialog');
  const closeBtn = document.getElementById('close-btn');
  const infoForm = document.getElementById('info-form');
  const responseMessage = document.getElementById('response-message');

  setTimeout(function() {
    infoDialog.style.display = 'block';
  }, 1000);

  closeBtn.addEventListener('click', function() {
    infoDialog.style.display = 'none';
  });

  infoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(infoForm);

    fetch(infoForm.action, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      responseMessage.innerHTML = "Thank you! Your request has been submitted successfully.";
      responseMessage.style.display = 'block';
      infoForm.reset();
    })
    .catch(error => {
      responseMessage.innerHTML = "Oops! There was a problem submitting your request.";
      responseMessage.style.display = 'block';
    });
  });

  // Smooth Scroll for Learn More Button
  document.getElementById('learn-more').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
});
