import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'

Vue.use(Vuex, axios, AxiosPlugin)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = [];
      for(let i = 0; i < payload.length; i++) {
        payload[i].price = Number(payload[i].price)
        state.products.push(payload[i])
      }
    },
  },
  actions: {
    async loadProducts({commit}) {
      const response = await axios.get("http://localhost:8080/products/", {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})
      commit('setProducts', response.data)
    }
  },
  modules: {
  }
})
