(function () {

    let slidesToShow = 1;

    const productsJson = `[
        {
            "id": "1",
            "fone": "img/1.png",
            "name": "Photo exhibition <br> “Ukraine. After the invastion",
            "date": "4-16 of August",
            "info": "Opening hours: 12 pm - 6 pm <br> Free entrance <br> Binnenhofzaal, Korte Vijverberg, 2, The Hague"
        },
        {
            "id": "2",
            "fone": "img/logo.png",
            "name": "Photo exhibition <br> “Ukraine. After the invastion",
            "date": "4-16 of August",
            "info": "1"
        },
        {
            "id": "3",
            "name": "Photo exhibition <br> “Ukraine. After the invastion",
            "date": "4-16 of August",
            "info": "2"
        }
    ]`;

    const products = JSON.parse(productsJson);

    let productsHtml = [];
    for (const product of products) {
        productsHtml.push(` 
        <div class="events">
        <style>
        .events {
            background: url(${product.fone});
            background-size: cover;
        }
        
        </style>
        <div class="event">
            <h1 class="name-events">${product.name}</h1>
            <p class="date-events">${product.date}</p>
            <p class="info-events" >${product.info}</p>
            <div class="button-donate">
                <a href="#donate" class="donate-now">Donate Now</a>
            </div>
        </div>
            <div class=button-carusel>
        <button class="button-previous-click"><img src="img/previou.png" alt="left click"></button>
        <button class="button-next-click"><img src="img/nex.png" alt="back click"></button>
    </div>
        </div>`);
    };

    document.querySelector('.events').innerHTML = productsHtml;


    const slides = productsHtml;
    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.events');

        switch (slidesToShow) {
            case 1: slideContainer.innerHTML = slides[currentSlideIdx];
                break;
            case 2:
                const nextSlideIdx = currentSlideIdx + 1 > slides.length ? 0 : currentSlideIdx + 1;
                slideContainer.innerHTML = slides[currentSlideIdx]
                    + slides[nextSlideIdx];
                break;

        }
    }


    function previousSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0)
            currentSlideIdx = slides.length - 1;
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