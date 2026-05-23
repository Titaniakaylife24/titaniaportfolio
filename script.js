/* =========================
   TYPING EFFECT
========================= */

if(document.querySelector("#typing")){

    new Typed("#typing", {

        strings: [

            "UI/UX Designer",
            "Web Developer",
            "Frontend Enthusiast",
            "Creative Thinker"

        ],

        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1000,
        loop: true

    });

}


// ======================================
// HEADER BLUR WHEN SCROLL
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});


// ======================================
// SMOOTH SCROLL
// ======================================

navLinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target =
      document.querySelector(
        link.getAttribute("href")
      );

    if (target) {

      window.scrollTo({

        top:
          target.offsetTop - 90,

        behavior: "smooth"

      });

    }

  });

});


// ======================================
// REVEAL ANIMATION
// ======================================

const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll() {

  const triggerBottom =
    window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {

      element.classList.add(
        "active-reveal"
      );

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// ======================================
// FLOATING IMAGE EFFECT
// ======================================

const heroImage =
document.querySelector(
  ".hero-image-wrapper"
);

window.addEventListener("mousemove", (e) => {

  if (!heroImage) return;

  const moveX =
    (window.innerWidth / 2 - e.pageX) / 45;

  const moveY =
    (window.innerHeight / 2 - e.pageY) / 45;

  heroImage.style.transform =
    `translate(${moveX}px, ${moveY}px)`;

});


// ======================================
// BUTTON HOVER EFFECT
// ======================================

const buttons =
document.querySelectorAll(
  ".primary-btn, .secondary-btn"
);

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.transform =
        "translateY(-4px)";

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translateY(0px)";

    }
  );

});


// ======================================
// PROJECT IMAGE HOVER
// ======================================

const projectImages =
document.querySelectorAll(
  ".project-image img"
);

projectImages.forEach((image) => {

  image.addEventListener(
    "mouseenter",
    () => {

      image.style.transform =
        "scale(1.04)";

    }
  );

  image.addEventListener(
    "mouseleave",
    () => {

      image.style.transform =
        "scale(1)";

    }
  );

});

// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progressBar =
document.createElement("div");

progressBar.classList.add(
  "scroll-progress"
);

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop =
    window.scrollY;

  const docHeight =
    document.body.scrollHeight -
    window.innerHeight;

  const progress =
    (scrollTop / docHeight) * 100;

  progressBar.style.width =
    `${progress}%`;

});


// ======================================
// TECH STACK HOVER
// ======================================

const techItems =
document.querySelectorAll(
  ".tech-stack span"
);

techItems.forEach((item) => {

  item.addEventListener(
    "mouseenter",
    () => {

      item.style.transform =
        "translateY(-3px)";

    }
  );

  item.addEventListener(
    "mouseleave",
    () => {

      item.style.transform =
        "translateY(0px)";

    }
  );

});


// ======================================
// SOCIAL ICON HOVER
// ======================================

const socialIcons =
document.querySelectorAll(
  ".social-links a"
);

socialIcons.forEach((icon) => {

  icon.addEventListener(
    "mouseenter",
    () => {

      icon.style.transform =
        "translateY(-4px) scale(1.05)";

    }
  );

  icon.addEventListener(
    "mouseleave",
    () => {

      icon.style.transform =
        "translateY(0px) scale(1)";

    }
  );

});

/* =========================
   PROJECT MODAL
========================= */

