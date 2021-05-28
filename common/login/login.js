const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginExitBtn = document.getElementById("loginExitBtn");
const signUpExitBtn = document.getElementById("signUpExitBtn");

const loginWrapper = document.getElementsByClassName("loginWrapper");
const signupWrapper = document.getElementsByClassName("signupWrapper");

loginBtn.onclick = () => {
  loginWrapper[0].classList.remove("hidden");
  return false;
};

signupBtn.onclick = () => {
  signupWrapper[0].classList.remove("hidden");
  return false;
};

loginExitBtn.onclick = () => {
  loginWrapper[0].classList.add("hidden");
  return false;
};

signUpExitBtn.onclick = () => {
  signupWrapper[0].classList.add("hidden");
  return false;
};
