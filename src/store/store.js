import Vuex from 'vuex'

export default () => new Vuex.Store({
  state: {
    favorites: [
      {
        name: "Max",
        breed: "husky",
        img: "https://dog.ceo/api/img/husky/n02110185_1469.jpg"
      },
      {
        name: "Rusty",
        breed: "shiba",
        img: "https://dog.ceo/api/img/shiba/shiba-13.jpg"
      },
      {
        name: "Rocco",
        breed: "boxer",
        img: "https://dog.ceo/api/img/boxer/n02108089_14112.jpg"
      }
    ]
  }
})
