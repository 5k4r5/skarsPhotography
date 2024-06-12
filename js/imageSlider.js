//Get elements
const allImages = document.querySelectorAll('.slider figure');
const slider = document.querySelector('ul.slider');
const prevBtn = document.querySelector('button.prev');
const nextBtn = document.querySelector('button.next');

//Conuter
let counter = 1;
let totalSize = 0;

//Add transition
let size = allImages[counter - 1].clientWidth;
nextImage();
setTimeout(() => slider.style.transition = 'transform 0.4s ease-in-out', 50);

function nextImage() {
    totalSize += size;
    slider.style.transform = `translateX(calc(-${totalSize}px - ${7*counter}vw))`;
    counter++;
}

function prevImage() {
    counter--;
    totalSize -= size;
    slider.style.transform = `translateX(calc(-${totalSize}px - ${7*counter}vw))`;
    }