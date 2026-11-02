
// ==========================================
// 1. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}


// ==========================================
// 2. CLOSE MOBILE MENU
// ==========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});


// ==========================================
// 3. PROJECT IMAGE GALLERY
// ==========================================

const galleries = document.querySelectorAll(".project-gallery");

galleries.forEach(function (gallery) {
    const mainImage = gallery.querySelector(".gallery-main img");
    const thumbnails = gallery.querySelectorAll(".gallery-thumb");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            const imageSource = thumbnail.dataset.image;
            const imageAlt = thumbnail.dataset.alt;

            if (mainImage) {
                mainImage.src = imageSource;
                mainImage.alt = imageAlt;
            }

            thumbnails.forEach(function (item) {
                item.classList.remove("active");
            });

            thumbnail.classList.add("active");
        });
    });
});


// ==========================================
// 4. DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀";
        } else {
            themeToggle.textContent = "☾";
        }
    });
}


// ==========================================
// 5. PROJECT MODAL
// ==========================================

const projectButtons = document.querySelectorAll(".project-button");

const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalTech = document.getElementById("modal-tech");
const modalLinks = document.getElementById("modal-links");


// Project data

const projectData = {
    webkasir: {
        title: "WebKasirGR",

        description:
            "A web-based cashier application designed to help merchants manage menus, customer orders, and order queues through a simple and responsive interface.",

        features: [
            "Merchant registration and login",
            "Menu management",
            "Customer order management",
            "Order queue management",
            "Responsive interface"
        ],

        technologies: [
            "Django",
            "Python",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    finance: {
        title: "Finance Web",

        description:
            "A personal finance web application designed to help users record and manage their income and expenses through a simple web interface.",

        features: [
            "Income recording",
            "Expense recording",
            "Financial transaction management",
            "Simple financial overview",
            "Responsive interface"
        ],

        technologies: [
            "Django",
            "Python",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    academic: {
        title: "Academic Project",

        description:
            "An academic web application developed as part of a programming project.",

        features: [
            "Web-based application",
            "User interface development",
            "Basic web functionality"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }
};


// Open project modal

projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const projectName = button.dataset.project;
        const project = projectData[projectName];

        if (!project || !projectModal) {
            return;
        }

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        // Features
        modalFeatures.innerHTML = "";

        const featuresTitle = document.createElement("h3");
        featuresTitle.textContent = "Key Features";

        modalFeatures.appendChild(featuresTitle);

        const featureList = document.createElement("ul");

        project.features.forEach(function (feature) {
            const listItem = document.createElement("li");
            listItem.textContent = feature;
            featureList.appendChild(listItem);
        });

        modalFeatures.appendChild(featureList);

        // Technologies
        modalTech.innerHTML = "";

        const techTitle = document.createElement("h3");
        techTitle.textContent = "Technologies";

        modalTech.appendChild(techTitle);

        const techList = document.createElement("div");
        techList.classList.add("modal-tech-list");

        project.technologies.forEach(function (technology) {
            const techItem = document.createElement("span");
            techItem.textContent = technology;
            techList.appendChild(techItem);
        });

        modalTech.appendChild(techList);

        // Project links
        modalLinks.innerHTML = "";

        // Show modal
        projectModal.classList.add("active");
        projectModal.setAttribute("aria-hidden", "false");
    });
});


// ==========================================
// 6. CLOSE PROJECT MODAL
// ==========================================

if (modalClose && projectModal) {
    modalClose.addEventListener("click", function () {
        projectModal.classList.remove("active");
        projectModal.setAttribute("aria-hidden", "true");
    });

    // Click outside modal
    projectModal.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            projectModal.classList.remove("active");
            projectModal.setAttribute("aria-hidden", "true");
        }
    });

    // Press Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            projectModal.classList.remove("active");
            projectModal.setAttribute("aria-hidden", "true");
        }
    });
}


// ==========================================
// 7. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const topicInput = document.getElementById("topic");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const topic = topicInput ? topicInput.value : "general";
        const message = messageInput.value.trim();

        if (
            name === "" ||
            email === "" ||
            topic === "" ||
            message === ""
        ) {
            if (formMessage) {
                formMessage.textContent =
                    "Please fill in all fields before sending.";
            }
            return;
        }

        if (formMessage) {
            formMessage.textContent =
                "Thank you! Your message has been validated successfully.";
        }

        contactForm.reset();
    });

    contactForm.addEventListener("reset", function () {
        if (formMessage) {
            formMessage.textContent = "";
        }
    });
}


// ==========================================
// 8. PORTFOLIO INTERACTIONS
// ==========================================

// Typing animation

const typingText = document.getElementById("typing-text");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (typingText) {
    const roles = [
        "Informatics Student",
        "Web Developer",
        "Software Engineering Enthusiast",
        "Cybersecurity Learner"
    ];

    if (prefersReducedMotion) {
        typingText.textContent = roles[0];
    } else {
        let roleIndex = 0;
        let characterIndex = roles[0].length;
        let deleting = true;

        function typeRole() {
            const currentRole = roles[roleIndex];

            if (deleting) {
                characterIndex--;

                typingText.textContent =
                    currentRole.substring(0, characterIndex);

                if (characterIndex <= 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;

                    setTimeout(typeRole, 350);
                    return;
                }

                setTimeout(typeRole, 42);

            } else {
                const nextRole = roles[roleIndex];

                characterIndex++;

                typingText.textContent =
                    nextRole.substring(0, characterIndex);

                if (characterIndex >= nextRole.length) {
                    deleting = true;

                    setTimeout(typeRole, 1600);
                    return;
                }

                setTimeout(typeRole, 78);
            }
        }

        setTimeout(typeRole, 1800);
    }
}


// ==========================================
// 9. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .profile-embed, " +
    ".skill-category, .project-card, .project-summary, .timeline-item, " +
    ".contact-content"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {
    revealElements.forEach(function (element) {
        element.classList.add("is-visible");
    });
}


// ==========================================
// 10. SCROLL PROGRESS
// 11. BACK TO TOP
// 12. ACTIVE NAVIGATION
// ==========================================

const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");

const pageSections = document.querySelectorAll("main section[id]");

function updateScrollUI() {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    // Scroll progress bar
    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

    // Back to top visibility
    if (backToTop) {
        backToTop.classList.toggle(
            "visible",
            window.scrollY > 450
        );
    }

    // Active navigation
    let currentSection = "home";

    pageSections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}


// Update when scrolling

window.addEventListener("scroll", updateScrollUI, {
    passive: true
});

window.addEventListener("resize", updateScrollUI);

updateScrollUI();


// Back to top button

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });
    });
}
