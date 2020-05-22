window.onscroll = function() {navbarSticky()};


var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function test() {
    console.log("Hi the js file is working");
    
}

function navbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

test();
