function keyHandler(key) {
    const audioEl = document.getElementById(key.toLowerCase());
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
        keyToggle(key.toUpperCase());
    }
}
let previousButton;

function keyToggle(key) {
    const button = document.getElementById(`Key${key}`);
    if (button) {
        button.classList.add("playing");
        if (previousButton && previousButton !== button) {
            previousButton.classList.remove("playing");
        }
        previousButton = button;
    }
}

document.addEventListener("keydown", (event) => {keyHandler(event.key)});