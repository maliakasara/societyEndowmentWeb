document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("response-message").innerText = "Thank you! Your message has been sent.";
            form.reset();
        });
    }
});

    