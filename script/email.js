
(function () {
    emailjs.init("WhdCYglrDbMUKA_23");
  })();

document.addEventListener("DOMContentLoaded", function () {
    // listen to the form submission
    document
    .getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_dvtjjwl";
        const templateID = "template_3jzlhgm";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("SUCCESS!");
        },
        (error) => {
            console.log("FAILED...", error);
            alert("FAILED...", error);
        }
        );
    });
});