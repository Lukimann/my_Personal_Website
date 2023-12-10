const navigationMenu = 
document.getElementById('nav-menu');

const h2 = document.createElement("h2");

h2.textContent = "...";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});