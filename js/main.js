function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

function removeTransition(e) {
    setTimeout(() => {
        if (e.propertyName !== "transform") return;
        e.target.classList.remove("playing");
    }, 100);
  
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

// Play with mouse click

const mouseKeys = document.querySelectorAll(".key");

mouseKeys.forEach((key) => key.addEventListener("click", playSoundMouse));

function playSoundMouse(e) {
    const audio = document.querySelector(
        `audio[data-key="${this.dataset.key}"]`
    );
    const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

// Play with touch

const touchKeys = document.querySelectorAll(".key");

touchKeys.forEach((key) => key.addEventListener("touchstart", playSoundTouch));

function playSoundTouch(e) {
    const audio = document.querySelector(
        `audio[data-key="${this.dataset.key}"]`
    );
    const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}


