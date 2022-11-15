import { createStore } from 'vuex'

export default createStore({
  state: {
    yearsExp: new Date().getFullYear() - 2020,
    webTech: 3,
    doneProj:5,
    portfolio:[{img:'5', body:'Asag', link:'https://asag-66799.web.app/', id:1},
    {img:'2', body:'Vue cinema', link:'https://iibratik.github.io/vie_cinema/', id:2},
    {img:'3', body:'Open shop', link:'https://iibratik.github.io/Openshop/', id:3},
    {img:'4', body:'Rich Wock', link:'https://iibratik.github.io/rich-wock/', id:4},
    {img:'1', body:'Thalby', link:'https://iibratik.github.io/Thalby__book-shop/ ', id:5},
  ]
  },
  getters: {
    getPortfolio(state){
      return  state.portfolio
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
