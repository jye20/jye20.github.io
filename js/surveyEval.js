// debug
// if (window.sessionStorage) {
//     // console.log("Session storage supported");
// }
// else {
//     // console.log("Session storage not supported");
// }

// Saves the results of the page to the session storage by going into
// previously initted session storage to get the keys and then the inputs
// are all saved properly in the session storage.
// Saved to session because the data automatically wipes once the page is closed.
function keepResults() {
    // console.log(document.getElementById('lastName').value);
    for (let i = 0; i < sessionStorage.length; i++) {
        sessionStorage.setItem(sessionStorage.key(i), document.getElementById(sessionStorage.key(i)).value);
    }
    // console.log(sessionStorage.getItem(sessionStorage.key(0)));
    // console.log(sessionStorage.length);
    for (let j = 0; j < sessionStorage.length; j++) {
        // console.log(sessionStorage.key(j) + " AND " + sessionStorage.getItem(sessionStorage.key(j)));
    }
}

// Moves all the saved information in the session to be displayed and saved onto the page.
function transferResults() {
    // console.log("yahaha, you found me!");
    for (let j = 0; j < sessionStorage.length; j++) {
        var currentKey = sessionStorage.key(j);
        var currentValue = sessionStorage.getItem(currentKey);
        //console.log(currentKey + " AND " + currentValue);
        if (currentValue.value !== null) {
            document.getElementById(currentKey).value = currentValue;
            if (currentValue === "checked") {
                document.getElementById(currentKey).checked = true;
            }
            else if (currentValue === "unchecked") {
                document.getElementById(currentKey).checked = false;
            }
        }
    }
}

function toggleCheck(checkString) {
    var checkbox = document.getElementById(checkString);
    // console.log("isChecked: "+checkbox.checked);
    if (checkbox.checked) {
        document.getElementById(checkString).value = "checked";
    }
    else {
        document.getElementById(checkString).value = "unchecked";
    }
    // console.log(document.getElementById(checkString).value);
}