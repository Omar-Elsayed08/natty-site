document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".col-md-4");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
  
      const translateValue = -index * 33.33 + "%"; // Adjust the percentage based on the number of slides
      carousel.style.transform = "translateX(" + translateValue + ")";
      currentIndex = index;
    }
  
    // Previous slide
    document.getElementById("prevBtn").addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });
  
    // Next slide
    document.getElementById("nextBtn").addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });
  });
  
  