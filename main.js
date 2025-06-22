// filepath: /my-website/my-website/src/scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            // Handle form submission logic here
            console.log('Form submitted:', Object.fromEntries(formData));
            alert('Thank you for your submission!');
            form.reset();
        });
    }
});