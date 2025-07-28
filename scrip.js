const menuBtn = document.getElementById("menu-button");
const phoneBtn = document.getElementById("phone-button");
const phoneNumHead = document.getElementById("headline-phone");

phoneBtn.addEventListener("click", function() {
    phoneNumHead.classList.toggle("hide")
});

