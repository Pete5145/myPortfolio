// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}); 

const hamburger = document.querySelector(".hamburger")
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click",  () => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click",  () => {
        hamburger.classList.remove("active");
        ul.classList.remove("active");
    })
})
