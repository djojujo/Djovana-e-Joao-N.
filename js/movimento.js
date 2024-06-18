const track = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.slide');

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
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${index * itemWidth}px)`;

}
setInterval(nextslide, 3000);