<template>
  <div id="app">
    
    <NavHeader/>
    <MainFooter/>
    <router-view/>
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
import MainFooter from "@/components/MainFooter.vue"
export default {
  components: {
    NavHeader,
    MainFooter
  }
}
</script>

export default {
  
}


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
