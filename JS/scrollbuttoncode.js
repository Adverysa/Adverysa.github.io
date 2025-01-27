//Scroll to top button code:
let mybutton = document.getElementById("scrolltotopbutton");

window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltotopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
