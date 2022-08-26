let page = [];
page = document.querySelectorAll("card-char");
console.log(page);  


let a = new Vue({
  el: '#app',

  data() {
    return {
      search: '',
      meta: null,
      characters: [],
      character: {},
      items: []
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
        .catch(e => {
          console.log(e)
        })
    },

    siguiente() {
      axios
        .get(this.meta.next)
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
    },
    atras() {
      axios
        .get(this.meta.prev)
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
    },
    get(id) {
      let stock = ""
      let card = {};
      axios
        .get('https://rickandmortyapi.com/api/character/' + id)
        .then(response => (
          card = {
            id: response.data.id,
            name : response.data.name,
            image : response.data.image,
            stock  : stock++
          },
          
          this.items.push(
            card
            ),
          console.log(this.items)
          
        ))
    }
    ,
    add(id) {
      this.get(id)
    },

    remove(id) {},
    hasInventory(){},
    clear(){
      this.items = [];
    }
  },
  computed: {
    filterSearch() {
      return this.characters.filter((character) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }



})


let b = new Vue({
  el: '',

  data() {
    return {
      search: '',
      meta: null,
      characters: [],
      character: {},
      items: []
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
        .catch(e => {
          console.log(e)
        })
    },

    siguiente() {
      axios
        .get(this.meta.next)
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
    },
    atras() {
      axios
        .get(this.meta.prev)
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info
        ))
    },
    get(id) {
      let stock = ""
      let card = {};
      axios
        .get('https://rickandmortyapi.com/api/character/' + id)
        .then(response => (
          card = {
            id: response.data.id,
            name : response.data.name,
            image : response.data.image,
            stock  : stock++
          },
          
          this.items.push(
            card
            ),
          console.log(this.items)
          
        ))
    }
    ,
    add(id) {
      this.get(id)
    },

    remove(id) {},
    clear(){
      this.items = [];
    }
  },
  computed: {
    filterSearch() {
      return this.characters.filter((character) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }



})