// This script handles the navigation and fade-out effect for the website.

// Add event listener to wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    let links = document.querySelectorAll("nav ul li a");
    let body = document.body;

    // Add a fade-out effect when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent immediate navigation
            const targetUrl = link.href;

            // Add fade-out class to body
            body.classList.add("fade-out");

            // Wait for the animation to complete before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Match the duration of the fade-out animation
        });
    });
});
