// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the hamburger menu and navbar
    const hamburger = document.getElementById("hamburger-menu");
    const navbar = document.querySelector(".navbar");

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener("click", function () {
        // Toggle the active class to show or hide the mobile menu
        navbar.classList.toggle("active");
    });

    // Smooth scroll functionality for internal navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(this.getAttribute("href"));
            // Scroll smoothly to the target section
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
window.addEventListener("scroll", function () {
    let heroSection = document.querySelector(".hero");
    let gallerySection = document.querySelector("#gallery");
    let scrollPosition = window.scrollY;

    // Get the distance of the gallery section from the top
    let galleryOffset = gallerySection.offsetTop;

    // Calculate fade effect
    let fadeAmount = Math.min(scrollPosition / (galleryOffset - 100), 1); // Smooth fade

    // Apply opacity for fade-out effect
    heroSection.style.opacity = 1 - fadeAmount;

    // Add black overlay effect
    heroSection.style.backgroundColor = `rgba(0, 0, 0, ${fadeAmount})`; 
});
// Function to add shake animation effect on hover
function addShakeEffect(elementId) {
    const banner = document.getElementById(elementId);

    // Add shake effect when hovering over the banner
    banner.addEventListener("mouseenter", () => {
        banner.classList.add('shake');
    });

    // Remove shake effect when mouse leaves the banner
    banner.addEventListener("mouseleave", () => {
        banner.classList.remove('shake');
    });
}

// Add shake effect to each banner
addShakeEffect("banner1");
addShakeEffect("banner2");
addShakeEffect("banner3");
addShakeEffect("banner4");
addShakeEffect("banner5");
addShakeEffect("banner6");
// JavaScript to manage the Basket and update count
let basketCount = 0; // Initial basket count

// Function to update basket count in the UI
function updateBasketCount() {
    const basketIcon = document.querySelector('.basket .item-count');
    if (basketIcon) {
        basketIcon.textContent = basketCount; // Update item count in the basket
    }
}

// Add Event Listener to all "Add to Basket" buttons
const addToBasketButtons = document.querySelectorAll('.add-to-basket');
addToBasketButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Increment the basket count
        basketCount++;

        // Update the basket count in the UI
        updateBasketCount();

        // Optionally, show a confirmation message or animation
        alert('Item added to basket!');
    });
});
// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements you want to animate
    const aboutSection = document.querySelector('.about');
    const contactSection = document.querySelector('.contact');
  
    // Function to check if an element is in view
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Add class when element comes into view
    function handleScroll() {
      if (isInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
      }
      if (isInViewport(contactSection)) {
        contactSection.classList.add('visible');
      }
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  
    // Trigger scroll event to handle animations on page load
    handleScroll();
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Handle scroll to add animation
    function handleScroll() {
        const gearItems = document.querySelectorAll('.gear-item');

        gearItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load to ensure correct state
});

// ==========================
// 🎚️ BUDGET SLIDER FUNCTIONALITY
// ==========================
document.getElementById("budget").addEventListener("input", function () {
    // Updates the displayed budget value dynamically as the user slides
    document.getElementById("budget-value").textContent = this.value;
});

// ==========================
// 📩 CONTACT FORM SUBMISSION HANDLER
// ==========================
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission (page reload)

    // ✅ Show success message using GSAP animation
    gsap.to(".form-success", {
        opacity: 1,  // Fully visible
        y: -10,      // Slight upward movement
        duration: 0.5, // Smooth transition over 0.5 seconds
        ease: "power2.out", // Adds a natural easing effect
        display: "block" // Make sure the message is visible
    });

    // ⏳ Hide success message after 3 seconds
    setTimeout(() => {
        gsap.to(".form-success", { 
            opacity: 0,  // Fade out
            y: 10,  // Move downward while fading
            display: "none" // Completely hide
        });

        // 🆕 Reset form fields after successful submission
        document.getElementById("contact-form").reset();
    }, 3000);
});

// ==========================
// 📬 NEWSLETTER SUBSCRIPTION HANDLER
// ==========================
document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // ✅ Animate the subscription confirmation
    gsap.to(".newsletter-success", {
        opacity: 1,  
        scale: 1.1,  // Slight pop effect
        duration: 0.4,
        ease: "power2.out",
        display: "block"
    });

    // ⏳ Hide the confirmation after 2.5 seconds
    setTimeout(() => {
        gsap.to(".newsletter-success", { 
            opacity: 0,
            scale: 1,
            display: "none"
        });

        // 🆕 Reset newsletter input field
        document.getElementById("newsletter-form").reset();
    }, 2500);
});


document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    gsap.to(".success-message", {
        opacity: 1,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
        display: "block"
    });

    setTimeout(() => {
        gsap.to(".success-message", { opacity: 0, y: 10, display: "none" });
        document.getElementById("newsletter-form").reset();
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 200);
    });
});
