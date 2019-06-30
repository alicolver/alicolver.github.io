var i = 0;
var txt = 'Starting... next_page live on localhost:3000';
var speed = 50;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function typeWriter() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        txt = 'Starting.....100%'
    }

    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    window.location.href='#projects'
}