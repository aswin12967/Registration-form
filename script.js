 //variable for selecting element by ID
 const nameInput = document.getElementById("name");
 const emailInput = document.getElementById("email");
 const passwordInput = document.getElementById("password");
 const sumbitBtn = document.getElementById("submitBtn");
 
 //function for validating name
 function validateName() {

     const nameValid = nameInput.value.trim() !== "";

     document.getElementById("nameError").textContent = nameValid ? "" : "Name Required";
     return nameValid;
 }

 //function for validating Email
 function validateEmail() {
     if (emailInput.value == "") {
         document.getElementById("emailError").textcontent = "";
         return false;
     }

     const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const emailValid = emailpattern.test(emailInput.value);
     document.getElementById("emailError").textContent = emailValid ? "" : "Please Enter Proper email";
     return emailValid;
 }

 //function for validating password
 function validatePassword() {
     if (passwordInput.value == "") {
         document.getElementById("passwordError").textContent = "";
         return false;
     }
     const passwordValid = passwordInput.value.length >= 6;
     document.getElementById("passwordError").textContent = passwordValid ? "" : "Min 6 characters";
     return passwordValid;
 }

 // function for enabling the button 
 function ValidateForm() {
     const nameValid = validateName();
     const emailValid = validateEmail();
     const passwordValid = validatePassword();

     sumbitBtn.disabled = !(nameValid && emailValid && passwordValid);
 }

 // Validate individula input fields
 nameInput.addEventListener("input", validateName);
 emailInput.addEventListener("input", validateEmail);
 passwordInput.addEventListener("input", validatePassword);

 // validate form button
 document.getElementById("form").addEventListener("input", ValidateForm);

 // alert pop up
 document.getElementById("form").addEventListener("submit", function () {
     alert("registration successful!")
 })