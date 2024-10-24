const video = document.getElementById('videoPlayer');
    const slider = document.getElementById('slider');
    const playPauseBtn = document.getElementById('playPauseBtn');

    let isPlaying = false;
    let intervalId;

    // update de slider als de video speelt
    video.addEventListener('timeupdate', () => {
        const value = (video.currentTime / video.duration) * 100;
        slider.value = value;
    });

    // update de video als de slider wordt aangepast
    slider.addEventListener('input', (e) => {
        const time = (e.target.value / 100) * video.duration;
        video.currentTime = time;
    });

    // play/pause knop
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            video.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            video.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });