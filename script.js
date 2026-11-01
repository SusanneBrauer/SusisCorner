const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open-nav");
    const isOpen = nav.classList.contains("open-nav");
    menuButton.setAttribute("aria-expanded", String(isOpen));
})