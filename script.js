const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const toggleIcons = document.querySelectorAll(".toggle-password");
const signupLink = document.getElementById("signup-link");
const signinLink = document.getElementById("signin-link");
const btnlogin = document.getElementById("btn-Go-login");

// Mengaktifkan mode pendaftaran
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

// Mengaktifkan mode masuk
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Menambahkan event listener untuk setiap ikon mata
toggleIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const target = this.dataset.target; // Ambil nilai data-target
    const passwordField = document.getElementById(target); // Temukan input password terkait

    // Periksa tipe input saat ini dan ubah antara 'password' dan 'text'
    if (passwordField.type === "password") {
      passwordField.type = "text";
      this.src = "eye-open.png"; // Ganti ikon menjadi 'eye-open'
    } else {
      passwordField.type = "password";
      this.src = "eye-close.png"; // Ganti ikon menjadi 'eye-close'
    }
  });
});

signupLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  container.classList.add("active"); // Add 'active' class to switch to sign-up form
});

signinLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  container.classList.remove("active"); // Add 'active' class to switch to sign-up form
});

btnlogin.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  container.classList.remove("active"); // Add 'active' class to switch to sign-up form
});