document.addEventListener("click", function(e){

    if(e.target.classList.contains("detail-btn")){

        const modal =
        document.getElementById("projectModal");

        const title =
        document.getElementById("modalTitle");

        const description =
        document.getElementById("modalDescription");

        const tech =
        document.getElementById("modalTech");

        const project =
        e.target.dataset.project;

        const projects = {

    flomartmobile: {

    title: "FLOMART Mobile App",

    subtitle:
    "Mobile Plant Marketplace",

    description:
    "A mobile-based plant marketplace application designed to provide intuitive shopping experiences, detailed plant catalogs, and modern mobile interactions for users and sellers.",

    features: [

        "Mobile-first shopping experience",

        "Interactive plant catalog",

        "Responsive Flutter interface",

        "Modern UI/UX implementation",

        "Firebase integration",

        "Real-time mobile interactions"

    ],

    tech: [
        "Flutter",
        "Firebase",
        "Figma"
    ],

    github:
    "https://github.com/Titaniakaylife24/flomart-mobile.git"

},

    flomartweb: {

    title: "FLOMART Web App",

    subtitle:
    "Trust-Based Plant E-Commerce Platform",

    description:
    "A modern trust-based e-commerce platform focused on buying and selling plants with detailed product information, secure transactions, and seamless user experiences for plant enthusiasts and sellers.",

    features: [

        "Plant e-commerce system",

        "Detailed plant information",

        "Trust-based transaction flow",

        "Authentication & authorization",

        "Responsive modern interface",

        "Admin & product management",

        "Integrated MySQL database",

        "Secure Laravel backend"

    ],

    tech: [
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "JavaScript"
    ],

    github:
    "https://github.com/Titaniakaylife24/FLOMART-ets.git"

},

    jwmarriot: {

    title: "JW Marriott System",

    subtitle:
    "Desktop Reservation System",

    description:
    "A desktop-based reservation management application developed for hotel administration workflows including customer data management and reservation tracking.",

    features: [

        "Reservation management system",

        "Customer data handling",

        "CRUD implementation",

        "Desktop-based administration",

        "MySQL database integration",

        "Java GUI interface"

    ],

    tech: [
        "Java",
        "MySQL",
        "NetBeans"
    ],

    github:
    "https://github.com/Titaniakaylife24/JW-Marriot.git"

},

    kokinaja: {

        title: "KOK.IN AJA",

        subtitle:
        "UI/UX Mobile Design",

        description:
        "A mobile application prototype focused on accessibility, usability, and modern digital interaction. Designed with user-centered flows and clean visual hierarchy.",

        features: [

            "Modern mobile UI design",

            "Interactive user flow",

            "Wireframe & prototyping",

            "Clean visual hierarchy",

            "User-centered experience",

            "High-fidelity prototype"

        ],

        tech: [
            "Figma",
            "Prototype",
            "Wireframe"
        ],

        prototype:
        "https://www.figma.com/design/2ygeSSZN2QS7oXkyHI7Q4z/KOK.IN-AJA"

    },
    takakurakit: {

    title: "TakakuraKit.id",

    subtitle:
    "Sustainable Compost Marketplace Platform",

    description:
    "A sustainable digital platform designed to support the buying and selling of composting tools and materials using the Takakura method. The platform combines eco-friendly education, modern interfaces, and user-centered experiences to encourage sustainable waste management.",

    features: [

        "Compost marketplace platform",

        "Takakura composting education",

        "Modern responsive interface",

        "Interactive product showcase",

        "Eco-friendly digital experience",

        "User-centered UI/UX design",

        "High-fidelity web prototype"

    ],

    tech: [
        "Figma",
        "Prototype",
        "UI Design",
        "UX Research"
    ],

    prototype:
    "https://www.figma.com/proto/kudJYdY3MoGceI4gZfTTaO/TakakuraKit.id?page-id=0%3A1&node-id=2-2&viewport=-8543%2C-12177%2C0.51&t=eLNB44dx2LDWRn1N-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1"

},

shuttleclick: {

    title: "ShuttleClick",

    subtitle:
    "Badminton Court Rental Desktop Application",

    description:
    "A desktop-based badminton court rental management application developed for Sony Dwi Kuncoro Badminton Hall. The system streamlines reservation scheduling, booking management, and transaction handling with a clean and modern desktop interface.",

    features: [

        "Court reservation management",

        "Booking & scheduling system",

        "Transaction management",

        "Desktop-based administration",

        "Clean dashboard interface",

        "Integrated MySQL database",

        "Windows Forms application"

    ],

    tech: [
        "VB .NET",
        "Windows Form",
        "MySQL",
        "Figma",
        "Visual Studio"
    ]

}

};

        const data = projects[project];

        title.innerHTML = `
    ${data.title}
    <span>${data.subtitle}</span>
`;

description.innerHTML = `
    <p>${data.description}</p>

    <ul>
        ${data.features.map(item =>
            `<li>${item}</li>`
        ).join("")}
    </ul>
`;

        tech.innerHTML = "";

        if(data.github){

    tech.innerHTML += `
        <a href="${data.github}"
        target="_blank"
        class="modal-link">
        GitHub Repository
        </a>
    `;

}

if(data.prototype){

    tech.innerHTML += `
        <a href="${data.prototype}"
        target="_blank"
        class="modal-link">
        View Prototype
        </a>
    `;

}

        data.tech.forEach(item => {

            tech.innerHTML +=
            `<span>${item}</span>`;

        });

        modal.classList.add("show");

    }

});

/* CLOSE MODAL */

document.querySelector(".close-modal")
.addEventListener("click", function(){

    document.getElementById("projectModal")
    .classList.remove("show");

});

/* CLOSE OUTSIDE */

window.addEventListener("click", function(e){

    const modal =
    document.getElementById("projectModal");

    if(e.target === modal){

        modal.classList.remove("show");

    }

});

