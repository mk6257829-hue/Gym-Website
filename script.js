// FITNESS CLUB JAVASCRIPT FILE

// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuButton.textContent =
            navLinks.classList.contains("active") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuButton.textContent = "☰";
        });
    });
}


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".about, .services, .membership, .trainers, .contact, .service-card, .price-card, .trainer-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
}

// contect form


document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const status = document.getElementById("contactStatus");

        if (!/^[0-9]{10}$/.test(phone)) {
            status.textContent = "Enter a valid 10-digit mobile number!";
            return;
        }

        status.textContent =
            "Message successfully submitted! Thank you, " + name + ".";

        status.style.color = "#c5f946";

        contactForm.reset();

    });

});
