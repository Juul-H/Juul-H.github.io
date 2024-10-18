
const videos = [
    "https://www.youtube.com/embed/iRxtoCY4fc0?si=pzHPMPM3pQE6sGk9", 
    "https://www.youtube.com/embed/O59EzVgvI3A?si=bn3-ElS-RFfb_Z7e",
    "https://www.youtube.com/embed/8R9FJa_PV0Y?si=n-wXbeoXVA2WIDBA" 
];
let currentVideoIndex = 0;


const videoPlayer = document.getElementById('videoPlayer');


function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];  
}


function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];  
}

