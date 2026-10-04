// ==========================================
// 1. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ==========================================
// 2. CLOSE MOBILE MENU
// ==========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// ==========================================
// PROJECT IMAGE GALLERY
// ==========================================

const galleries = document.querySelectorAll(".project-gallery");

galleries.forEach(function (gallery) {

    const mainImage = gallery.querySelector(".gallery-main img");
    const thumbnails = gallery.querySelectorAll(".gallery-thumb");

    thumbnails.forEach(function (thumbnail) {

        thumbnail.addEventListener("click", function () {

            const imageSource = thumbnail.dataset.image;
            const imageAlt = thumbnail.dataset.alt;

            // Ganti gambar utama
            mainImage.src = imageSource;
            mainImage.alt = imageAlt;

            // Hapus active dari semua thumbnail
            thumbnails.forEach(function (item) {
                item.classList.remove("active");
            });

            // Tandai thumbnail yang dipilih
            thumbnail.classList.add("active");

        });

    });

});


// ==========================================
// 3. DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }
});


// ==========================================
// 4. PROJECT MODAL
// ==========================================

const projectButtons = document.querySelectorAll(".project-button");

const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalTech = document.getElementById("modal-tech");
const modalLinks = document.getElementById("modal-links");


// Data project

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


// Ketika tombol View Details diklik

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName = button.dataset.project;

        const project = projectData[projectName];

        if (!project) {
            return;
        }


        // Judul project
        modalTitle.textContent = project.title;


        // Deskripsi project
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


        // Untuk sementara link belum digunakan
        modalLinks.innerHTML = "";


        // Tampilkan modal
        projectModal.classList.add("active");

        projectModal.setAttribute("aria-hidden", "false");

    });

});


// ==========================================
// 5. CLOSE PROJECT MODAL
// ==========================================

modalClose.addEventListener("click", function () {

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

});


// Klik di luar modal

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.classList.remove("active");

        projectModal.setAttribute("aria-hidden", "true");

    }

});


// Tekan Escape

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        projectModal.classList.remove("active");

        projectModal.setAttribute("aria-hidden", "true");

    }

});


// ==========================================
// 6. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields before sending.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your message has been validated successfully.";


    contactForm.reset();

});

