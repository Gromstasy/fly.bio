const enter = document.getElementById("enter");
const card = document.getElementById("card");
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const nick = document.querySelector(".glitch");
const text = nick.innerText;
nick.innerText = "";
let i = 0;
setInterval(() => {
  if (i < text.length) {
    nick.innerText += text[i];
    i++;
  }
}, 100);

let playing = false;

enter.onclick = () => {
  enter.style.display = "none";
  card.classList.remove("hidden");
  audio.play();
  playing = true;
  play.textContent = "⏸";
};

play.onclick = () => {
  if (playing) {
    audio.pause();
    play.textContent = "▶";
  } else {
    audio.play();
    play.textContent = "⏸";
  }
  playing = !playing;
};
