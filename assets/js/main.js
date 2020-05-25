

window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function navbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Form validation

var frmvalidator  = new Validator("contact_form");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");

