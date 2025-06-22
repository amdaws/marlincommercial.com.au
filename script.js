// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Button ripple effect
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
            circle.classList.add('ripple');

            // Remove old ripple if exists
            const oldRipple = button.querySelector('.ripple');
            if (oldRipple) oldRipple.remove();

            button.appendChild(circle);
        });
    });

    // Example: Toggle active class on buttons (for demonstration)
    document.querySelectorAll('button.toggle').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// Optional: Add CSS for ripple effect (to be included in your CSS file)
/*
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0,0,0,0.2);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
    z-index: 1;
}
@keyframes ripple {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}
button {
    position: relative;
    overflow: hidden;
}
*/