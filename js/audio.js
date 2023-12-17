let swim_sound = new Audio("audio/swim.mp3");
let bubble_sound = new Audio("audio/bubbles.mp3");
let slap_sound = new Audio('audio/slap.mp3')
let jellyfishBubble_sound = new Audio('audio/jellyFishBubble.mp3')
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
    swim_sound.volume = 0.02;
    slap_sound.volume = 0.05;
    jellyfishBubble_sound.volume = 0.015;
}

function muteAllAudio() {
    mute = true;
    swim_sound.volume = 0;
    slap_sound.volume = 0;
    jellyfishBubble_sound.volume = 0;
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

  function sharkieSlap(){
    slap_sound.play();
  }

  function jellyFishBubble(){
    jellyfishBubble_sound.play();
  }
