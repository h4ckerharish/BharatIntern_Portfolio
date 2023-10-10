// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navlinks a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll("section").forEach(function (section) {
                section.classList.add("hidden");
            });

            // Show the target section
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });
});
