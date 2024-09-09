"use strict";

const container = document.querySelector(".container-content");
const toggleIcons = document.querySelectorAll(".toggle-password");
const btnLogin = document.getElementById("btn-go-login");
const regusterBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const languageToggleBtn = document.getElementById("language-toggle-btn");
const signUpBtn = document.querySelector(".signup-link");
const signInBtn = document.querySelector(".signin-link");

// Text Language Element Sign Up
const signUpTitle = document.getElementById("sign-up-title");
const signUpInputName = document.getElementById("signup-input-name");
const signUpInputWhatsApp = document.getElementById("signup-input-whatsapp");
const signUpInputPassword = document.getElementById("signup-password");
const signUpInputConfirmPassword = document.getElementById(
    "signup-confirm-password"
);
const signUpButton = document.getElementById("signup-button");
const toggleSignUpTittle = document.getElementById("toggle-signup-title");
const toggleSignUpDetail = document.getElementById("toggle-signup-detail");
const signUpMobileBtn = document.querySelector(".signup-link");
const signUpMobileTitle = document.querySelector(".signup-link-container span");

// Text Language Element Sign In
const signInTitle = document.getElementById("sign-in-title");
const signInInputPassword = document.getElementById("signin-password");
const signInButton = document.getElementById("signin-button");
const toggleSignInTittle = document.getElementById("toggle-signin-title");
const toggleSignInDetail = document.getElementById("toggle-signin-detail");
const signInMobileBtn = document.querySelector(".signin-link");
const signInMobileTitle = document.querySelector(".signin-link-container span");

regusterBtn.addEventListener("click", function () {
    container.classList.add("active");
});

signUpBtn.addEventListener("click", function () {
    container.classList.add("active");
});

signInBtn.addEventListener("click", function () {
    container.classList.remove("active");
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

// Change Language Script
const translations = {
    en: {
        signIn: {
            title: "Sign In",
            inputPassword: "Password",
            button: "Sign In",
            toggleTittle: "Welcome Back!",
            toggleDetail:
                "Enter your personal details to use all of the sites features",
            toggleButton: "Sign In",
            mobileTitle: "have an account?",
            mobileBtn: "Sign In",
        },
        signUp: {
            title: "Sign Up",
            inputName: "Name",
            inputWhatsApp: "WhatsApp Number",
            inputPassword: "Password",
            inputConfirmPassword: "Confirm Password",
            button: "Sign Up",
            toggleTittle: "Hello, Friend",
            toggleDetail:
                "Register with your personal details to use all of site features",
            toggleButton: "Sign Up",
            mobileTitle: "don't have an account?",
            mobileBtn: "Sign Up",
        },
    },
    id: {
        signIn: {
            title: "Masuk",
            inputPassword: "Kata Sandi",
            button: "Masuk",
            toggleTittle: "Selamat Datang Kembali!",
            toggleDetail:
                "Masukkan detail pribadi Anda untuk menggunakan semua fitur situs",
            toggleButton: "Masuk",
            mobileTitle: "punya akun?",
            mobileBtn: "Masuk",
        },
        signUp: {
            title: "Daftar",
            inputName: "Nama",
            inputWhatsApp: "Nomor WhatsApp",
            inputPassword: "Kata Sandi",
            inputConfirmPassword: "Konfirmasi Kata Sandi",
            button: "Daftar",
            toggleTittle: "Halo, Sobat",
            toggleDetail:
                "Daftar dengan detail pribadi Anda untuk menggunakan semua fitur situs",
            toggleButton: "Daftar",
            mobileTitle: "belum punya akun?",
            mobileBtn: "Daftar",
        },
    },
};

// Function Change Language
function changeLanguage(lang) {
    // Sign Up Language
    signUpTitle.textContent = translations[lang].signUp.title;
    signUpInputName.placeholder = translations[lang].signUp.inputName;
    signUpInputWhatsApp.placeholder = translations[lang].signUp.inputWhatsApp;
    signUpInputPassword.placeholder = translations[lang].signUp.inputPassword;
    signUpInputConfirmPassword.placeholder =
        translations[lang].signUp.inputConfirmPassword;
    signUpButton.textContent = translations[lang].signUp.button;
    toggleSignUpTittle.textContent = translations[lang].signUp.toggleTittle;
    toggleSignUpDetail.textContent = translations[lang].signUp.toggleDetail;
    regusterBtn.textContent = translations[lang].signUp.toggleButton;
    signUpMobileTitle.textContent = translations[lang].signUp.mobileTitle;
    signUpMobileBtn.textContent = translations[lang].signUp.mobileBtn;

    // Sign In Language
    signInTitle.textContent = translations[lang].signIn.title;
    signInInputPassword.placeholder = translations[lang].signIn.inputPassword;
    signInButton.textContent = translations[lang].signIn.button;
    toggleSignInTittle.textContent = translations[lang].signIn.toggleTittle;
    toggleSignInDetail.textContent = translations[lang].signIn.toggleDetail;
    loginBtn.textContent = translations[lang].signIn.toggleButton;
    signInMobileTitle.textContent = translations[lang].signIn.mobileTitle;
    signInMobileBtn.textContent = translations[lang].signIn.mobileBtn;
}

// Change Language Action
languageToggleBtn.addEventListener("click", function () {
    languageToggleBtn.classList.toggle("active");
    if (languageToggleBtn.classList.contains("active")) {
        changeLanguage("id");
    } else {
        changeLanguage("en");
    }
});
