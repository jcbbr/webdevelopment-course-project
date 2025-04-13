// Initialize EmailJS with user ID
(function () {
    emailjs.init("WhdCYglrDbMUKA_23");
})();

document.addEventListener("DOMContentLoaded", function() {
    // listen to the form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the form before sending the email
        if (!validate(this)) {
            return; // Stop if validation fails
        }

        // Initialize EmailJS service and template IDs
        let serviceID = "service_dvtjjwl";
        let templateID = "template_3jzlhgm";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully. Thank you for reaching out!");
            },
            (error) => {
                console.log("FAILED...", error);
                alert("FAILED...", error);
            }
        );
    });
});