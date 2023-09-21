const form = document.getElementById("signup_form");
const getValueByID = (id) => document.getElementById(id).value.trim();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userName = getValueByID("username");
  let email = getValueByID("email");
  let password = getValueByID("password");
  let confirmPassword = getValueByID("confirm_password");
  let errors = validateForm(userName, email, password, confirmPassword);
  if (Object.keys(errors).length == 0) {
    this.reset();
    window.location.href = "./success.html";
  } else {
    const errorClasses = document.getElementsByClassName("error_message");
    let errorElm = document.getElementById("errors");
    let errorContainer = document.getElementById("error_container");
    errorElm.innerHTML = "";
    for (const currentClass of errorClasses) {
      currentClass.textContent = "";
    }
    for (const [key, value] of Object.entries(errors)) {
      const element = document.getElementById(key);
      element.textContent = value;
      element.classList.remove("hide");
      element.classList.add("show", "red");

      const listItem = document.createElement("li");
      listItem.textContent = value;
      errorElm.appendChild(listItem);
      errorContainer.classList.remove("hide");
      errorContainer.classList.add("show", "red");
    }
  }
});

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validateForm(username, email, password, confirmPassword) {
  let errors = {};
  if (!validateEmail(email)) errors.invalid_email_error = "Email is not valid";
  if (username.length < 5)
    errors.username_length_error = "Username should be atleast of 5 characters";
  if (password.length < 8)
    errors.password_length_error =
      "Password length should be at least 8 characters";
  if (password !== confirmPassword)
    errors.password_not_match_error =
      "Passwords do not match. Please try again.";
  return errors;
}

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark");
}
