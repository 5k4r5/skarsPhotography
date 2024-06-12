function turnTransitionOn() {
    slider.style.transition = 'transform 0.4s ease-in-out';
    return;
}

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

function updateState(direction) {
    size = allImages[counter].clientWidth;
    position = (counter) * size;

    if (direction == 'forwards') {
        slider.style.transform = `translateX(calc(-${position}px - ${(counter) * gapWidht}vw))`;
    } else if (direction == 'backwards') {
        slider.style.transform = `translateX(calc(-${position}px - ${(counter) * gapWidht}vw))`;
    }

    scaleCurrentImage();

    return;
}

//Get elements
const allImages = document.querySelectorAll('.slider figure');
const slider = document.querySelector('ul.slider');
const prevBtn = document.querySelector('button.prev');
const nextBtn = document.querySelector('button.next');

//Conuter
var counter = 0;
var position = 0;
const gapWidht = 7;
let size = allImages[counter].clientWidth;
var currnetImage = allImages[counter];

nextImage();
setTimeout(() => turnTransitionOn(), 50);

function nextImage() {
    if (counter >= allImages.length - 1) {
        return;
    }
    counter++;
    updateState('forwards');  //move the image
}

function prevImage() {
    if (counter < 1) {
        return;
    }
    counter--;
    updateState('backwards');   //move the image
}

slider.addEventListener('transitionend', () => {
    slider.style.transition = 'none';

    if (currnetImage.classList == 'cloneFirst') {
        counter = 0;
        nextImage();
    } else if (currnetImage.classList == 'cloneLast') {
        counter = allImages.length - 1;
        prevImage();
    }

    setTimeout(() => {
        turnTransitionOn();
    }, 50);
});