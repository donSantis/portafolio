let a = new Vue({
  el: '#app',

  data() {

    prefix: 'Some value'

    return {
      characters: [],
      characters2: "",
      lg: null,
      cnsl: null,
      items: [],
    }
  },
  mounted() {
    this.getAll();
    this.puzzle()

  },

  methods: {

    getAll() {
      let prueb = 0;
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => (
          this.characters = response.data.results,
          this.lg = response.data.results.length,
          this.puzzle(this.characters)

        ))
        .catch(e => {
          console.log(e)
        })
    },

    getAll2() {

      fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => console.log(data.results));

    },

    prueba() {
      let items = [];
      items = this.getAll2();
      console.log(items);
    },


    consult() {
      this.getAll();
      console.log(this.characters)
    },



    puzzle(prueb) {
      const imagenes = prueb;

      const puzzle = document.getElementById('puzzle');
      const piezas = document.getElementById('piezas');
      const mensaje = document.getElementById('mensaje');

      let terminado = imagenes.length;


      while (prueb.length) {

        const index = Math.floor(Math.random() * imagenes.length);
        const div = document.createElement('div');
        const h2 = document.querySelector('.position');
        if (imagenes.length == 0 || imagenes.length == 1 || imagenes.length == 2 || imagenes.length == 3 || imagenes.length == 4|| imagenes.length == 5) {
          div.className = 'sticker-card-1 position-relative rounded-circle';
          console.log(imagenes);
  
        } else {
          div.className = 'card-char sticker-card-2';
        }
        ids = imagenes.length - 1;
        div.id = ids;
        div.draggable = true;
        div.style.backgroundImage = `url("https://rickandmortyapi.com/api/character/avatar/${imagenes.length}.jpeg")`;
        piezas.appendChild(div);
        imagenes.splice(index, 1);

      }




      for (let i = 0; i < terminado; i++) {
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        if (i == 0) {
          div.className = 'container-fluid card-deck m-0 p-0 d-flex align-items-center justify-content-center flex-wrap page-sticker-card-2 ';
          div.id = 'prb';
          h3.classList = 'position';
          puzzle.appendChild(div);

        } else if (i == 1 || i == 2 || i == 3 || i == 4) {
          
        }else if (i == 25 || i == 26 ) {
          
        } else {
          div.className = 'container-fluid page-sticker-card';
          div.textContent = 'uwu2' + i;
          puzzle.appendChild(div);
        }


        const div2 = document.createElement('div');
        if (i == 0 ||i == 1 || i == 2 || i == 3 || i == 4) {
          const prb = document.getElementById('prb');
          div2.className = 'container-sticker-card-1 rounded-circle';
          div2.id = 'char-'+ i;
          div2.dataset.id = i;
          prb.appendChild(div2);
        } else if (i == 25 ||i == 26) {
          const prb = document.getElementById('prb');
          div2.className = 'container-sticker-card-1 position-absolute rounded-circle';
          div2.textContent = 'uwu' + i;
          div2.setAttribute('left', '0%');
          div2.dataset.id = i;
          prb.appendChild(div2);
        } else {
          div2.className = 'sticker-card-2 position-absolute';
          div2.textContent = 'uwu' + i;
          div2.dataset.id = i;
          div2.id = 'char-'+ i;
          div.appendChild(div2);
        }



      }


      


     

      piezas.addEventListener('dragstart', e => {
        e.dataTransfer.setData('id', e.target.id);
        console.log("start)");
        $(document).ready(function () {
          // Open modal on page load
          $("#exampleModal").modal('hide');
          e.target.classList.remove('position-relative');
          e.target.classList.add('position-absolute');

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


  },
  computed: {
    prefixLength: function () {
      if (this.prefix) {
        return prefix.length
      }
      return '';
    }
  }
});

