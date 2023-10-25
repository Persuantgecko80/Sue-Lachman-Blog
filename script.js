document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    const link = document.querySelector(".to-bottom");
    const target = document.getElementById("bottom");
  
    link.addEventListener("click", function(event) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });

    // Handle multiple modals
    let openModal = null;  // Keep track of the currently open modal

    for (let i = 1; i <= 5; i++) {
        let modal = document.getElementById(`myModal-${i}`);
        let card = document.getElementById(`special-card-${i}`);
        let span = modal.querySelector(".close");
        
        card.onclick = function() {
          modal.style.display = "block";
          openModal = modal;  // Update the currently open modal
        }

        span.onclick = function() {
          modal.style.display = "none";
          openModal = null;  // Reset the open modal tracker
        }
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
      if (event.target === openModal) {
        openModal.style.display = "none";
        openModal = null;  // Reset the open modal tracker
      }
    }
});
