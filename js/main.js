const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

// var typed = new Typed(".element", {
//   strings: ["Aprenda programação voltada para blockchain"],
//   typeSpeed: 60,
//   loop: true,
// });
var typed3 = new Typed(".element", {
  strings: [" criptomoedas", " NFT", " Blockchain"],
  typeSpeed: 50,
  backSpeed: 0,
  smartBackspace: true,
  // this is a default
});
