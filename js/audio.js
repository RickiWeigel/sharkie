let swim_sound = new Audio("audio/swim.mp3");
let bubble_sound = new Audio("audio/bubbles.mp3");
let mute = false;

function toggleAudio() {
  const volumeImg = document.getElementById("volume");
  mute = !mute;
  if (mute) {
      swim_sound.volume = 0;
      volumeImg.src = "img/buttons/mute.png";
  } else {
      swim_sound.volume = 0.03;
      volumeImg.src = "img/buttons/volume.png";
  }
}

function unmuteAllAudio() {
    mute = false;
    swim_sound.volume = 0.03;
}

function muteAllAudio() {
    mute = true;
    swim_sound.volume = 0;
}
  
  function sharkieSwimAudio(){
    swim_sound.play();
  }

  function sharkieSwimAudioPause(){
    swim_sound.pause();
  }

  function bubbleAudio(){
    bubble_sound.play();
  }