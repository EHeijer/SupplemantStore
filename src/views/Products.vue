<template>
  <div class="product-page">
    <!-- <div class="banner">
        <div class="banner-wrapper">
            <span><p>UPP TILL 60%</p></span>
            <h1>VÅRA POPULÄRASTE KLÄDMÄRKEN</h1>
            <router-link class="click-button" to="#">klicka här</router-link>
        </div>
    </div> -->
    <div class="product-container">
        <product v-for="(product,index) in getProductsNotRemoved"  :key="index" :product="product"/>
    </div>
  </div>
</template>
<script>
import product from '@/components/Product'
import { mapState } from "vuex"

export default {
  components: {
      product
  },
  computed: {
      ...mapState([
          'products'
      ]),
      getProductsNotRemoved() {
        return this.products.filter(product => !product.removed);
    }
  },
  mounted(){
      this.$store.dispatch('loadProducts')

  }
}
</script>

<style lang="scss">
    
    .product-page {
        display: grid;
        max-width: 1538px;
        margin: auto;
        min-height: 95vh;
        padding-top: 130px;
        .banner {
            background-image: url("../assets/product-banner.jpg");
            margin-bottom: 1rem;
            
            h1 {
                color: #fff;
            }
        }
        .product-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 90%;
            margin: 0 auto;
            gap: 1rem;
            padding: 2rem 0;
        }
    }
</style>
