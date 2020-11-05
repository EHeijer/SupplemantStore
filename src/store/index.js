import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'
import { auth } from './auth.module';



Vue.use(Vuex, axios, AxiosPlugin)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    orderLines: [],
    cartQuantity: 0,
    // showCart: false,
    sumOfCart: 0,
    sumOfOrder: 0,
    orders: [],
    lastOrder: [],
    user: {
      username: '',
      email: '',
      address: '',
      password: ''
    },
    currentUser: {
      username: '',
      password: '',
      email: '',
      address: '',
      role: []
    },
    
    // loggedIn: false
    },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('user')){
        let userJson = localStorage.getItem('user');
        let user = JSON.parse(userJson);
        state.currentUser.username = user.username;
        state.currentUser.email = user.email;
        state.currentUser.address = user.address;
        state.currentUser.role = user.roles;
        state.currentUser.token = user.token;

        state.loggedIn = true;
      }else {
        state.loggedIn = false;
      }
      
    },

    
    // registerNewUser(state, user){
    //   state.user.username = user.username;
    //   state.user.email = user.email;
    //   state.user.address = user.address;
    //   state.user.password = user.password;
    // },
    // loginUser(state, user) {
    //   state.currentUser.username = user.username;
    //   state.currentUser.password = user.password;
    //   state.currentUser.email = user.email;
    //   state.currentUser.address = user.address;
    //   state.currentUser.role = user.roles;
    //   state.currentUser.token = user.token;

    //   state.loggedIn = true;
    //   localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    // },
    // logoutUser(state) {
    //   localStorage.removeItem('currentUser');
    //   state.loggedIn = false;
    //   console.log(state.currentUser.username == "");
    // },
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
      
      // state.lastOrder = payload[payload.length-1]
      
    },

    addOrderLine(state, payload) {
      console.log(state)
      console.log(payload)
    },
    addOrder(state, payload) {
      state.lastOrder = []
      state.sumOfOrder = 0;
      state.orders.push(payload);
      state.cart.forEach(item => {
        state.lastOrder.push(item)
      })
      state.sumOfOrder = state.sumOfCart
      sessionStorage.removeItem('cart'); 
      state.cart = []
      state.sumOfCart = 0;
    },

    getOrderLine(state,payload) {
      console.log(state)
      console.log(payload)
    },

    async removeOrderLine(state, payload) {
      state.cart.splice(state.cart.indexOf(payload), 1);
      let _cart = JSON.stringify(state.cart);
      await sessionStorage.setItem('cart', _cart);
      // state.sumOfCart -= payload.product.price*payload.quantity;
    },
    async incrementQuantityAndSum(state,payload) {
      state.sumOfCart += payload.product.price;
      payload.quantity += 1;
      let _cart = JSON.stringify(state.cart);
      await sessionStorage.setItem('cart', _cart);
    },
    async decrementQuantityAndSum(state, payload){
      state.sumOfCart -= payload.product.price;
      payload.quantity -= 1;
      let _cart = JSON.stringify(state.cart);
      await sessionStorage.setItem('cart', _cart);
    }
  },
  actions: {
    
    // async userRegistration({commit}, user) {
    //   const response = await axios.post('http://localhost:8080/register', {...user});
    //   commit('registerNewUser', response.data)
    // },
    // async login({commit}, user){
    //   const response = await axios.post('http://localhost:8080/login', {...user});
    //   commit('loginUser', response.data)
    // },
    async loadProducts({commit}) {
      const response = await axios.get("http://localhost:8080/products/", {headers: {
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
    },
    getCartSum(state) {
      let sumOfCart = 0;
      state.cart.forEach(item => {
        
        let sumOfCartItem = item.quantity * item.product.price
        sumOfCart += sumOfCartItem;
      })
      return sumOfCart;
    }
    
  },
  modules: {
    auth
  }
})
