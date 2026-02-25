document.addEventListener("DOMContentLoaded", function () {

    const texts = [
        "Cybersecurity & Ethical Hacking",
        "Frontend & Backend Developer",
        "Python Developer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1200);
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 40 : 80);
    }

    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const nextBtn = document.querySelector(".arrow.right");
    const prevBtn = document.querySelector(".arrow.left");

    if (!slider) return;

    let currentIndex = 0;

    function updateSlide() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // go back to first
        }
        updateSlide();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // go to last
        }
        updateSlide();
    });

});