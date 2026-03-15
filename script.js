// Navigation
function smoothScroll(target, duration) {
    const targetPosition = document.querySelector(target).getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    
    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Carousel Implementation
class Carousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.slides = this.carousel.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.showSlide(this.currentIndex);
        this.carousel.querySelector('.next').addEventListener('click', () => this.nextSlide());
        this.carousel.querySelector('.prev').addEventListener('click', () => this.prevSlide());
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.style.display = 'none');
        this.slides[index].style.display = 'block';
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
}

// Form Handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    // Process form data...
});

// Animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom > 0) {
            el.classList.add('animate');
        }
    });
});

// Interactive Features
function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show');
}

document.querySelector('.modal-button').addEventListener('click', toggleModal);
