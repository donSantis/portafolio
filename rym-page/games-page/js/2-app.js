$(document).ready(function () {
  api_request();
});

const API = {
  "characters": "https://rickandmortyapi.com/api/character/",
  "locations": "https://rickandmortyapi.com/api/location/",
  "episodes": "https://rickandmortyapi.com/api/episode/"
};

const charactersPerPage = 6;

let queryData = '';
let page = 1;

let next = null;
let back = null;

$('#nextPage').hide();
$('#backPage').hide();

$('#search-button').on('click', () => {
  queryData = $('#search-bar').val();
  $('#search-bar').val('');
  page = 1;
  api_request(API.characters, {
    page: page,
    name: queryData
  });
});

/* NEXT BUTTON */
$('#nextPage').on('click', () => {
  api_request(API.characters, {
    page: ++page,
    name: queryData
  });
});

/* BACK BUTTON */
$('#backPage').on('click', () => {
  api_request(API.characters, {
    page: --page,
    name: queryData
  });
});

function api_request(url, data = {}) {
  $.get({
    url: API.characters,
    data: data,
    success: (res) => {
      /* LIMPIAR SCREEN */
      $('#slides-container').html('');
      /* DATOS EN CONSOLA */
      //console.log(res);
      next = res.info.next || null;

      // console.log(next);
      back = res.info.prev || null;
      var cardSide = document.querySelector("#slides-container");
      const templateCard = document.getElementById("template-card").content;
      const fragment = document.createDocumentFragment();

      for (let [key, value] of Object.entries(res.results)) {

        
        const clone = templateCard.cloneNode(true);
        clone.querySelector(".card-title-char").textContent = value.name.substring(0, 15);

        if (value.status == 'Alive') {
          clone.querySelector(".card-status-char").className = 'card-status-char';
          clone.querySelector(".card-status-char2").className = 'd-none';
        }
        else {
          clone.querySelector(".card-status-char2").className = 'card-status-char card-status-char2  ';
          clone.querySelector(".card-status-char").className = 'd-none';
        }
        clone.querySelector(".slide").setAttribute('id', value.id);
        clone.querySelector(".card-title-char").textContent = value.name.substring(0, 15);
        clone.querySelector(".card-img-top").setAttribute("src", value.image);
    
    
        clone.querySelector(".specie-description").textContent = value.species;
        clone.querySelector(".gender-description").textContent = value.gender;
        clone.querySelector(".ubication-description").textContent = value.location.name.substring(0, 17);
        clone.querySelector(".location-description").textContent = value.origin.name.substring(0, 18);
        fragment.appendChild(clone);
        

      }

      cardSide.appendChild(fragment);
      createSlider();

      if (next !== null) $('#nextPage').show();
      else $('#nextPage').hide();
      if (back !== null) $('#backPage').show();
      else $('#backPage').hide();

      $('html').scrollTop(0);
    }
  })
}

// SLIDER 

function createSlider() {
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");

  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  function nextSlider() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  }
  function backSlider() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  }

  nextButton.addEventListener("click", () => {
    nextSlider();
  });
  prevButton.addEventListener("click", () => {
    backSlider();
  });

}

function bigImg(x) {
  x.className = 'card card-char-base card-char4 absolute m-4';
}

function normalImg(x) {
  x.className = 'card card-char-base card-char3 absolute m-4';
}

 

 