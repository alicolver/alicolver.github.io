var i = 0;
var txt = 'Compiling..1%.....50%....100% ./next_page';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
 }