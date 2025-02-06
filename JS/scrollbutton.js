let scrollbutton = document.getElementById("scroll-to-top-button"); // Get the button

window.addEventListener("scroll", scrollFunction); // When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    if ( // If the user scrolls down 20px from the top of the document, show the button
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollbutton.style.display = "block"; // Display the button
    } else {
        scrollbutton.style.display = "none"; // Hide the button
    }
}

scrollbutton.addEventListener("click", backToTop);  // When the user clicks on the button, scroll to the top of the document

function backToTop() { // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}