document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    document.getElementById('contactForm').reset();
  });