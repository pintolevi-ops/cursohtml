const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu")

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active")
        }
    });
} 
const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    let current = "";
    section.forEach(section => {
        const sectionTop = section.offsetTop -120;
        const sectionHeight = section.offsetHeight;

        if (scroll >= sectionTop && scrollY < sectionTop + sectionHeight) {

        }
            current = section.getAttribute("id");

});
navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
        link.classList.add("active-link");
    }
});
});


