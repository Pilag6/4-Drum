let timeoutId;

function playSound(event) {
    let keyCode;
    
    if (event.type === "keydown") {
        keyCode = event.keyCode;
    } else if (event.type === "click") {
        const keyElement = event.target.closest(".key");
        if (keyElement) {
            keyCode = keyElement.getAttribute("data-key");
        }
    }

    const audioSound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (audioSound) {
        audioSound.currentTime = 0;
        audioSound.play();
        key.classList.add("playing");

        clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => key.classList.remove("playing"), 50);
    }
}

window.addEventListener("keydown", playSound);
document.addEventListener("click", playSound);


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
