document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    this.reset();
  });
  document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault(); // Stop form submission
    }
  });
  