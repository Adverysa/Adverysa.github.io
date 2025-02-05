//Get the button
let scrollbutton = document.getElementById("scroll-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollbutton.style.display = "block";
    } else {
        scrollbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollbutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}