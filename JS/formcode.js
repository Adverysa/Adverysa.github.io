//Form other selection code:

function otherselectfunction() {
    var otherbox = document.getElementById("otherinfo");
    if (document.forms[0].query.options[document.forms[0].query.selectedIndex].value == "other") {
        otherbox.style.display="block";
        document.getElementById("otherbox1").required = true;
    }
    else {
        otherbox.style.display="none";
    }
}

//Form other input clear code:

function resetother() {
    document.getElementById("otherinfo").style.visibility="none";
}