"use strict";

const container = document.querySelector(".container-content");
const toggleIcons = document.querySelectorAll(".toggle-password");
const btnLogin = document.getElementById("btn-go-login");
const regusterBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const languageToggleBtn = document.getElementById("language-toggle-btn");

regusterBtn.addEventListener("click", function () {
    container.classList.add("active");
});

loginBtn.addEventListener("click", function () {
    container.classList.remove("active");
});

// Menambahkan event listener untuk setiap ikon mata
toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        const target = this.dataset.target; // Ambil nilai data-target
        console.log(target);
        const passwordField = document.getElementById(target); // Temukan input password terkait

        // Periksa tipe input saat ini dan ubah antara 'password' dan 'text'
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.src = "assets/images/eye-open.png"; // Ganti ikon menjadi 'eye-open'
        } else {
            passwordField.type = "password";
            this.src = "assets/images/eye-close.png"; // Ganti ikon menjadi 'eye-close'
        }
    });
});

languageToggleBtn.addEventListener("click", function () {
    languageToggleBtn.classList.toggle("active");
});
