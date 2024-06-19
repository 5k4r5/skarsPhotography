// Function to turn on the transition effect for the slider
function turnTransitionOn() {
    slider.style.transition = 'transform 0.4s ease-in-out';
    return;
}

// Function to scale the currently selected image
function scaleCurrentImage() {
    currnetImage = allImages[counter];

    allImages.forEach((img) => {
        img.style.transition = 'transform 0.4s';

        if (img === currnetImage) {
            img.style.transform = 'scale(1.2)';
        }
        else {
            img.style.transform = 'scale(1)';
        }
    })
}

// Function to update the state of the slider based on the direction
function updateState(direction) {
    size = allImages[counter].clientWidth;
    position = (counter) * size;

    // Move the slider forwards
    if (direction == 'forwards') {
        slider.style.transform = `translateX(calc(-${position}px - ${(counter) * gapWidht}vw))`;
    }
    // Move the slider backwards
    else if (direction == 'backwards') {
        slider.style.transform = `translateX(calc(-${position}px - ${(counter) * gapWidht}vw))`;
    }

    scaleCurrentImage();

    return;
}

// Get elements from the DOM
const allImages = document.querySelectorAll('.slider figure');
const slider = document.querySelector('ul.slider');
const prevBtn = document.querySelector('button.prev');
const nextBtn = document.querySelector('button.next');

// Initialize the counter and other variables
var counter = 0;
var position = 0;
const gapWidht = 7;
let size = allImages[counter].clientWidth;
var currnetImage = allImages[counter];
let myTimer = setInterval(nextImage, 5000); // Set an interval to automatically switch images

nextImage();

// Turn on the transition after a short delay
setTimeout(() => turnTransitionOn(), 50);

// Function to move to the next image in the slider
function nextImage() {
    if (counter >= allImages.length - 1) {
        return;
    }
    counter++;
    updateState('forwards');
    clearInterval(myTimer);
    myTimer = setInterval(nextImage, 5000);
}

// Function to move to the previous image in the slider
function prevImage() {
    if (counter < 1) {
        return;
    }
    counter--;
    updateState('backwards');
    clearInterval(myTimer);
    myTimer = setInterval(nextImage, 3000);
}

// Add an event listener to handle the end of the transition effect
slider.addEventListener('transitionend', () => {
    // Turn off the transition effect for smooth jump between cloned images
    slider.style.transition = 'none';

    // If the current image is a cloned first image, reset the counter to the start
    if (currnetImage.classList == 'cloneFirst') {
        counter = 0;
        nextImage();
    }
    // If the current image is a cloned last image, reset the counter to the end
    else if (currnetImage.classList == 'cloneLast') {
        counter = allImages.length - 1;
        prevImage();
    }

    // Turn the transition back on after a short delay
    setTimeout(() => {
        turnTransitionOn();
    }, 50);
});