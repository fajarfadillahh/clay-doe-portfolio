// ===== SHOW AND HIDDEN MENU =====
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// ===== REMOVE MENU MOBILE VERSION =====
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ===== SCROLL SECTIONS ACTIVE LINK =====
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ===== CHANGE BACKGROUND HEADER =====
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 250) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ===== SHOW SCROLL TOP =====
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// ===== MIXITUP FILTER PORTFOLIO =====
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 300,
  },
});

// Link active portfolio
const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((n) => n.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}
linkPortfolio.forEach((n) => n.addEventListener("click", activePortfolio));

// ===== SWIPPER CAROUSEL - TESTIMONIAL SECTION =====
const mySwiper = new Swiper(".testimonial__container", {
  spaceBetween: 16,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ===== GSAP ANIMATIONS =====
// -- navbar animation --
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});

// -- home animation --
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 30 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});
