var i = 0;
var txt = 'Compiling..1%.....50%....100% ./next_page';
var speed = 50;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function typeWriter() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        txt = 'Compiling..1%.....50%....100%';
    }

    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}