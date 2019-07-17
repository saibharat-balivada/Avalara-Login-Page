function validateUsername() {
  var userName = document.forms["loginForm"]["username"];
  if (/^\w+(\.?\w+)?@\w+([\.]?\w{2,3})+$/.test(userName.value)) {
    return true;
  }
  // alert("Please enter specific email address!");
  return false;
}

function validatePassword() {
  var passWord = document.forms["loginForm"]["password"];
  if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(passWord.value)) {
    return true;
  }
  // alert("Please enter specific password!");
  return false;
}

function rememberUsername() {
  var userName = document.forms["loginForm"]["username"].value;
  var checkbox = document.getElementById("inputCheck");
  if (typeof (Storage) !== "undefined") {
    if (checkbox.checked) {
      // To Store the username
      localStorage.setItem("username", userName);
    }
  } else {
    console.log('your browser doesn\'t support');
  }
}
// To retrieve the username
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("inputEmail").value = this.localStorage.getItem("username");
});
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  function validateLogin() {
    validateUsername();
    validatePassword();
    rememberUsername();
  }