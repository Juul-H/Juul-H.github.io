// linkjes van de videos
const videos = [
    "https://www.youtube.com/embed/iRxtoCY4fc0?si=pzHPMPM3pQE6sGk9", 
    "https://www.youtube.com/embed/O59EzVgvI3A?si=bn3-ElS-RFfb_Z7e",
    "https://www.youtube.com/embed/8R9FJa_PV0Y?si=n-wXbeoXVA2WIDBA",
    "https://www.youtube.com/embed/1lszpNisyQI?si=Dza8eDl6UAlySJwm",
    "https://www.youtube.com/embed/Y8kTZiGptsM?si=mnyebYyo4gdNz7mr"
]; 

let currentVideoIndex = 0; //eerste index 
const videoPlayer = document.getElementById('videoPlayer') //id van het videoplayer element
const slider = document.getElementById('slider'); //id van de het slider element


// toont de video op de bepaalde video index
function updateVideo() {
    videoPlayer.src = videos[currentVideoIndex];
    slider.value = currentVideoIndex; 
    
}



// maakt de video index met 1 hoger
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

// maakt de video index met 1 lager
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}



// zet de index video naar de dichtbezijnde waar de slider is 
slider.addEventListener('input', (e) => {
    
    const value = parseFloat(e.target.value);
    const closestIndex = Math.round(value); 
    currentVideoIndex = closestIndex; 
    videoPlayer.src = videos[currentVideoIndex]; 
});

// veranderd de slider naar de juiste positie wanneer de slider wordt losgelaten
slider.addEventListener('change', (e) => {
    const value = parseFloat(e.target.value);
    const closestIndex = Math.round(value); 
    currentVideoIndex = closestIndex; 
    slider.value = currentVideoIndex; 
    videoPlayer.src = videos[currentVideoIndex]; 
});


updateVideo();
