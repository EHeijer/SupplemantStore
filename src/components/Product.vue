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
            <button class="buy" v-show="!added" @click="addToCart()">KÖP</button>
            <button class="buy" v-show="added">ADDED</button>
        </div>
      </div>
      
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    data: () =>({
        orderLine: {
            product:{
                id:"",
                imageUrl: "",
                product_name: "",
                brand: "",
                price: ""
            },
            id: "",
            quantity: 1,
        },
        added: false,
        counter: ""
    }),
    props: {
        product: Object
    },
    methods: {
        addToCart(){
            // let index = this.cart.findIndex(currentOrder => currentOrder.product.id == this.product.id)
            // let lastOrderId = this.orderLines[this.orderLines.length - 1].id;
            //         this.orderLine.id = lastOrderId + 1;
            // let orderLinesLocalStorage = JSON.parse(localStorage.getItem("orderLines"));
            
            this.orderLine.product.id = this.product.id;
            this.orderLine.product.imageUrl = this.product.imageUrl,
            this.orderLine.product.product_name = this.product.product_name,
            this.orderLine.product.brand = this.product.brand,
            this.orderLine.product.price = this.product.price
            // if(localStorage.length === null){
            //     this.orderLine.id = 1;
            // }else if(localStorage.length > 0){
            //     this.orderLine.id = orderLinesLocalStorage.length+1;
            // }
            
            this.$store.dispatch('createOrderLine', this.orderLine)
            this.$store.state.sumOfCart += this.product.price;
            
            // this.orderLines.push(this.orderLine)
            this.cart.push(this.orderLine);
            // localStorage.setItem("orderLines", JSON.stringify(this.orderLines))
            
            this.added = !this.added;
            this.$store.state.cartQuantity += 1;
            this.$store.dispatch('loadOrderLines')
            // console.log(orderLinesLocalStorage)
            // if(index == -1){
            //     this.orderLine.product.id = this.product.id;
            //     this.orderLine.product.imageUrl = this.product.imageUrl,
            //     this.orderLine.product.product_name = this.product.product_name,
            //     this.orderLine.product.brand = this.product.brand,
            //     this.orderLine.product.price = this.product.price
              
            //     this.orderLine.id = 
            //     this.$store.dispatch('createOrderLine', this.orderLine)
            //     this.$store.state.sumOfCart += this.product.price;
            //     this.orderLines.push(this.orderLine)
            //     this.cart.push(this.orderLine);
            //     this.$store.state.cartQuantity += 1;
                
            // }else {
            //     let findOrderLine = this.getOrderLines.find(currentOrder => currentOrder.id == this.orderLine.id)
            //     this.$store.state.sumOfCart += this.product.price;
            //     findOrderLine.quantity += 1;
            //     findOrderLine.product.id = this.product.id;
            //     this.$store.dispatch('updateOrderLine', findOrderLine)
            // }
            
            
        },
       
    },

    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartSum(){
            return this.$store.state.sumOfCart;
        },
        getOrderLines(){
            return this.$store.state.orderLines;
        },
        ...mapState([
          'orderLines'
      ])
    }
   
    }
</script>

<style lang="scss">

.product {
    padding: 1rem 0;
    background: #f5f5f5;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
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
                background: #ff6900;
                padding: 0.5rem 2rem;
                color: #fff;
                font-weight: bold;
            }
        }
    }
}
</style>
