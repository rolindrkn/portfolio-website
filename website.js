/**fixes navbar at top of page 
    Resource W3School: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp**/
//scrolling
window.onscroll = function(){fixBar()}
;

var navbar = document.getElementById("navbar");

    

//get offset pos of navbar
var sticky = navbar.offsetTop;
console.log(sticky);

/**Adds sticky class when reach position
 * Removes sticky when leave scroll position
 */
function fixBar() {
    console.log(window.pageYOffset);
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}