(function() {

    const slides = [
        `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224.png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton>add to cart</buttton>   
                </div>`,
        `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(1).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`, `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(3).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`, `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(4).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`, `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(5).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`, `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(6).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`, `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(6).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`,
        `
                <div class="jbl-card">
                    <img src="img/jbl-cards/224(7).png" alt=" daniel">
                    <div class="jbl_title">Jane McCallan</div>
                    <div class="jbl-prise">Jane McCallan</div>
                    <buttton class="jbl-btn">add to cart</buttton>   
                </div>`



    ]
    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.headphones-carousel');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (currentSlideIdx <= 0) {
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
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    const nextButton = document.querySelector('.feedback-btn__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.feedback-btn__prev');
    prevButton.addEventListener('click', prevSlide);
    setInterval(nextSlide, 3000);
    renderCarousel();
    window.addEventListener('resize', renderCarousel);
})();