// list of available sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

// create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAllSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopAllSounds);

buttonsContainer.appendChild(stopBtn);

// function to stop all playing sounds
function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
