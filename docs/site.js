/*--------------------------------------------------------------------------------------*/

/* Animated menu icon */
function aniMenu(x) {
  x.classList.toggle("change");
  document.getElementById('container').className = "containerC";
}

/*--------------------------------------------------------------------------------------*/

/* Typewrtier effect */
var i = 0;
var txt = 'Welcome!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementByClassName("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/*--------------------------------------------------------------------------------------*/
