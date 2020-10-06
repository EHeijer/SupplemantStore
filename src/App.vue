<template>
  <div id="app">
    
    <NavHeader/>
    <router-view/>
    <NewsLetter/>
    <MainFooter/>
    
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import NewsLetter from "@/components/NewsLetter.vue";
export default {
  components: {
    NavHeader,
    MainFooter,
    NewsLetter
  }
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
}
.click-button {
  background: #ff6900;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
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
