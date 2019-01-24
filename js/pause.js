// Get the video
var video = document.getElementById("bkgVideo");
        
// Get the button
var btn = document.getElementById("pauseBtn");
    
// Pause and play the video, and change the button text
function pauseVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}