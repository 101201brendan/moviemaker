// script.js
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');
    const closeBtn = document.getElementById('close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            popup.style.display = 'block';
            popupImg.src = this.src; // Gebruik dezelfde bron voor de popup afbeelding
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function (e) {
        if (e.target !== popupImg) {
            popup.style.display = 'none';
        }
    });
});
