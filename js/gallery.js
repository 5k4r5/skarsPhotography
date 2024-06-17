document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    document.querySelectorAll('section.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});