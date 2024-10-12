// Script for navbar toggler
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
  
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
});

// Flip Card Animation
const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
    });

    card.addEventListener("mouseout", () => {
        card.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
    });
});

// Handle scrolling animations or lazy loading for skills section
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('.skills-section');
    const skillBars = document.querySelectorAll('.progress-bar');

    function showSkillsProgress() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            skillBars.forEach((bar) => {
                const value = bar.getAttribute('aria-valuenow');
                bar.style.width = `${value}%`;
            });
        }
    }

    window.addEventListener('scroll', showSkillsProgress);

    // Adding toggle effect to the experiences section for mobile view
    const experiences = document.querySelectorAll('.experience-content h4');

    experiences.forEach((experience) => {
        experience.addEventListener('click', () => {
            const details = experience.nextElementSibling;
            const isExpanded = details.style.display === "block";

            // Toggle visibility
            details.style.display = isExpanded ? "none" : "block";
        });
    });
});

// Optional: Toggle display of sections based on window width or screen resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width < 768) {
        document.querySelectorAll('.experience-content ul').forEach((ul) => {
            ul.style.display = "none";  // Initially hide lists for mobile
        });
    } else {
        document.querySelectorAll('.experience-content ul').forEach((ul) => {
            ul.style.display = "block"; // Show lists for larger screens
        });
    }
});

// Tab navigation for the project section
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.nav-link');

    tabButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Get the target content section based on the data-bs-target attribute
            const targetTab = document.querySelector(event.target.getAttribute('data-bs-target'));

            // Remove 'active' and 'show' class from all tabs
            document.querySelectorAll('.tab-pane').forEach((tabContent) => {
                tabContent.classList.remove('active', 'show');
            });

            // Add 'active' and 'show' class to the selected tab content
            targetTab.classList.add('active', 'show');
        });
    });
});
