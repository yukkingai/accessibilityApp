let playPauseBtn = document.querySelector(".playpause"),
    stopBtn = document.querySelector(".stop"),
    rwdBtn = document.querySelector(".rwd"),
    fwdBtn = document.querySelector(".fwd"),
    timeLabel = document.querySelector(".time"),
    player = document.querySelector("video");


    playPauseBtn.onclick = () => {
        if (player.paused) {
          player.play();
          playPauseBtn.textContent = "Pause";
        } else {
          player.pause();
          playPauseBtn.textContent = "Play";
        }
      };

    stopBtn.onclick = () => {
        player.pause();
        player.currentTime = 0;
        playPauseBtn.textContent = "Play";
    };
      
    rwdBtn.onclick = () => {
        player.currentTime -= 3;
      };
      
      fwdBtn.onclick = () => {
        player.currentTime += 3;
        if (player.currentTime >= player.duration || player.paused) {
          player.pause();
          player.currentTime = 0;
          playPauseBtn.textContent = "Play";
        }
      };

      player.ontimeupdate = () => {
        const minutes = Math.floor(player.currentTime / 60);
        const seconds = Math.floor(player.currentTime - minutes * 60);
        const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
        const secondValue = seconds < 10 ? `0${seconds}` : seconds;
      
        const mediaTime = `${minuteValue}:${secondValue}`;
        timeLabel.textContent = mediaTime;
      };
      
      console.log('js fired');
      




player.removeAttribute("controls");



