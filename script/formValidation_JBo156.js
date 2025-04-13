// Function to validate the entire form
function validate(form) {
    return validateName(form) &&
           validateEmail(form) &&
           validatePhone(form) &&
           validateSubject(form) &&
           validateMessage(form);
}

// Function to validate the Name input
function validateName(form) {
    let name = form.elements["name"];
    if (name.validity.valueMissing) {
        name.setCustomValidity("Please enter your name.");
        name.reportValidity();
    } else {
        name.setCustomValidity("");
        return true;
    }
}

// Function to validate the Email input
function validateEmail(form) {
    let email = form.elements["email"];
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        email.setCustomValidity("Please enter your email address.");
        email.reportValidity();
    } else if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Your e-mail address should follow the format mail@example.com");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
        return true;
    }
}

// Function to validate the Phone input
function validatePhone(form) {
    let phone = form.elements["phone"];
    let phonePattern = /^\+?\d{10,15}$/;
    if (phone.validity.valueMissing) {
        phone.setCustomValidity("Please enter your phone number.");
        phone.reportValidity();
    } else if (!phonePattern.test(phone.value)) {
        phone.setCustomValidity("Phone number must be between 10 to 15 digits and can include an optional '+' at the start.");
        phone.reportValidity();
    } else {
        phone.setCustomValidity("");
        return true;
    }
}

// Function to validate the Subject input
function validateSubject(form) {
    let subject = form.elements["subject"];
    if (subject.validity.valueMissing) {
        subject.setCustomValidity("Subject cannot be empty.");
        subject.reportValidity();
    } else {
        subject.setCustomValidity("");
        return true;
    }
}

// Function to validate the Message input
function validateMessage(form) {
    let message = form.elements["message"];
    if (message.validity.valueMissing) {
        message.setCustomValidity("Message cannot be empty.");
        message.reportValidity();
    } else {
        message.setCustomValidity("");
        return true;
    }
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
        if (!validate(form)) {
            event.preventDefault();
        }
    });

    // Prevent form submission on Enter key press if fields are invalid
    form.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !validate(form)) {
            event.preventDefault();
        }
    });
});