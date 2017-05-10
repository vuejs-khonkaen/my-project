import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    products: [
      {
        id: 1,
        name: 'iPad',
        price: 20000
      },
      {
        id: 2,
        name: 'iPhone',
        price: 30000
      }
    ],
    cart: []
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    sumPrice: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
  },
  mutations: {
    addToCart (state, data) {
      let result = state.cart.find((item) => item.id === data.id)
      console.log(result)
      if (result) {
        result.amount++
      } else {
        let newData = {
          ...data,
          amount: 1
        }
        state.cart.push(newData)
      }
    }
  },
  actions: {
    addToCart ({ commit }, data) {
      commit('addToCart', data)
    }
  }
})
