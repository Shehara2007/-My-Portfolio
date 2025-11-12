
    document.addEventListener("DOMContentLoaded", () => {
        /* ------------------ 🌸 NAV HAMBURGER MENU ------------------ */
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("navMenu");

        function openMenu() {
            hamburger.classList.add("active");
            navMenu.classList.add("active");
            hamburger.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        }

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.contains("active") ? closeMenu() : openMenu();
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });

    /* ------------------ 🖼️ PROJECT IMAGE PREVIEW ------------------ */
    const previewDiv = document.querySelector(".project-preview");
    const previewImg = document.getElementById("projectPreviewImage");
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
    const imgSrc = card.getAttribute("data-preview");
    previewImg.src = imgSrc;
    previewDiv.style.opacity = "1";
});

    card.addEventListener("mouseleave", () => {
    previewDiv.style.opacity = "0";
});

    card.addEventListener("mousemove", (e) => {
    previewDiv.style.left = e.pageX + 15 + "px";
    previewDiv.style.top = e.pageY + 15 + "px";
});
});


    /* ------------------ 📩 CONTACT FORM SUBMIT ------------------ */
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    contactForm.reset();
});
}


    /* ------------------ 🌊 BUTTON RIPPLE EFFECT ------------------ */
    document.querySelectorAll(".btn, .button").forEach(btn => {
    btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    setTimeout(() => ripple.remove(), 600);
});
});


    /* ------------------ 👁️ SCROLL ANIMATION (FADE IN) ------------------ */
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
}
});
});

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

});

