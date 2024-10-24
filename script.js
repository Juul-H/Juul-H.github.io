const videos = [
    "https://www.youtube.com/embed/iRxtoCY4fc0?si=pzHPMPM3pQE6sGk9", 
    "https://www.youtube.com/embed/O59EzVgvI3A?si=bn3-ElS-RFfb_Z7e",
    "https://www.youtube.com/embed/8R9FJa_PV0Y?si=n-wXbeoXVA2WIDBA",
    "https://www.youtube.com/embed/1lszpNisyQI?si=Dza8eDl6UAlySJwm",
    "https://www.youtube.com/embed/Y8kTZiGptsM?si=mnyebYyo4gdNz7mr"
]; // videos

let currentVideoIndex = 0; //
const videoPlayer = document.getElementById('videoPlayer');
const slider = document.getElementById('slider');
const ball = document.getElementById('ball');

// Function to update video based on the current index
function updateVideo() {
    videoPlayer.src = videos[currentVideoIndex];
    slider.value = currentVideoIndex; // Update slider value
    moveBall(); // Move ball to the correct position
}

// Function to move the ball based on slider value
function moveBall() {
    const sliderWidth = slider.offsetWidth;
    const max = slider.max;
    const min = slider.min;
    const value = slider.value;

    const leftPosition = ((value - min) / (max - min)) * (sliderWidth - 30);
    ball.style.left = leftPosition + 'px';
    ball.style.display = 'block'; // Show the ball when slider is used
}

// Next video function
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

// Previous video function
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

// Initialize ball position and hide it initially
moveBall();

// Update video when slider is changed
slider.addEventListener('input', (e) => {
    currentVideoIndex = parseInt(e.target.value); // Get the slider value
    updateVideo(); // Update the video based on the slider
});
