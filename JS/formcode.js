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
    document.getElementById("otherinfo").style.visibility="hidden";1
}