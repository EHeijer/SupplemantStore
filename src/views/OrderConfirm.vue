<template>
   <div class="order-confirm">
       <section class="container">
           <h1>TACK FÖR DIN BESTÄLLNING.</h1>
           <div class="checkmark">
               <img src="../assets/check-circle-solid.svg" alt="">
           </div>
           <h3>Ordernummer: #123456756</h3>
           <div class="order-items">
               <div class="top">
                   <h4>BESTÄLLDA PRODUKTER</h4>
                   <p>ANTAL</p>
                   <p>PRIS</p>
               </div>
               <div class="orderlines" v-for="(item, index) in lastOrder.orderLines" :key="index">
                   <article class="order-item">
                       <div class="item-image">
                           <img :src="require('@/assets/' + item.product.imageUrl)" alt="">
                       </div>
                       <div class="info">
                           <p>{{item.product.product_name}}</p>
                           <p>{{item.product.brand}}</p>
                       </div>
                       <div class="quantity">
                           <p>{{item.quantity}}</p>
                       </div>
                       <div class="price">
                           <p>{{item.sumOfOrderLine}} kr</p>
                       </div>
                   </article>
                   <hr>
               </div>
               <div class="order-total">
                   <p>ORDERSUMMA:</p>
                   <p class="sum">{{lastOrder.totalOrderPrice}} kr</p>
               </div>
               <router-link to="/products"><button class="click-button">FORTSÄTT HANDLA</button></router-link>
           </div>
       </section>
   </div>
</template>

<script>
    import { mapState } from "vuex" 
   export default {
     
     data: () => ({
       
     }),
     computed: {
         lastOrder() {
             return this.$store.state.lastOrder;
         },
         ...mapState([
          'orders'
        ])
     },
     mounted(){
         this.$store.dispatch('loadOrders')
     }
   }
</script>

<style lang="scss" scoped>
   .order-confirm {
       padding-top: 8rem;
       .container {
           box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
            border-radius: 5px;
            background: #fff;
            max-width: 80%;
            margin: auto;
            padding: 0 2rem;
            h1 {
                font-size: 25px;
                padding: 2rem;
            }
            .checkmark {
                width: 80px;
                margin: auto;
            }
            h3{
                padding: 1rem;
            }
            .order-items {
                .top {
                    background: rgba(230, 227, 227, 0.452);
                    display: grid;
                    grid-template-columns: 75% 12.5% 12.5%;
                    padding: 1rem;
                    h4 {
                        text-align: left;
                    }
                    p {
                        font-weight: bold;
                    }
                }
                .orderlines {
                    hr {
                        border: 0;
                        height: 0;
                        border-top: 1px solid rgba(0, 0, 0, 0.1);
                        
                    }
                    .order-item {
                        display: grid;
                        grid-template-columns: 17.5% 55% 13.75% 13.75%;
                        padding: 1rem 0;
                        .item-image {
                            img {
                                width: 80px;
                            }
                        }
                        .info {
                            justify-self: start;
                            align-self: center;
                            margin-left: 5rem;
                            p {
                                font-size: 16px;
                                font-weight: bold;
                                text-align: left;
                            }
                        }
                        .quantity {
                            align-self: center;
                            margin-left: 1.5rem;
                            p {
                                font-weight: bold;
                            }
                        }
                        .price {
                            align-self: center;
                            p {
                                font-weight: bold;
                                color: #e10000;
                            }
                        }
                    }
                }
                .order-total {
                    padding: 2rem;
                    width: 320px;
                    margin-left: auto;
                    display: flex;
                    justify-content: space-between;
                    p {
                        font-weight: bold;
                        font-size: 20px;
                    }
                    .sum {
                        color:#e10000;
                    }
                }
                a {
                    padding: 1rem;
                    text-decoration: none;
                    .click-button {
                        margin: auto;
                        border-style: none;
                        
                    }
                }
            }
       }
   }
</style>