<template>
   <div class="cart-container">
    <div class="shopping-cart">
       
       <section class="cart-main">
           <article class="cart" v-for="(item, index) in cart" :key="index">
               <OrderLine :orderLine="item"/>
               <hr>
               <!-- <div class="cart-item">
                <div class="remove-icon">
                    <img src="../assets/trash-alt-solid.svg" alt="" @click="removeItem(item)">
                </div>
                <div class="image-and-quantity">
                    <img :src="require('@/assets/' + item.product.imageUrl)" alt="">
                    <div class="quantity">
                        <div class="minus" @click="decrementQuantity(item)"><img src="../assets/minus-circle-solid.svg" alt=""></div>
                        <span class="number">{{item.quantity}}</span>
                        <div class="plus" @click="incrementQuantity(item)"><img src="../assets/plus-circle-solid.svg" alt=""></div>
                        <p>{{item.product.price}} kr</p>
                    </div>    
                </div>
                <div class="info">
                    <h4>{{item.product.product_name}}</h4>
                    <p>{{item.product.brand}}</p>
                </div>
                <div class="total-item-price">
                    <p>Totalt:</p>
                    <p>{{item.product.price*item.quantity}} kr</p>
                </div>
               </div> -->
           </article>
           <section class="cart-footer">
                <div class="sum">
                    <p>Totalsumma</p>
                    <p class="price">{{cartSum}} Kr</p>
                </div>
                <router-link  to="/orderconfirm">
                    <button @click="sendOrder()" class="click-button"><p>SKICKA ORDER</p></button>
                </router-link>
            </section>
       </section>
       
    </div>   
   </div>
</template>

<script>
import OrderLine from '@/components/OrderLine'
import { mapState } from "vuex"
   export default {
    components: {
        OrderLine
    },
    data: () => ({
        order: {
            orderLines: []
        },
    }),

    methods: {
        closeCart() {
            const body = document.body;
            this.$store.state.showCart = !this.$store.state.showCart;
            body.style.overflowY = "auto";
        },
        sendOrder() {
            this.$store.dispatch('loadOrderLines')
            let cartItemsIndexStart = this.orderLines.length - this.cart.length;
            this.order.orderLines = this.orderLines.slice(cartItemsIndexStart,this.orderLines.length)
            this.$store.dispatch('sendOrder', this.order);
        }
    },
     computed: {
         showCart(){
             return this.$store.state.showCart;
         },
         cart() {
             this.$store.dispatch('loadOrderLines')
             return this.$store.state.cart;
         },
         cartSum() {
            return this.$store.state.sumOfCart;
         },
         getOrderLines(){
            return this.$store.state.orderLines;
        },
        ...mapState([
          'orderLines'
        ]),
        getOrderItems() {
            return this.$store.getters.getOrderItems;
        }
     },
    beforeMount () {
        this.$store.dispatch('loadOrderLines')
    }
 
   }
</script>

<style lang="scss" scoped>
.cart-container {
   padding-top: 10rem;
    .shopping-cart {
        
        
    }
    .cart-main {
        margin-top: 10rem;
        padding: 2rem 2rem;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
            border-radius: 5px;
            background: #fff;
            max-width: 80%;
            margin: auto;
        .cart {
            padding: 0 0.5rem;
            hr {
                border: 0;
                height: 0;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                width: 70%;
                margin: auto;
            }
            
        }
     }
    .cart-footer {
        padding: 2rem 0;
        .sum {
            width: 300px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            .price {
                font-weight: bold;
            }
        }
        a {
            text-decoration: none;
        }
        .click-button {
            margin: auto;
            font-weight: bold;
            border-style: none;
            text-decoration: none;
        }
    }
}
   
</style>