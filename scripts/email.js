document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm('service_4l5aloh', 'template_rsuc91g', form)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            }, (error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
