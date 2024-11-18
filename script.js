const videoPlayer = document.getElementById('videoPlayer');
const progressSlider = document.getElementById('progressSlider');
const playPauseBtn = document.getElementById('playPauseBtn');
const videoSwitchSlider = document.getElementById('videoSwitchSlider');

let isPlaying = false;
const videos = ['auto.mp4', 'Motor.mp4'];
let currentVideoIndex = 0;

function updateVideoSource() {
    videoPlayer.src = videos[currentVideoIndex];
    progressSlider.value = 0;
}

videoPlayer.addEventListener('timeupdate', () => {
    const value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressSlider.value = value;
});

progressSlider.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = time;
});

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

videoSwitchSlider.addEventListener('input', (e) => {
    const percentage = parseFloat(e.target.value) / 100;
    const newIndex = Math.round(percentage * (videos.length - 1));
    if (newIndex !== currentVideoIndex) {
        currentVideoIndex = newIndex;
        updateVideoSource();
    }
});

function updateVideoSwitchSliderMax() {
    videoSwitchSlider.max = 100;
    videoSwitchSlider.step = 0.1;
}

updateVideoSource();
updateVideoSwitchSliderMax();

// Allow the rocket nose images to be dragged
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.getElementById(data);
    event.target.appendChild(element);
}