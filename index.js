
    // SERVICE POPUP
    const cards = document.querySelectorAll(".service-card");
    const popup = document.getElementById("contactPopup");
    const selectedService = document.getElementById("selectedService");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        selectedService.textContent = "You selected: " + card.dataset.service;
        popup.style.display = "flex";
      });
    });

    function closePopup() {
      popup.style.display = "none";
    }

    document.getElementById("contactForm").addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("namePopup").value;
      const phone = document.getElementById("phonePopup").value;
      const message = document.getElementById("messagePopup").value;
      const text = `Hello Helpy,%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
      window.open(`https://wa.me/919310487906?text=${text}`, "_blank");
    });

    // MAIN CONTACT FORM
    function sendToWhatsApp(e){
      e.preventDefault();
      const name = document.querySelector('#contact input[type="text"]').value;
      const email = document.querySelector('#contact input[type="email"]').value;
      const message = document.querySelector('#contact textarea').value;
      const text = `Hello Helpy,%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      window.open(`https://wa.me/919310487906?text=${text}`, "_blank");
    }

    // LIGHT/DARK MODE TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', ()=>{
      document.body.classList.toggle('bg-dark');
      document.body.classList.toggle('bg-light');
      themeToggle.textContent = document.body.classList.contains('bg-dark') ? '🌞 Light Mode' : '🌙 Dark Mode';
    });
  
  



