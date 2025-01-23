//Top nav bar code:
function resizefunction() {
    var topnavbarvar = document.getElementById("topnavbar");
    if (topnavbarvar.className === "topnav") {
        topnavbarvar.className += " responsive";
    } else {
        topnavbarvar.className = "topnav";
    }
}

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

//Form other selection code:

function otherselectfunction() {
    var otherbox = document.getElementById("otherinfo");
    if (document.forms[0].query.options[document.forms[0].query.selectedIndex].value == "other") {
        otherbox.style.visibility="visible";
        document.getElementById("otherbox1").required = true;
    }
    else {
        otherbox.style.visibility="hidden";
    }
}

//Form other input clear code:

function resetother() {
    var otherbox = document.getElementById("otherinfo");
    otherbox.style.visibility="hidden";
}

//Form validation code:
function validateform() {

}