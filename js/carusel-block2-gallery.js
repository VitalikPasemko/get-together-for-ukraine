(function() {

    let slidesToShow = 4;

    const slides = [
       
    ];
    
    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.slide-show-photo-exhebition');
        switch (slidesToShow) {
            case 1:  slideContainer.innerHTML = slides[currentSlideIdx];
                     break;
            case 2: 
                    const nextSlideIdx = currentSlideIdx + 2 > slides.length ? 0 : currentSlideIdx +1;
                    slideContainer.innerHTML = slides[currentSlideIdx]
                    + slides[nextSlideIdx];
                    break;
            
        }
    }

    function previousSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0)
          currentSlideIdx = slides.length-1;
        showCurrentSlide();
      }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    showCurrentSlide();

    document
    .querySelector(".button-previous-click")
    .addEventListener('click', previousSlide);

    document
    .querySelector(".button-next-click")
    .addEventListener("click", nextSlide);
})();