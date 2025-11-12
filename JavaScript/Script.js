    document.addEventListener('DOMContentLoaded', () => {
    const previewDiv = document.querySelector('.project-preview');
    const previewImg = document.getElementById('projectPreviewImage');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
    const imgSource = card.getAttribute('data-preview-img');

    // Only show and update if an image source exists
    if (imgSource) {
    previewImg.src = imgSource;
    previewDiv.style.opacity = '1';
    previewDiv.style.transform = 'translate(-50%, -50%) scale(1)';
} else {
    // Hide if no image is defined for this card
    previewDiv.style.opacity = '0';
    previewDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
}
});

    card.addEventListener('mouseleave', () => {
    // Hide the preview when the mouse leaves the card
    previewDiv.style.opacity = '0';
    previewDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
});
});
});

    // Form submission handler
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('.submit-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.pointerEvents = 'none';

    // Simulate form submission
    setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.style.pointerEvents = '';
    this.reset();
}, 2000);
}, 1500);
});

    // Add focus animations
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
});
});


    document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("yourName").value;
    const email = document.getElementById("yourEmail").value;
    const subject = document.getElementById("yourSubject").value;
    const message = document.getElementById("yourMessage").value;

    // Your WhatsApp number (Sri Lanka format)
    const whatsappNumber = "94775482007"; // 94 + your number

    // Format message for WhatsApp
    const whatsappMessage =
    `*New Contact Form Submission*%0A%0A` +
    `*Name:* ${encodeURIComponent(name)}%0A` +
    `*Email:* ${encodeURIComponent(email)}%0A` +
    `*Subject:* ${encodeURIComponent(subject)}%0A%0A` +
    `*Message:*%0A${encodeURIComponent(message)}`;

    // Create WhatsApp chat link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
});

    document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("contactForm").reset();
});

// Skills Animation Script
    const skillItems = document.querySelectorAll('.skill-item');

    const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const item = entry.target;
            const percentage = item.dataset.percentage;
            const targetPercentage = item.dataset.target || percentage;
            const circle = item.querySelector('.circle-progress');

            // No need for percentageText since it's removed

            const circumference = 2 * Math.PI * 70;

            const targetOffset = circumference - (targetPercentage / 100 * circumference);
            circle.style.setProperty('--dash-offset', targetOffset);

            item.classList.add('animated');

            if (item.dataset.target) {
                setTimeout(() => {
                    item.classList.add('mistake');
                    // No percentage text update needed here
                }, 2000);
            }

            skillObserver.unobserve(item);
        }
    });
}, { threshold: 0.5 });

    skillItems.forEach(item => skillObserver.observe(item));

    // Click ripple effect
    document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('click-ripple');
    ripple.style.left = (e.clientX - 10) + 'px';
    ripple.style.top = (e.clientY - 10) + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
});


