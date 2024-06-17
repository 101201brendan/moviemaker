// js/light.js
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');
    const popupText = document.getElementById('popupText');
    const closeBtn = document.getElementById('close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            popup.style.display = 'flex';
            popupImg.src = this.src;
            popupText.innerText = this.getAttribute('data-text');
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function (e) {
        if (e.target !== popupImg && e.target !== popupText) {
            popup.style.display = 'none';
        }
    });
});
