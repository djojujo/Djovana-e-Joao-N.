const track = document.querySelector('carousel-track');
const items = document.querySelectorAll('carousel-item');

let index = 0;
const totalitems = items.length;

function nextslide(){
    index++;
    if (index >= totalitems){
        index = 0;
    }
    updateslide();
}

function updateslide(){
    const itemwitdth = items[0].clientWidth;
    track.style.transform = 'translateX(-${index * itemWidth}px)';

}
setInterval(nextslide, 3000);