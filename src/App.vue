<template>
  <div id="app">
    
    
    <NavHeader/>
    <div class="underlying-with-opacity" v-if="this.$store.state.register || this.$store.state.login"></div>
    <LoginComp v-show="this.$store.state.login"/>
    <RegisterComp v-if="this.$store.state.register"/>
    <router-view/>
    
    
    <MainFooter/>
    
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import RegisterComp from '@/components/RegisterComp';
import LoginComp from '@/components/LoginComp';

export default {
  components: {
    NavHeader,
    MainFooter,
    RegisterComp,
    LoginComp
  },
  
}
</script>

<style lang="scss">

* {
  
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}
.underlying-with-opacity{
  position: absolute;
  background: black;
  top:0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: 0.7;
  overflow-y: scroll;
}
.click-button {
  background: #5a5959;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
  width: 300px;
  border-radius: 5px;
}
.banner {
   padding: 1rem 2rem;
    display: grid;
    color: #fff;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.banner-wrapper {
  max-width: 400px;
  justify-self: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 6rem;
  span {
    background: #e10000;
    padding: 0.5rem 1rem;
    width: 150px;
    font-weight: bold;
  }
  h1 {
    width: 80%;
    text-align:left;
    margin: 1rem 0 6rem 0;
  }
  .click-button {
    width: 300px;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
