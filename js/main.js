const darkGif = document.getElementById("darkGif");
const lightGif = document.getElementById("lightGif");

const darkImg = document.getElementById("darkImg");
const lightImg = document.getElementById("lightImg");

let imperialSound = new Audio("./media/imperial-sound.mp4");
let resistanceSound = new Audio("./media/resistance-sound.mp4");

imperialSound.volume = 0.4;

// Initially set opacity to 0 for both GIFs
darkGif.style.opacity = "0";
lightGif.style.opacity = "0";

darkImg.addEventListener("mouseover", () => {
    // Fade in the darkGif
    darkGif.style.opacity = "1";
    imperialSound.play();
});

lightImg.addEventListener("mouseover", () => {
    // Fade in the lightGif
    lightGif.style.opacity = "1";
    resistanceSound.play();
});

darkImg.addEventListener("mouseleave", () => {
    // Fade out the darkGif
    darkGif.style.opacity = "0";
    imperialSound.pause();
    imperialSound.currentTime = 0;
});

lightImg.addEventListener("mouseleave", () => {
    // Fade out the lightGif
    lightGif.style.opacity = "0";
    resistanceSound.pause();
    resistanceSound.currentTime = 0;
});
