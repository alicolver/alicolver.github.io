// Get the video
var video = document.getElementById("bkgVideo");

var btn = document.getElementById("pauseBtn");
    
function pauseVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}