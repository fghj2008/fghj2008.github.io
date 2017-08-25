// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");
var area1_1 = document.getElementById("area1_1");
var area1_2 = document.getElementById("area1_2");
var footer = document.getElementById("footer");

//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');

  area1_1.classList.toggle('z-index-hidden');
  area1_2.classList.toggle('z-index-hidden');
  footer.classList.toggle('#nav-1');
}