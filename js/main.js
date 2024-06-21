const darkGif = document.getElementById("darkGif");
const lightGif = document.getElementById("lightGif");

const darkImg = document.getElementById("darkImg");
const lightImg = document.getElementById("lightImg")

let imperialSound = new Audio("./media/imperial-sound.mp4");
let resistanceSound = new Audio("./media/resistance-sound.mp4");

imperialSound.volume = 0.4;

darkImg.addEventListener("mouseover", (event) => {
    darkGif.style.display = "block";
    imperialSound.play();
});

lightImg.addEventListener("mouseover", (event) => {
    lightGif.style.display = "block";
    resistanceSound.play()
});

darkImg.addEventListener("mouseleave", (event) => {
    darkGif.style.display = "none";
    imperialSound.pause();
    imperialSound.currentTime = 0;
});

lightImg.addEventListener("mouseleave", (event) => {
    lightGif.style.display = "none";
    resistanceSound.pause();
    resistanceSound.currentTime = 0;
});

