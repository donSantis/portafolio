
let c = new Vue({
    el: '#app3',
  
    data() {
    return {
      search: '',
      products: null
    }
  },
  mounted() {
    axios
        .get('https://api.storerestapi.com/products')
        .then(response => (
          this.products = response.data.data
        ))
        .catch(e => {
          console.log(e)
        })
  },
  methods: {
    getTodos() {
      
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
      axios
        .get('https://rickandmortyapi.com/api/character/' + id)
        .then(response => (
          this.character = response.data
          
        ))
    }
    ,
    add(id) {
      console.log(character);
    },
  },
  computed: {
    filterSearch() {
      return this.characters.filter((character) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }



})