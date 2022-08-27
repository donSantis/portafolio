let a = new Vue({
  el: '#app',

  data() {
    return {
      search: '',
      meta: null,
      characters: [],
      character: {},
      items: [],
      pages: null
    }
  },
  mounted() {
    this.getAll();
  },

  methods: {
    getAll() {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => (
          this.characters = response.data.results,
          this.meta = response.data.info,
          this.pages = response.data.info.pages
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
      let card = {};
      let db = axios.get('https://rickandmortyapi.com/api/character/' + id);
      db.then(response => (
        card = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.image,
        },

        this.items.push(
          card
        ),
        console.log(this.items)

      ))
    }
    ,
    add3(id, stock) {
      const cartItem = this.getItemsCart(id);
      if (cartItem) {
          cartItem.stock++;
      } else {

        
        let card = {};
      let db = axios.get('https://rickandmortyapi.com/api/character/' + id);
      db.then(response => (
        card = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.image,
          stock: stock,
        },

        this.items.push(
          card
        ),
        console.log(this.items)

      ))
      }
      console.log(this.items)
    }
    ,
    getItemsCart(id) {
      const index = this.items.findIndex((item) => item.id === id);
      return index >= 0 ? this.items[index] : null;

    }

    ,
    hasInventory (id, stock)  {
      return this.items.find((item) => item.id === id).stock - stock >= 0;
    },
    clear() {
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