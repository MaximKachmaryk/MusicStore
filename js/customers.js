(function() {

    const slides = [
        `
                <div class="customers_slide">
               
                    <img src="img/img-customers/girl-cust.png" alt=" daniel">
                    <div class="menu_title">Jane McCallan</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often
                        rent cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the
                        excellent technical condition of the cars, favorable rental conditions. And the staff is
                        always friendly.</div>
                </div>`,
        `<div class="customers_slide">
       
                    <img src="img/img-customers/testimonials1.png" alt="elzabet">
                    <div class="menu_title">Daniel Gordons</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often
                        rent cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the
                        excellent technical condition of the cars, favorable rental conditions. And the staff is
                        always friendly.</div>
                </div>`,
        `<div class="customers_slide">
                
                    <img src="img/img-customers/testimonials3.png" alt=" jane">
                    <div class="menu_title">Elizabeth Smith</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often rent
                        cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the excellent
                        technical condition of the cars, favorable rental conditions. And the staff is always friendly.
                    </div>
                </div>
             `
    ]
    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.customers__carousel');
        slideContainer.innerHTML = slides[currentSlideIdx];
       /*  if (currentSlideIdx <= 0) {
            currentSlideIdx = 0;
            slideContainer.innerHTML = slides[currentSlideIdx];
        }
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        } */
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    const nextButton = document.querySelector('.customers-btn__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.customers-btn__prev');
    prevButton.addEventListener('click', prevSlide);
    setInterval(nextSlide, 3000);
    renderCarousel();
    window.addEventListener('resize', renderCarousel);
})();