/*--------------------------------------------------------------------------------------*/

/* Animated menu icon */
function aniMenu(x) {
  x.classList.toggle("change");
}

/*--------------------------------------------------------------------------------------*/

/* Typewrtier effect */
var i = 0;
var txt = 'Welcome!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(id) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
