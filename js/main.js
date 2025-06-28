// This file handles dynamic interactions on the website, including form validation and submission.

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (validateForm(name, email, message)) {
                alert("Thank you for your message!");
                contactForm.reset();
            }
        });
    }

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert("All fields are required.");
            return false;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});