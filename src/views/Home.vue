<template>
  <div class="home-container">
    <div class="banner">
      <div class="banner-wrapper">
        <span><p>UPP TILL 30%</p></span>
        <h1>STOR KAMPANJ PÅ ALLA PRODUKTER</h1>
        <router-link class="click-button" to="#">klicka här</router-link>
      </div>
    </div>
    <div class="product-box first">
      <div class="upper-text">
        <span><p>MÅNADSKAMPANJER</p></span>
        <h4>Månadens utvalda favoriter</h4>
      </div>
      <div class="button-wrapper">
        <router-link class="click-button" to="#">klicka här</router-link>
      </div>
    </div>
    <div class="product-box second">
      <div class="upper-text">
        <span><p>UPP TILL 50%</p></span>
        <h4>Våra populäraste proteinbars</h4>
      </div>
      <div class="button-wrapper">
        <router-link class="click-button" to="#">klicka här</router-link>
      </div>
    </div>
    <div class="product-box third">
      <div class="upper-text">
        <span><p>2 FÖR 1</p></span>
        <h4>Köp 2 flak</h4>
        <h4>betala för 1</h4>
      </div>
      <div class="button-wrapper">
        <router-link class="click-button" to="#">klicka här</router-link>
      </div>
    </div>
    <div class="product-box fourth">
      <div class="upper-text">
        <span><p>UPP TILL 60%</p></span>
        <h4>Våra populäraste klädmärken</h4>
      </div>
      <div class="button-wrapper">
        <router-link class="click-button" to="#">klicka här</router-link>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss">
.home-container {
  padding-bottom: 2rem;
  display: grid;
  grid-template-areas: 
    "banner banner banner banner"
    "box1 box2 box3 box4"
  ;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 600px 500px;
  column-gap: 15px;
  row-gap: 15px;
  max-width: 1538px;
  margin: auto;
  .banner {
    grid-area: banner;
    background-image: url("../assets/homepage-banner.jpg");
  }
  .product-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    .upper-text {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: left;
      span p{
        background: #e10000;
        width: 150px;
        padding: 0.5rem 1rem;
        color: #fff;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      h4 {
        color: #fff;
        font-size: 22px;
        text-align: left;
      }
    }
    .button-wrapper {
      width: 70%;
      display: flex;
      .click-button {
        width: 100%;
      }
    }
  }
  .product-box.first {
    grid-area: box1;
    background-image: url("../assets/campaign.jpg");
    background-size: cover;
    .upper-text {
      span p {
        width: 200px;
      }
    }
  }
  .product-box.second {
    grid-area: box2;
    background-image: url("../assets/protein-bars.jpg");
    background-size: cover;
  }
  .product-box.third {
    grid-area: box3;
    background-image: url("../assets/energy-drink.jpg");
    background-size: cover;
    background-position: center;
  }
  .product-box.fourth {
    grid-area: box4;
    background-image: url("../assets/clothes.png");
    background-size: cover;
    background-position: center;
  }
}
</style>