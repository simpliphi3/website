document.addEventListener("DOMContentLoaded", () => {
    // Form Validation
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    form.addEventListener("submit", (event) => {
        let valid = true;

        // Clear existing error messages
        document.querySelectorAll(".error").forEach((el) => el.remove());

        // Check if fields are filled
        if (!nameInput.value.trim()) {
            showError(nameInput, "Name is required.");
            valid = false;
        }
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            showError(emailInput, "A valid email is required.");
            valid = false;
        }
        if (!messageInput.value.trim()) {
            showError(messageInput, "Message cannot be empty.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent default for demo purposes
            showSuccessMessage();
        }
    });

    function showError(input, message) {
        const error = document.createElement("small");
        error.classList.add("error");
        error.style.color = "red";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Show success or failure message after submission
    function showSuccessMessage() {
        const main = document.querySelector("main");
        main.innerHTML = `
            <section style="text-align: center; padding: 2rem;">
                <h2>Thank You!</h2>
                <p>Your message has been successfully sent. We'll get back to you shortly.</p>
                <a href="index.html" class="cta-button">Back to SimpliPhi</a>
            </section>
        `;
    }
});
