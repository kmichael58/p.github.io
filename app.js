const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

// get all input element by their id in the sign up page

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document .getElementById("password");
const password2 = document.getElementById("password2");

// add event listener to the form
form.addEventListener("submit", e => {
  e.preventDefault();
  validateInputs();
}); 

const SetError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = email => {
// we use regular impression to check the email
const re = /^(([^<>([\]\.,;:\s@"]+(\,[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
return re.test(string(email).tolowerCase());
}

const validateInputs = () => {
  // we get the values off all input fields

  const usernameValue = username.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // add validation condition for each value

  if (usernameValue === ""){
    SetError(username, "Username is requrired");
  } else{
    setSuccess(username);
  }

  if (emailValue === ""){
    SetError(email, "Email is reqired");
  } else if(!isValidEmail(emailValue)){
    SetError(email, "Provide a valid email address.");
  }  else{
    setSuccess(email);
  }

  if (passwordValue === ""){
    SetError(password, "Password is invalid");
  } else if(passwordValue.length < 8){
    SetError(password, "Password must be at least 8 character.")
  } else{
    setSuccess(password);
  }
  if(password2Value === ""){
    SetError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue){
    SetError(password2, "Passwords doesn't match.")
  }
  else{
    setSuccess(password2);
  }

};