const prev = document.getElementById('prev');
const next = document.getElementById('next');
const carouselContainer = document.getElementById('container');

let width = carouselContainer.children[0].offsetWidth;
carouselContainer.style.width = width + "px";

let center = (carouselContainer.children[0].offsetWidth/2);
//carouselContainer.style.marginLeft = "calc(50% - " + center + "px)";

let box = 1;

let players = [localStorage.getItem("player1"), localStorage.getItem("player2"), localStorage.getItem("player3"), localStorage.getItem("player4")];

let h2 = document.getElementById("player");
h2.innerHTML = players[0];
idx = 0;

next.addEventListener("click" , function(){
    let h2 = document.getElementById("player");
    carouselContainer.children[0].style.transform = "translateX(" + box*width + "px)";
    carouselContainer.children[1].style.transform = "translateX(" + box*width + "px)";
    carouselContainer.children[2].style.transform = "translateX(" + box*width + "px)";
    carouselContainer.children[3].style.transform = "translateX(" + box*width + "px)";
    box++;
    idx++;
    if(idx >= 4){
      idx = 0;
    }
    h2.innerHTML = players[idx];
    if(box == 4){
        box = 0;
    }
})







/*
prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
  updateCarousel();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = carouselContainer.children[0].offsetWidth;
  carouselContainer.children[0].style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  carouselContainer.children[1].style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  carouselContainer.children[2].style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  carouselContainer.children[3].style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

window.addEventListener('resize', updateCarousel);

updateCarousel();
*/