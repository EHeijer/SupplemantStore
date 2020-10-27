<template>
   <div class="cart-item">
    <div class="image-container">
        <img :src="require('@/assets/' + orderLine.product.imageUrl)" alt="">
    </div>
    <div class="cart-details">
        <div class="info">
            <h4>{{orderLine.product.product_name}}</h4>
            <p>{{orderLine.product.brand}}</p>
        </div>
        <div class="quantity">
            <div class="minus" @click="decrementQuantity()"><img src="../assets/minus-circle-solid.svg" alt=""></div>
            <span class="number">{{orderLine.quantity}}</span>
            <div class="plus" @click="incrementQuantity()"><img src="../assets/plus-circle-solid.svg" alt=""></div>
        </div>    
        <div class="total-item-price">
            <p>{{orderLine.product.price*orderLine.quantity}} kr</p>
        </div>
    </div>
     <div class="remove-icon">
        <img src="../assets/trash-alt-solid.svg" alt="" @click="removeItem()">
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
   export default {
     data: () => ({
       
     }),

     props: {
         orderLine: Object
     },
     methods: {
        incrementQuantity() {
            this.$store.commit("incrementQuantityAndSum", this.orderLine);
            let findOrderLine = this.findOrderLine(this.orderLines,this.orderLine);
            this.orderLine.id = findOrderLine.id;
            this.$store.dispatch('updateOrderLine', this.orderLine)
        },
        decrementQuantity() {
            let findOrderLine = this.findOrderLine(this.orderLines,this.orderLine);
            this.orderLine.id = findOrderLine.id;
            if(this.orderLine.quantity <= 1){
                this.$store.state.sumOfCart -= this.orderLine.product.price*this.orderLine.quantity;
                this.$store.dispatch("removeOrderLine", this.orderLine);
            }else {
                this.$store.commit("decrementQuantityAndSum", this.orderLine);
                this.$store.dispatch('updateOrderLine', this.orderLine)
            }
        },
        removeItem() {
            let findOrderLine = this.findOrderLine(this.orderLines,this.orderLine);
            this.orderLine.id = findOrderLine.id;
            this.$store.state.sumOfCart -= this.orderLine.product.price*this.orderLine.quantity;
            this.$store.dispatch("removeOrderLine", this.orderLine);
        },
        findOrderLine(orderLines, orderLine) {
            let productOrderLines = []
            orderLines.forEach(findOrderLine => {
                for(let i = 0; i < orderLines.length; i++) {
                    if(findOrderLine.product.id == orderLine.product.id){
                        productOrderLines.push(findOrderLine);
                    }
                }
            });
            let findOrderLine = productOrderLines[productOrderLines.length-1];
            return findOrderLine;
        }
     },
     computed: {
        cart() {
            return this.$store.state.cart;
        },
        ...mapState([
          'orderLines'
        ]),
    },
   }
    
</script>

<style lang="scss" scoped>
   .cart-item {
            display: grid;
            grid-template-columns: 15% 70% 15%;
            align-items: center;
            .image-container{
                display: flex;
                flex-direction: column;
                img {
                    width: 150px;
                }
            }
            .cart-details {
                display: grid;
                grid-template-columns: 30% 40% 30%;
                
                .info {
                text-align: left;
                h4 {
                    font-size: 20px;
                }
                p {
                    font-size: 16px;
                }
                }
                .quantity {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 0.5rem;
                        width: 150px;
                        justify-self: center;
                        
                        .minus {
                            img {
                                width: 22px;
                            }
                            
                        }
                        .number {
                            border: solid #000 1px;
                            padding: 0 .4rem;
                            height: 1.4rem;
                            margin: 0 5px 4px 5px;
                            display:flex;
                            align-items: center;
                            font-weight: bold;
                        }
                        .plus {
                            img {
                                width: 22px;
                                margin-right: 5px;
                            }
                        }
                        p {
                            font-weight: bold;
                        }
                    }
                .total-item-price {
                    display: flex;
                    padding-bottom: 1rem;
                    justify-self: center;
                    align-self: center;
                    p {
                        font-size: 20px;
                        font-weight: bold;
                        padding: 0 2px;
                    }
                }
            }
             .remove-icon {
                 justify-self: center;
                img {
                    width: 20px;
                }
            }
            
            
        }
</style>