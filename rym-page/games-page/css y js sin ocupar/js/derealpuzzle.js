document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});
document.querySelector(".button-deck").textContent = 0
const fetchData = async (url = "https://rickandmortyapi.com/api/character") => {
    // console.log("obteniendo datos...");
    try {

        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        createSticker(data);
        createStickerContainer(data);
    } catch (error) {
        console.log(error);
    } finally {
        }
};




const createStickerContainer = (data) => {
    const puzzle = document.getElementById('puzzle');
    puzzle.textContent = "";
    const templateCard = document.getElementById("template-card").content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    data.results.forEach((item) => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);
        clone.querySelector(".card").dataset.id = item.id;
        clone.querySelector("#id").textContent = item.id;
        // guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone);
    });

    puzzle.appendChild(fragment);
    dragDrop();
};


const createSticker = (data) => {
    const piezas = document.getElementById("piezas");
    piezas.textContent = "";
    const templateCard = document.getElementById("template-card2").content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    data.results.forEach((item) => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);
        clone.querySelector(".card").setAttribute("draggable","true");
        clone.querySelector("#id").textContent = item.id;
        clone.querySelector(".card").id = item.id;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);
        // guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone);
    });

   piezas.appendChild(fragment);
};



const dragDrop = () => {
    terminado = 2;

    const puzzle = document.getElementById('puzzle');
    const piezas = document.getElementById('piezas');

    piezas.addEventListener('dragstart', e => {
      e.dataTransfer.setData('id', e.target.id);
      $(document).ready(function () {
        // Open modal on page load
        $("#exampleModal").modal('hide');
//         e.target.classList.remove('position-relative');
 //       e.target.classList.add('position-absolute');

        // Close modal on button click
        

      });
    });
    
    puzzle.addEventListener('dragover', e => {
      e.preventDefault();
      e.target.classList.add('hover');
    });
    
    puzzle.addEventListener('dragleave', e => {
      e.target.classList.remove('hover');
    });
    
    puzzle.addEventListener('drop', e => {
      e.target.classList.remove('hover');
    
      const id = e.dataTransfer.getData('id');
      const numero = id;
    
      if (e.target.dataset.id === numero) {
          e.target.appendChild(document.getElementById(id));
    
          terminado--;
    
          if (terminado === 0) {
              document.body.classList.add('ganaste');
          }
      }
    });
    

    }





