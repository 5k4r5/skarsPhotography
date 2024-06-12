function turnTransitionOn() {
    slider.style.transition = 'transform 0.4s ease-in-out';
    return;
}

function updateState(direction){
    size = allImages[counter].clientWidth;
    position = (counter)*size;

    if(direction=='forwards'){
        slider.style.transform = `translateX(calc(-${position}px - ${(counter)*gapWidht}vw))`;
    }else if(direction=='backwards'){
        slider.style.transform = `translateX(calc(-${position}px - ${(counter)*gapWidht}vw))`;
    }

    console.log(counter, position);
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
let gapWidht = 7;
let size = allImages[counter].clientWidth;

nextImage();
setTimeout(() => turnTransitionOn(), 50);

function nextImage() {
    if(counter>=allImages.length-1){
        debugger
        return;
    }
    counter++;
    updateState('forwards');  //move the image
}

function prevImage() {
    if(counter<1){
        debugger
        return;
    }
    counter--;
    updateState('backwards');   //move the image
}

slider.addEventListener('transitionend', () => {
   let currnetImage = allImages[counter];
   slider.style.transition = 'none';

   if (currnetImage.classList == 'cloneFirst'){
    counter = 0;
    nextImage();
   }else if(currnetImage.classList == 'cloneLast'){
    counter = allImages.length - 1;
    prevImage();
   }

   setTimeout(()=>{
    turnTransitionOn();
   }, 50);
});