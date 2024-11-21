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

// Voeg deze functie toe aan je script.js
function updateLeaderboard() {
    const leaderboard = [
        { rank: 1, name: "Player 1", score: 150 },
        { rank: 2, name: "Player 2", score: 120 },
        { rank: 3, name: "Player 3", score: 100 }
    ];

    const tableBody = document.querySelector("#leaderboard-table tbody");
    tableBody.innerHTML = ''; // Clear the existing table rows

    leaderboard.forEach((player) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Roep updateLeaderboard() aan om de leaderboard bij te werken bij het laden van de pagina
window.onload = updateLeaderboard;
