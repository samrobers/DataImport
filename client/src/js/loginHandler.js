const bcrypt = require("bcrypt");

const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#floatingEmail");
const password = document.querySelector("#floatingPassword");

function handleLogin(event) {
  event.preventDefault();
  const userEmail = email.value();
  const userPass = password.value();

  console.log(userEmail, userPass);
}

console.log("Loaded into the login page");
loginForm.addEventListener("submit", handleLogin());
