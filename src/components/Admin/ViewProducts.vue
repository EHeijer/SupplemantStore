<template>
   <div class="admin-products-container">
       <div class="products-table">
            <header>
                <p>All Products</p>
                <font-awesome-icon icon="user-plus" class="icon"/>
            </header>
            <table class="table">
                <tr class="table-top">
                    <th>Product ID</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th style="width:200px; text-align: center;">Actions</th>
                </tr>
                <tr class="table-row" v-for="(product, index) in products" :key="index">
                    <td>{{product.id}}</td>
                    <td>{{product.brand}}</td>
                    <td>{{product.product_name}}</td>
                    <td>{{product.productCategory}}</td>
                    <td>{{product.price}} KR</td>
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
          'products'
      ]),

      
    },
    mounted(){
      this.$store.dispatch('loadProducts')
    }
   }
</script>

<style lang="scss" scoped>
   .admin-products-container {
        padding-top: 120px;
        padding-bottom: 50px;
        max-width: 1538px;
        min-height: 95vh;
        margin: auto;

        .products-table {
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