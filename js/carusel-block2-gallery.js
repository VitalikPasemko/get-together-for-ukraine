(function() {

    let slidesToShow = 4;

    const slides = [
        '<img src="img/photo-case1.jpg" alt"photo-case">',
        '<img src="img/photo-case2.jpg" alt"photo-case">',
        '<img src="img/photo-case4.jpg" alt"photo-case">',
        '<img src="img/photo-case5.jpg" alt"photo-case">',
        '<img src="img/photo-case6.jpg" alt"photo-case">',
        '<img src="img/photo-case8.jpg" alt"photo-case">',
        '<img src="img/photo-case9.jpg" alt"photo-case">',
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