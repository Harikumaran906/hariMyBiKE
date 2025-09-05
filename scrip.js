const menuBtn = document.getElementById("menu-button");
const phoneBtn = document.getElementById("phone-button");
const phoneNumHead = document.getElementById("headline-phone");

phoneBtn.addEventListener("click", function() {
    phoneNumHead.classList.toggle("hide")
});

// Menu panel toggle
const menuPanel = document.querySelector(".menu-panel");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function() {
  menuPanel.classList.add("is-open");
});

closeBtn.addEventListener("click", function(e) {
  e.preventDefault();
  menuPanel.classList.remove("is-open");
});

document.querySelectorAll('.nav a[role="menuitem"]').forEach(link => {
  link.addEventListener('click', () => {
    menuPanel.classList.remove('is-open');
  });
});

window.addEventListener('hashchange', () => {
  menuPanel.classList.remove('is-open');
});
