// Add an event listener to the document that runs the code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the DOM elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    // Add an event listener to each image in the gallery section
    document.querySelectorAll('section.gallery img').forEach(img => {
        img.addEventListener('click', () => {   // When an image is clicked, display the lightbox
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    // Add an event listener to the close button to hide the lightbox when clicked
    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Add an event listener to the lightbox to hide it when the lightbox itself is clicked
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});