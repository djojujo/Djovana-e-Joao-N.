const abacaxi = document.querySelector('carousel-inner');
const items = document.querySelectorAll('slide');

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
    abacaxi.style.transform = 'translateX(-${index * itemWidth}px)';

}
setInterval(nextslide, 3000);