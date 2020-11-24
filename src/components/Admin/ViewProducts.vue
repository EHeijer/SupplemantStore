<template>
   <div class="admin-products-container">
       <div class="underlying"></div>
       
       <div class="products-table">
            <header>
                <p>All Products</p>
                <div class="add-product">
                    <font-awesome-icon @click="showProductForm" icon="plus-circle" class="icon"/>
                    <p>Add Product</p>
                    <RegisterProduct :newProduct="newProduct"/>
                </div>
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
                <tr class="table-row" v-for="(product, index) in getProductsNotRemoved" :key="index">
                    <td>{{product.id}}</td>
                    <td>{{product.brand}}</td>
                    <td>{{product.product_name}}</td>
                    <td>{{product.productCategory}}</td>
                    <td>{{product.price}} KR</td>
                    <td style="width:200px;color:#000; text-align: center;">
                        <font-awesome-icon @click="showProduct(product.id)" icon="pen" class="icon"/>
                        <font-awesome-icon @click="removeProduct(product)" icon="trash-alt" class="icon"/>
                    </td>
                    <div class="product-modal" :id="product.id">
                        <header>    
                            <p>Product details</p>
                            <font-awesome-icon @click="hideProduct(product.id)" icon="times" class="icon"/>
                        </header>
                        <div class="product-details">
                            
                            <div><img style="width:200px;" :src="require('@/assets/' + product.imageUrl)" alt=""></div>
                            <label for="brand">Brand</label>
                            <input name="brand" :placeholder="product.brand" v-model="product.brand">
                            
                            <label for="name">Product Name</label>
                            <input name="name" :placeholder="product.product_name" v-model="product.product_name">
                            
                            <label for="price">Price</label>
                            <input name="price" :placeholder="product.price" v-model="product.price">
                        </div>
                        <div class="button-container">
                            <button class="click-button" @click="updateProduct(product)">Update Product</button>
                        </div>
                    </div>
                </tr>
            </table>
        </div>
   </div>
</template>

<script>
import { mapState } from "vuex"
import RegisterProduct from '../Admin/RegisterProduct'
   export default {
    components: {
        RegisterProduct
    },
     data: () => ({
        newProduct: {
            imageUrl:'',
            brand:'',
            product_name: '',
            price: '',
            productCategory:''
        }
     }),
    
    methods: {
        showProduct(productId) {
             document.querySelector('.underlying').style.display = 'block';
             document.getElementById(productId).style.display = 'flex';
             document.querySelector('body').style.overflowY = "hidden";
         },
         hideProduct(productId) {
             document.querySelector('.underlying').style.display = 'none';
             document.getElementById(productId).style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
         },
        removeProduct(product) {
            product.removed = true;
            this.$store.dispatch("changeProductStatusToRemoved", product);
        },
        updateProduct(product) {
            this.$store.dispatch("updateProduct", product);
            this.hideProduct(product.id)
        },
        showProductForm() {
            document.querySelector('.underlying').style.display = 'block';
            document.querySelector('.new-product-form').style.display = 'flex';
            document.querySelector('body').style.overflowY = "hidden";
        }
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
.product-modal{
    position: fixed;
    background: #fff;
    top:50%;
    left: 50%;
    width: 500px;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    height:660px;
    header {
        width: 100%;
        .icon {
        position: absolute;
        left: 95%;
        top: 7px;
        font-size: 20px;
        }
    }
    .product-details {
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        label {
            width: 80%;
            text-align: left;
            margin: 2px 0;
        }
        input {
            width: 80%;
            padding: 0.7rem 0.3rem;
            color: #000;
            margin-bottom: 8px;
            border-radius: 3px;
            border: solid 2px rgba(0, 0, 0, 0.54);
            font-size: 16px;
        }
    }
    .click-button {
        margin: 1.5rem auto;
        border:none;
    }
}
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
                align-items: center;
                font-size: 22px;
                .add-product {
                    p{
                        font-size: 14px;
                    }
                }
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
                    margin: 0px 15px;
                }
            }

        }
   }
</style>