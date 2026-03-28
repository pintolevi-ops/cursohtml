const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu")
const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#menu a");
const reveals = document.querySelectorAll(".reveal");

if (menuToggle && menu) {

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
}




function activarMenu() {
    let scrollY = window.pageYOffset;





    section.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        const link = document.querySelector(`#menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            link.classList.remove("active-link");
          }
        }

    });
}

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activarMenu); 
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
