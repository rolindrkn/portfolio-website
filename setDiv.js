/**sets the first div to fill viewport */

window.onload= function() {
    var height = getViewportHeight();
    var width = getViewportWidth();
    if(height > 0){
        document.getElementById("mainWrapper").style.height = height + "px";
    }
    document.getElementById()
}

/**Returns height of device's viewport */
function getViewportHeight() {
    var h = 0;
    if(window.innerHeight) {
        h = window.innerHeight;
    } else if(document.documentElement && document.documentElement.clientHeight) {
        h = document.documentElement.clientHeight;
    } else if(document.body){
        h = document.body.clientHeight;
    }

    return h;
}

/**Returns height of device's viewport */
function getViewportHeight() {
    var h = 0;
    if(window.innerHeight) {
        h = window.innerHeight;
    } else if(document.documentElement && document.documentElement.clientHeight) {
        h = document.documentElement.clientHeight;
    } else if(document.body){
        h = document.body.clientHeight;
    }

    return h;
}