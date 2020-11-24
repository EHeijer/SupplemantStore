<template>
   <div class="admin-orders-container">
       <div class="underlying"></div>
       
       <div class="order-table">
            <header>
                <p>Order History</p>
            </header>
            <table class="table">
                <tr class="table-top">
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Customer</th>
                    <th>Order Status</th>
                    <th>Order Sum</th>
                    <th style="width:150px;">Actions</th>
                </tr>
                <tr class="table-row" v-for="(order, index) in orders" :key="index">
                    <td>{{order.id}}</td>
                    <td>{{order.dateCreated}}</td>
                    <td>{{order.user.username}}</td>
                    <td v-if="!order.orderSent" >Waiting To Be Handled</td>
                    <td v-if="order.orderSent" >Order Is Sent</td>
                    <td>{{order.totalOrderPrice}} KR</td>
                    <td style="width:150px;color:#000;">
                        <font-awesome-icon @click="showOrder(order.id)" icon="pen" class="icon"/>
                        <font-awesome-icon icon="trash-alt" class="icon"/>
                    </td>
                    <div class="order-modal" :id="order.id">
                        <header>    
                            <p>Order details</p>
                            <font-awesome-icon @click="hideOrder(order.id)" icon="times" class="icon"/>
                        </header>
                        <table class="orderlines-table">
                            <tr class="table-top">
                                <th></th>
                                <th>Product ID</th>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tbody>
                            <tr class="table-row" v-for="(orderline, index) in order.orderLines" :key="index">
                                <td><img style="width:90px;" :src="require('@/assets/' + orderline.product.imageUrl)" alt=""></td>
                                <td>{{orderline.product.id}}</td>
                                <td>{{orderline.product.brand}}</td>
                                <td>{{orderline.product.product_name}}</td>
                                <td>{{orderline.quantity}}</td>
                                <td>{{orderline.product.price*orderline.quantity}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </tr>
            </table>
        </div>
   </div>
</template>

<script>
import { mapState } from "vuex"

   export default {
    
     data: () => ({
       
     }),

     methods: {
         showOrder(orderId) {
             document.querySelector('.underlying').style.display = 'block';
             document.getElementById(orderId).style.display = 'block';
             document.querySelector('body').style.overflowY = "hidden";
         },
         hideOrder(orderId) {
             document.querySelector('.underlying').style.display = 'none';
             document.getElementById(orderId).style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
         },
        
     },

     computed: {
        ...mapState([
          'orders'
      ]),
      
    },
    mounted(){
      this.$store.dispatch('loadOrders')
    }
   }
</script>

<style lang="scss" scoped>
.underlying{
    position: absolute;
    background: black;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    opacity: 0.7;
    overflow-y: scroll;
    display: none;
}
.order-modal{
    position: fixed;
    background: #fff;
    top:50%;
    left: 50%;
    width: 80%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: none;
    border-radius: 3px;
    overflow:auto;
    max-height:600px;
    header {
        .icon {
        position: absolute;
        left: 97.5%;
        top: 12px;
        font-size: 20px;
        }
    }
    table {
        

        width:100%;
        border-collapse: collapse;
        color: #9b9a9a;
        tbody {
            
        }
    }
    
    .click-button {
        margin: 1.5rem auto;
        border:none;
    }
}
   .admin-orders-container {
       padding-top: 120px;
        padding-bottom: 50px;
        max-width: 1538px;
        min-height: 95vh;
        margin: auto;
        .order-table {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
            width: 80%;
            margin: auto;
            header {
                background: rgba(#000, 0.54);
                color: #fff;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                font-size: 22px;
               
            }
            .table {
                border-collapse: collapse;
                color: #9b9a9a;
                
                .table-top {
                   
                   
                    
                    th {
                        padding: 1.4rem 1rem;
                    }
                }
                width:100%;
                
                text-align: left;
                .table-row td{
                    border-top: 1px solid #9b9a9a;
                    border-bottom: 1px solid #9b9a9a;
                    padding: 1rem;
                }
                .table-row td .icon {
                    margin: 0px 10px;
                }
            }

        }
   }
</style>