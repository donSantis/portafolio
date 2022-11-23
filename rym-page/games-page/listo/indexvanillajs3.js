document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});
document.querySelector(".button-deck").textContent = 0
const fetchData = async (url = "https://rickandmortyapi.com/api/character") => {
    // console.log("obteniendo datos...");
    try {
        loadindData(true);

        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        pintarCard(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadindData(false);
    }
};




const pintarCard = (data) => {
    const cards = document.getElementById("card-dinamicas");
    cards.textContent = "";
    const templateCard = document.getElementById("template-card").content;
    const fragment = document.createDocumentFragment();
    document.querySelector(".clear-btn").onclick = function () { renderDeck.methods.clear() };
    // console.log(data);
    data.results.forEach((item) => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);

        if (item.id == 1) {
            clone.querySelector(".card-char").className = 'card card-char2 absolute m-4';
        }
        clone.querySelector("#id").textContent = item.id;
        clone.querySelector(".card-status-char").textContent = item.status;
        clone.querySelector(".card-species-char").textContent = item.species;
        clone.querySelector("#name").textContent = item.name;
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);
        clone.querySelector(".add-deck-btn").onclick = function () { renderDeck.methods.add3(item.id, 1); };
        // guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
    pintarPaginacion(data.info);
};


const pintarCardModal = (data) => {
    const cards = document.getElementById("card-dinamicas2");
    cards.textContent = "";
    const templateCard = document.getElementById("template-card2").content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    data.forEach((item) => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);

        if (item.id == 1) {
            clone.querySelector(".card-char").className = 'card card-char2 absolute m-4';
        }
        clone.querySelector("#id").textContent = item.id;
        clone.querySelector("#name").textContent = item.name;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);
        // guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

const pintarPaginacion = (data) => {
    // console.log(data);
    const paginacion = document.getElementById("paginacion");
    paginacion.textContent = "";
    const templatePaginacion = document.getElementById(
        "template-paginacion"
    ).content;
    const clone = templatePaginacion.cloneNode(true);

    if (data.prev) {
        clone.querySelector(".btn-outline-secondary").disabled = false;
    } else {
        clone.querySelector(".btn-outline-secondary").disabled = true;
    }

    if (data.next) {
        clone.querySelector(".btn-outline-primary").disabled = false;
    } else {
        clone.querySelector(".btn-outline-primary").disabled = true;
    }

    paginacion.appendChild(clone);

    paginacion.addEventListener("click", (e) => {
        if (e.target.matches(".btn-outline-primary")) {
            console.log("click");
            if (data.next) {
                fetchData(data.next);
            }
        }
        if (e.target.matches(".btn-outline-secondary")) {
            console.log("click");
            if (data.prev) {
                fetchData(data.prev);
            }
        }
    });
};

// pintar el loading
const loadindData = (estado) => {
    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};


const renderDeck  = {
    methods: {
        items: [],
        totalCardDeckvar: 1,
        add3(id, stock) {
            console.log("uwu");
            const cartItem = this.getItemsCart(id);      
            if (cartItem) {
                cartItem.stock++;
                this.totalCardDeck();
                console.log("stock");
            } else {
                fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(data => data.json())
                .then(response =>(  
                    card = {
                    id: response.id,
                    name: response.name,
                    image: response.image,
                    stock: stock,
                  },
                  this.items.push(
                    card
                  ),
                  console.log("add"),
                  this.totalCardDeck(),
                  pintarCardModal(this.items)
          ))     
            }

            

        },
        totalCardDeck() {
            let total = 0;
            this.items.forEach((item) => {
              const found = this.getItemsCart(item.id);
              total += found.stock;
            });
            this.totalCardDeckvar = total;
            document.querySelector(".button-deck").textContent = this.totalCardDeckvar;
            console.log(total);
          }
          ,
          getItemsCart(id) {
            const index = this.items.findIndex((item) => item.id === id);
            return index >= 0 ? this.items[index] : null;
      
          }
      
          ,
          hasInventory(id, stock) {
            return this.items.find((item) => item.id === id).stock - stock >= 0;
          },
          clear() {
            this.items = [];
            this.totalCardDeck();
            this.totalCardDeck();
            pintarCardModal();
          }
        
    }
}
