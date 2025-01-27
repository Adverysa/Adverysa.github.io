//Top nav bar code:
function resizefunction() {
    var topnavbarvar = document.getElementById("topnavbar");
    if (topnavbarvar.className === "topnav") {
        topnavbarvar.className += " responsive";
    } else {
        topnavbarvar.className = "topnav";
    }
}