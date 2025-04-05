document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Validate name
        const name = document.getElementById("name");
        if (name.value.trim() === "") {
            alert("Name is required.");
            isValid = false;
        }

        // Validate email
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate phone
        const phone = document.getElementById("phone");
        if (!/^\d{10}$/.test(phone.value)) {
            alert("Phone number must be 10 digits.");
            isValid = false;
        }

        // Validate message
        const message = document.getElementById("message");
        if (message.value.trim() === "") {
            alert("Message cannot be empty.");
            isValid = false;
        }

        // Validate contact method
        const contactMethod = document.getElementById("contactMethod");
        if (contactMethod.value === "") {
            alert("Please select a preferred contact method.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
