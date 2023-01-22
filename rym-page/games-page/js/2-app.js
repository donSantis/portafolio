$(document).ready(function () {
  getAll();
});


function getAll() {
  function getAllId(id) {
    $.ajax({
      type: "get",
      url: 'https://rickandmortyapi.com/api/character/?page=' + id,
      dataType: 'json',
      data: { request: 'mostrarHorarios' },
      success: function (data) {//success
       // console.log(data);
        createCard(data);
        // muestraSlides(data.results.length);
      }, fail: function (data) {
        console.log("fail all city");
      },
    });
  }
  for (let i = 1; i < 21; i++) {
    getAllId(i);
  }

}

function createCard(data) {
  var position = 0;
  var cardSide = document.querySelector("#slides-container");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();

  data.results.forEach((item) => {
    // console.log(item.status);
    const loca = item.location.name;
    const clone = templateCard.cloneNode(true);


    if (item.status == 'Alive') {
         clone.querySelector(".card-status-char").className = 'card-status-char ';
         clone.querySelector(".card-status-char").textContent = 'Live';
     }
     else{
        clone.querySelector(".card-status-char").className = 'card-status-char card-status-char2  ';
        clone.querySelector(".card-status-char").textContent = 'Dead';
     }
     
    clone.querySelector(".card-title-char").textContent = item.name.substring(0, 15);
    clone.querySelector(".card-img-top").setAttribute("src", item.image);


    clone.querySelector(".specie-description").textContent = item.species;
    clone.querySelector(".gender-description").textContent = item.gender;
    clone.querySelector(".ubication-description").textContent = item.location.name.substring(0, 17);
    clone.querySelector(".location-description").textContent = item.origin.name.substring(0, 18);
    // guardamos en el fragment para evitar el reflow
    fragment.appendChild(clone);
  });
  cardSide.appendChild(fragment);
};



// SLIDER 

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

function next() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
}
function back() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
}

nextButton.addEventListener("click", () => {
  next();
});
prevButton.addEventListener("click", () => {
  back();
});

//setInterval(next, 5000);


function bigImg(x) {
  x.className = 'card card-char-base card-char4 absolute m-4';
}

function normalImg(x) {
  x.className = 'card card-char-base card-char3 absolute m-4';
}
