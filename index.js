//step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //  get the email adress inside the email input field
  // always remember to use .value to get text from an input field.
  const emeilField = document.getElementById("user-email");
  const usrEmail = emeilField.value;

  // Step:03 get password inside the password input field.
  const passworField = document.getElementById("user-password");
  const userPass = passworField.value;

  //   Danger: do not use this system in client side.
  // varify email or password
  if (usrEmail === "mdabircse4873@gmail.com" && userPass === "20252006") {
    window.location.href = "home.html";
  } else {
    alert("incorrect information");
  }
});
