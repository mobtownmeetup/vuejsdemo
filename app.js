var key = '41e9d8e015a077b664b1b77d2e50476d';

window.sup = new Vue({
  el: '#app',
  data: {
    hero: {
      comics: {
        items: []
      }
    },
    results: [],
    colored: {
    }
  },
  methods: {
    colorize: function(id) {
        this.colored[id] = true;
    },
    getSuperhero: function(id) {
      fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=${key}`).then((res) => {
        return res.json()
      }).then((json) => {
        this.hero = json.data.results[0];
        this.results = [];
      });
    },
    search: function() {
      fetch('https://gateway.marvel.com/v1/public/characters?apikey=' + key).then((res) => {
        return res.json()
      }).then((json) => {
        this.results = json.data.results;
      });
    }
  }
})
