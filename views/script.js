document.addEventListener('DOMContentLoaded', function () {
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });
    const carousel = document.querySelector('.carousel');
let currentSlide = 0;

function showNextSlide() {
  currentSlide = (currentSlide + 1) % 2; // Toggle between 0 and 1 (since there are two images)
  
  // Move the carousel by 100% of its width
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Change slide every 3 seconds (3000 milliseconds)
setInterval(showNextSlide, 3000);


});


