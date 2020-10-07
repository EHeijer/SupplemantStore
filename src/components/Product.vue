<template>
  <div class="product">
      <div class="product-image">
          <img :src="require('@/assets/' + product.imageUrl)" alt="">
      </div>
      <div class="product-info">
        <h4>{{product.product_name}}</h4>
        <p>{{product.brand}}</p>
        <div class="price-and-buy">
            <h3>{{product.price}} kr</h3>
            <button class="buy">KÖP</button>
        </div>
      </div>
      
  </div>
</template>
<script>

export default {
    data: () =>({}),
    props: {
        product: Object
    }
}
</script>

<style lang="scss">
.product {
    border: solid lightgray 1px;
    padding: 1rem 0;
    
    .product-image {
        img {
            
        }
    }
    .product-info {
        text-align: left;
        width: 70%;
        margin: 1rem auto;
        .price-and-buy {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;

            h3 {
                font-size: 21px;
                line-height: 2;
            }
            .buy {
                border: none;
                background: #000;
                padding: 0.5rem 2rem;
                color: #ff6900;
                font-weight: bold;
            }
        }
    }
}
</style>
