const form = document.getElementById("signup_form");
const getValueByID = (id) => document.getElementById(id).value.trim();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = getValueByID("username");
  const email = getValueByID("email");
  const password = getValueByID("password");
  const confirmPassword = getValueByID("confirm_password");
  const country = getValueByID("country");

  let errors = validateForm(
    userName,
    email,
    password,
    confirmPassword,
    country
  );

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

function validateUserName(username) {
  return /^([a-zA-Z\d_-]){5,}$/.test(username);
}

function validatePassword(password) {
  return /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function validateForm(username, email, password, confirmPassword, country) {
  let errors = {};
  if (!validateEmail(email))
    errors.invalid_email_error = FORM_ERRORS.EMAIL_ERROR;
  if (!validateUserName(username))
    errors.username_length_error = FORM_ERRORS.USERNAME_PASSWORD;
  if (!validatePassword(password))
    errors.password_length_error = FORM_ERRORS.PASSWORD_LENGTH_ERROR;
  if (password !== confirmPassword)
    errors.password_not_match_error = FORM_ERRORS.PASSWORD_NOT_MATCH_ERROR;
  if (!country) {
    errors.country_error = FORM_ERRORS.COUNTRY_ERROR;
  }
  return errors;
}

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark");
}
