
const videos = [
    "https://youtu.be/iRxtoCY4fc0?si=7EGHyyEHaPjTJytu", 
    "https://youtu.be/O59EzVgvI3A?si=K8hO6cA6qoPNJIFW",
    "https://www.youtube.com/embed/VIDEO_ID_3https://youtu.be/8R9FJa_PV0Y?si=n-wXbeoXVA2WIDBA" 
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

