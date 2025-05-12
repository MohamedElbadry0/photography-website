document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navbar on Mobile
    const hamburger = document.getElementById("hamburger-menu");
    const navbar = document.querySelector(".navbar");
    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero Fade Scroll Effect
    const heroSection = document.querySelector(".hero");
    const gallerySection = document.querySelector("#gallery");

    window.addEventListener("scroll", function () {
        if (!heroSection || !gallerySection) return;
        let scrollY = window.scrollY;
        let offset = gallerySection.offsetTop;
        let fade = Math.min(scrollY / (offset - 100), 1);
        heroSection.style.opacity = 1 - fade;
        heroSection.style.backgroundColor = `rgba(0, 0, 0, ${fade})`;
    });

    // Shake Effect for Banners
    ["banner1", "banner2", "banner3", "banner4", "banner5", "banner6"].forEach(id => {
        const banner = document.getElementById(id);
        if (banner) {
            banner.addEventListener("mouseenter", () => banner.classList.add("shake"));
            banner.addEventListener("mouseleave", () => banner.classList.remove("shake"));
        }
    });

    // Basket Add-to-Cart Count Logic
    let basketCount = 0;
    const basketDisplay = document.querySelector('.basket .item-count');

    document.querySelectorAll('.add-to-basket').forEach(button => {
        button.addEventListener('click', () => {
            basketCount++;
            if (basketDisplay) basketDisplay.textContent = basketCount;
        });
    });

    // Animate About and Contact on Scroll
    const aboutSection = document.querySelector('.about');
    const contactSection = document.querySelector('.contact-section');
    const gearItems = document.querySelectorAll('.gear-item');

    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScrollAnimations = () => {
        if (aboutSection && isInViewport(aboutSection)) aboutSection.classList.add('visible');
        if (contactSection && isInViewport(contactSection)) contactSection.classList.add('visible');

        gearItems.forEach(item => {
            if (isInViewport(item)) item.classList.add('visible');
        });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Call once on load

    // Portfolio Fade In
    document.querySelectorAll(".portfolio-item").forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, i * 200);
    });

    // Services Fade In
    document.querySelectorAll(".service-item").forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, i * 200);
    });

    // Budget Slider
    const budgetSlider = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");
    if (budgetSlider && budgetValue) {
        budgetSlider.addEventListener("input", () => {
            budgetValue.textContent = budgetSlider.value;
        });
    }

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            gsap.to(".form-success", {
                opacity: 1,
                y: -10,
                duration: 0.5,
                ease: "power2.out",
                display: "block"
            });
            setTimeout(() => {
                gsap.to(".form-success", { opacity: 0, y: 10, display: "none" });
                contactForm.reset();
            }, 3000);
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            gsap.to(".success-message", {
                opacity: 1,
                y: -10,
                duration: 0.5,
                ease: "power2.out",
                display: "block"
            });
            setTimeout(() => {
                gsap.to(".success-message", { opacity: 0, y: 10, display: "none" });
                newsletterForm.reset();
            }, 3000);
        });
    }
});
