let swim_sound = new Audio("audio/swim.mp3");
let bubble_sound = new Audio("audio/bubbles.mp3");
let slap_sound = new Audio("audio/slap.mp3");
let jellyfishBubble_sound = new Audio("audio/jellyFishBubble.mp3");
let coinCollect_sound = new Audio("audio/coinCollect.mp3");
let poisonCollect_sound = new Audio("audio/poisonCollect.mp3");
let lose_sound = new Audio("audio/lose.mp3");
let win_sound = new Audio("audio/win.mp3");
let hurt_sound = new Audio("audio/hurt.mp3");
let background_sound = new Audio("audio/backgroundAudio.mp3");
let endboss_sound = new Audio("audio/endboss.mp3");

let mute = false;
let background_audio = true

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
  background_audio = true;
  mute = false;
  swim_sound.volume = 0.02;
  slap_sound.volume = 0.05;
  jellyfishBubble_sound.volume = 0.02;
  coinCollect_sound.volume = 0.01;
  poisonCollect_sound.volume = 0.02;
  lose_sound.volume = 0.02;
  win_sound.volume = 0.02;
  hurt_sound.volume = 0.02;
  background_sound.volume = 0.02;
  endboss_sound.volume = 0.02;
}

function muteAllAudio() {
  background_audio = false;
  mute = true;
  lose_sound.volume = 0;
  swim_sound.volume = 0;
  slap_sound.volume = 0;
  jellyfishBubble_sound.volume = 0;
  coinCollect_sound.volume = 0;
  poisonCollect_sound.volume = 0;
  win_sound.volume = 0;
  hurt_sound.volume = 0;
  background_sound.volume = 0;
  endboss_sound.volume = 0;
}

function backgroundAudio() {
  background_sound.loop = true;
  if (mute) {
    background_sound.pause(); // Pausiere die Wiedergabe, wenn stummgeschaltet
  } else {
    if (background_sound.paused && background_audio) {
      background_sound.play(); // Starte die Wiedergabe, wenn nicht stummgeschaltet und pausiert
    }
  }
  setTimeout(backgroundAudio, 100);
}

function endbossAudio() {
  backgroundAudioStop();
  endboss_sound.loop = true;
  if (mute) {
    endboss_sound.pause(); // Pausiere die Wiedergabe, wenn stummgeschaltet
  } else {
    if (endboss_sound.paused) {
      endboss_sound.play(); // Starte die Wiedergabe, wenn nicht stummgeschaltet und pausiert
    }
  }
  setTimeout(endbossAudio, 100);
}

function endbossAudioStop() {
  endboss_sound.pause();
}

function backgroundAudioStop() {
  background_audio = false
  background_sound.loop = false;
  background_sound.pause();
}

function loseAudio() {
  backgroundAudioStop();
  endbossAudioStop();
  lose_sound.play();
}

function hurtAudio() {
  if (!mute) {
    hurt_sound.play();
  }
}

function winAudio() {
  backgroundAudioStop();
  endbossAudioStop();
  win_sound.play();
}

function collectCoinAudio() {
  if (!mute) {
    coinCollect_sound.play();
  }
}

function collectPoisonAudio() {
  if (!mute) {
    poisonCollect_sound.play();
  }
}

function sharkieSwimAudio() {
  swim_sound.play();
}

function sharkieSwimAudioPause() {
  swim_sound.pause();
}

function bubbleAudio() {
  bubble_sound.play();
}

function sharkieSlap() {
  slap_sound.play();
}

function jellyFishBubble() {
  if (!mute) {
    jellyfishBubble_sound.play();
  }
}
