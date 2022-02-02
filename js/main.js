const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});
