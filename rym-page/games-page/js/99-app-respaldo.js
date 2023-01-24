$(document).ready(function () {
  getAll2();
});



function getAll() {

  let pages = 0;
  function getAllId(id) {
    $.ajax({
      type: "get",
      url: 'https://rickandmortyapi.com/api/character/?page=' + id,
      dataType: 'json',
      data: { request: 'mostrarHorarios' },
      success: function (data) {//success
        pages = data.info.pages
        createCard(data);
       // console.log(pages);

        // muestraSlides(data.results.length);
      }, fail: function (data) {
        console.log("fail all city");
      },
    });
  }
  console.log(pages);
  for (let i = 1; i < 42; i++) {
    getAllId(i);
  }

}
function getAll2() {

  $.ajax({
    type: "get",
    url: 'https://rickandmortyapi.com/api/character',
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
  //  for (let i = 1; i < 21; i++) {
  //  getAllId(i);
  //}

}
function createCard(data) {
  var position = 0;
  var cardSide = document.querySelector("#slides-container");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();

  data.results.forEach((item) => {
    // console.log(item.status);
    const loca = 'card-' + item.id;
    const clone = templateCard.cloneNode(true);



    if (item.status == 'Alive') {
      clone.querySelector(".card-status-char").className = 'card-status-char';
      clone.querySelector(".card-status-char2").className = 'd-none';
    }
    else {
      clone.querySelector(".card-status-char2").className = 'card-status-char card-status-char2  ';
      clone.querySelector(".card-status-char").className = 'd-none';
    }
    clone.querySelector(".slide").setAttribute('id', loca);
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



function bigImg(x) {
  x.className = 'card card-char-base card-char4 absolute m-4';
}

function normalImg(x) {
  x.className = 'card card-char-base card-char3 absolute m-4';
}


 