document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    const link = document.querySelector(".to-bottom");
    const target = document.getElementById("bottom");
  
    link.addEventListener("click", function(event) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  
    // Modal
    var modal = document.getElementById("myModal");
    var card = document.getElementById("special-card-1");


    var span = document.getElementsByClassName("close")[0];
  
    card.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  