var loginForm = document.getElementById("login-form");
var regForm   = documnet.getElementById("reg-form");
var indicator = document.getElementById("indicator");

function register() {
    regForm.style.transform = "translateX(0)";
    loginForm.style.transform = "translateX(0)";
}

function login() {
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
}



