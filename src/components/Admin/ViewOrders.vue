<template>
   <div class="admin-orders-container">
       <div class="order-table">
            <header>
                <p>Order History</p>
                <font-awesome-icon icon="user-plus" class="icon"/>
            </header>
            <table class="table">
                <tr class="table-top">
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Customer</th>
                    <th>Order Status</th>
                    <th>Order Sum</th>
                    <th style="width:200px; text-align: center;">Actions</th>
                </tr>
                <tr class="table-row" v-for="(order, index) in orders" :key="index">
                    <td>{{order.id}}</td>
                    <td>{{order.dateCreated}}</td>
                    <td>{{order.user.username}}</td>
                    <td>Waiting To Be Handled</td>
                    <td>{{order.totalOrderPrice}} KR</td>
                    <td style="width:200px;color:#000;">
                        <font-awesome-icon icon="user" class="icon"/>
                        <font-awesome-icon icon="pen" class="icon"/>
                        <font-awesome-icon icon="trash-alt" class="icon"/>
                    </td>
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
                    margin: 0px 20px;
                }
            }

        }
   }
</style>