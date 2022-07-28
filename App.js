
// --------------------------------------------\-\-\- Login Form -/-/-/-------------------------------------------

let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
// --------------------------------------------\-\-\- Sign-Up Form -/-/-/-------------------------------------------
let signupbtn = document.querySelector("#signup-btn");
let signupForm = document.querySelector(".sign-up-container");
let formsClose = document.querySelector("#form-close");


signupbtn.addEventListener("click", () => {
  signupForm.classList.add("active");
});
formsClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
  });
  // ----------------------------\-\-\- On scrolling this Action will be performed -/-/-/---------------------------

window.onscroll = () =>{
  loginForm.classList.remove('active');
  formClose.classList.remove('active');
  signupForm.classList.remove('active');
  formsClose.classList.remove('active');
}