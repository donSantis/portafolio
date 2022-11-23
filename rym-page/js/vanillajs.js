const charCard = document.querySelector('[data-char-card]');
const charName = document.querySelector('[data-char-name]');
const charImgContainer = document.querySelector('[data-char-img-container]');
const charImg = document.querySelector('[data-char-img]');
const charTxtId = document.querySelector('[data-char-txt-id]');
const charSpecies = document.querySelector('[data-char-species]');
const charGender = document.querySelector('[data-char-gender]');
const charStatus = document.querySelector('[data-char-status]');
const charOrigin = document.querySelector('[data-char-origin]');


const searchChar = event => {
    event.preventDefault();  //Cancelar el recargar la pagina
    const { value } = event.target.character;        //Targetea al name del input y obitnene el valor
    fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then(data => data.json())
        .then(response => renderCharData(response))

}

const renderCharData = (data) => {
    const imgChar = data.image;
    console.log(data);

    charName.textContent = data.name;
    charImg.setAttribute('src', imgChar)
    charGender.textContent = data.gender;
    charStatus.textContent = data.status;
    charSpecies.textContent = data.species;
    charOrigin.textContent = data.origin.name;
    charCard.className = 'card card-char absolute m-4';
   

}