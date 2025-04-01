document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function moveSlide(n) {
        index += n;
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", function() {
        moveSlide(-1);
    });
    
    nextButton.addEventListener("click", function() {
        moveSlide(1);
    });
    
    setInterval(() => moveSlide(1), 3000);
});
