import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'

Vue.use(Vuex, axios, AxiosPlugin)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    orderLines: [],
    cartQuantity: 0,
    // showCart: false,
    sumOfCart: 0,
    orders: [],
    lastOrder: {},
    registered: true
  },
  mutations: {
    setProducts(state, payload) {
      state.products = [];
      for(let i = 0; i < payload.length; i++) {
        payload[i].price = Number(payload[i].price)
        state.products.push(payload[i])
      }
    },
    setOrderLines(state, payload) {
      state.orderLines = [];
      for(let i = 0; i < payload.length; i++) {
        payload[i].id = Number(payload[i].id)
        state.orderLines.push(payload[i]);
      }
    },

    setOrders(state, payload) {
      state.orders = []
      payload.forEach(order=> {
        state.orders.push(order)
      })
      state.lastOrder = payload[payload.length-1]
      state.sumOfCart = 0;
    },

    addOrderLine(state, payload) {
      console.log(state)
      console.log(payload)
    },
    addOrder(state, payload) {
      state.orders.push(payload);  
      state.cart = []
    },

    getOrderLine(state,payload) {
      console.log(state)
      console.log(payload)
    },

    removeOrderLine(state, payload) {
      state.cart.splice(state.cart.indexOf(payload), 1);
      // state.sumOfCart -= payload.product.price*payload.quantity;
    },
    incrementQuantityAndSum(state,payload) {
      state.sumOfCart += payload.product.price;
      payload.quantity += 1;
    },
    decrementQuantityAndSum(state, payload){
      state.sumOfCart -= payload.product.price;
      payload.quantity -= 1;
    }
  },
  actions: {
    async loadProducts({commit}) {
      const response = await axios.get("http://localhost:8080/products/", {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})
      commit('setProducts', response.data)
    },

    async loadOrderLines({commit}) {
      const response = await axios.get("http://localhost:8080/orderLines/");
      commit('setOrderLines', response.data)
    },
    async loadOrders({commit}) {
      const response = await axios.get("http://localhost:8080/orders/");
      commit('setOrders', response.data)
    },
    async createOrderLine({commit}, orderLine) {
      const response = await axios.post("http://localhost:8080/orderLines/", {...orderLine})
      commit('addOrderLine', response.data)
    },

    async getOrderLine({commit}, id) {
      const response = await axios.get(`http://localhost:8080/orderLines/${id}`, /*{...orderLine}*/)
      commit('getOrderLine', response.data)
    },

    async updateOrderLine({commit}, orderLine){
      console.log(orderLine);
      const response = await axios.put("http://localhost:8080/orderLines/", {...orderLine})
      commit('addOrderLine', response.data)
    },

    async removeOrderLine({commit}, orderLine) {
      console.log(orderLine)
      const response = await axios.delete(`http://localhost:8080/orderLines/${orderLine.id}`, {...orderLine})
      commit('removeOrderLine', response.data)
    },

    async sendOrder({commit}, order) {
      console.log(order)
      const response = await axios.post("http://localhost:8080/orders", {...order})
      commit('addOrder', response.data)
    }
  },
  getters: {
    getOrderItems(state) {
      let orderArr = [];
      state.cart.forEach(orderLine => {
        for(let i = 0; i < state.cart.length; i++) {
          orderArr.push(orderLine.id);
        }
      });
      return orderArr
    }
    
  },
  modules: {
  }
})
