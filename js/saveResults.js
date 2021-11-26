if (window.sessionStorage) {
    console.log("Session storage supported");
}
else {
    console.log("Session storage not supported");
}
// window.keyArray = new Array();
// window.valueArray = new Array();


function keepResults() {
    // console.log(document.getElementById('lastName').value);
    for (let i = 0; i < sessionStorage.length; i++) {
        sessionStorage.setItem(sessionStorage.key(i), document.getElementById(sessionStorage.key(i)).value);
        
    }
    // console.log(sessionStorage.getItem(sessionStorage.key(0)));
    console.log(sessionStorage.length);
    for (let j = 0; j < sessionStorage.length; j++) {
        console.log(sessionStorage.key(j) + " AND " + sessionStorage.getItem(sessionStorage.key(j)));
        // keyArray[j] = sessionStorage.key(j);
        // valueArray[j] = sessionStorage.getItem(sessionStorage.key(j));
    }

}

function transferResults() {
    console.log("yahaha, you found me!");
    for (let j = 0; j < sessionStorage.length; j++) {
        console.log(sessionStorage.key(j) + " AND " + sessionStorage.getItem(sessionStorage.key(j)));
    }
}

