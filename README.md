# Signup Form Validations and Theme Toggle

This project involves implementing asynchronous form validations using promises, as well as incorporating debounce technique for a smoother user experience. Additionally, I have maintain both light and dark themes for the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Validation Details](#validation-details)
- [Debounce](#debounce)
- [Theme Toggle](#theme-toggle)

## Prerequisites

- Basic knowledge of JavaScript, HTML, and CSS.
- A code editor (e.g., Visual Studio Code).
- Node.js and npm (for setting up a development environment).

**Validation Details**

* The Signup Form includes fields for username, email,password and confirm password.
* Asynchronous validation is performed for the email field to check for its availability.
* Validation errors are displayed in real-time as the user fills out the form.
* Promises are used to handle asynchronous validation.
* Debounce technique is applied to reduce unnecessary network requests and optimize the user experience.

**Debounce**

* Debounce delays the execution of a function until a certain time has passed since the last trigger.

**Theme Toggle**

* The application provides both light and dark themes.
* Users can switch between themes using a theme toggle button.
* CSS variables are used to manage theme-specific styles.