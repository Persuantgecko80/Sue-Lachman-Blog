document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector(".to-bottom");
    const target = document.getElementById("bottom");
  
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  