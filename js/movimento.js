const track = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.slide');

let index = 0;
const totalItems = items.length;

function nextSlide() {
  index++;
  if (index >= totalItems) {
    index = 0;
  }
  updateSlide();
}

function updateSlide() {
  const itemWidth = items[0].clientWidth;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)


/*const abacaxi = document.querySelector('carousel-inner');
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
setInterval(nextslide, 3000);*/