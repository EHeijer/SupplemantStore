import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faEnvelope,
  faHouseUser
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faEnvelope,faHouseUser);

Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  router,
  store,
  
  
  beforeCreate(){
    if(sessionStorage.getItem('cart') != null){
    this.$store.state.cart = JSON.parse(sessionStorage.getItem('cart'));
    
    }
  },
  render: h => h(App)
}).$mount('#app')
