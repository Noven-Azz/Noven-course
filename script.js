// login form
const login = document.querySelector("#login-btn");
const hero = document.querySelector("#hero");
const closeLogin = document.querySelector("#close-btn-login");

document.querySelector("#login-btn").onclick = (e) => {
  document.querySelector("#login-bg").style.display = "flex";
  document.querySelector("#login-bg").style.overflow = "hidden";
};

closeLogin.onclick = (e) => {
  document.querySelector("#login-bg").style.display = "none";
};

// hilangkan login form
const formLogin = document.querySelector("#login-bg");
const loginContainer = document.querySelector(".form-container");

document.addEventListener("click", function (e) {
  if (!login.contains(e.target) && !loginContainer.contains(e.target)) {
    formLogin.style.display = "none";
  }
});

// register form
const register = document.querySelector("#register-btn");
const register2 = document.querySelector("#register-btn2");
const registerBg = document.querySelector("#register-bg");
const regContainer = document.querySelector("#register");
const closeRegister = document.querySelector("#close-btn-register");

register.onclick = (e) => {
  registerBg.style.display = "flex";
};

register2.onclick = (e) => {
  registerBg.style.display = "flex";
};

closeRegister.onclick = (e) => {
  registerBg.style.display = "none";
};

// hilangkan register form
document.addEventListener("click", function (e) {
  if (
    !register.contains(e.target) &&
    !regContainer.contains(e.target) &&
    !register2.contains(e.target) &&
    !regContainer.contains(e.target)
  ) {
    registerBg.style.display = "none";
  }
});

// document.addEventListener("click", function (e) {
//   if (!register2.contains(e.target) && !regContainer.contains(e.target)) {
//     registerBg.style.display = "none";
//   }
// });

// hamburger menu
const hamburgerBtn = document.querySelector("#hamburger-menu");
const hamburgerNav = document.querySelector(".hamburger");

hamburgerBtn.onclick = (e) => {
  hamburgerNav.classList.toggle("active");
  hamburgerNav.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburgerBtn.contains(e.target) && !hamburgerNav.contains(e.target)) {
    hamburgerNav.style.right = "100%";
  }
});

// program nav
const programDown = document.querySelector(".program-down");
const programNav = document.querySelector(".program-nav");

programDown.onclick = (e) => {
  programNav.classList.toggle("active");
  programNav.focus();
  e.preventDefault();
};
