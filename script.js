document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    const link = document.querySelector(".to-bottom");
    const target = document.getElementById("bottom");
  
    link.addEventListener("click", function(event) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });

    let openModal = null; // Keep track of the currently open modal

    // Handle multiple modals
    for (let i = 1; i <= 5; i++) {
        let modal = document.getElementById(`myModal-${i}`);
        let card = document.getElementById(`special-card-${i}`);
        let span = modal.querySelector(".close");

        card.onclick = function() {
            modal.style.opacity = 0;
            modal.style.display = "block";
            setTimeout(() => modal.style.opacity = 1, 1);
            openModal = modal; // Store the opened modal
        }

        span.onclick = function() {
            modal.style.opacity = 0;
            setTimeout(() => modal.style.display = "none", 300);
            openModal = null; // Reset the opened modal
        }
    }

    // Single window click listener
    window.onclick = function(event) {
        if (openModal && event.target == openModal) {
            openModal.style.opacity = 0;
            setTimeout(() => {
                openModal.style.display = "none";
                openModal = null; // Reset the opened modal
            }, 300);
        }
    }
});
