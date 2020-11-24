<template>
    <div class="new-product-form">
        <header>
            <h3>Product Form</h3>
            <font-awesome-icon @click="hideProductForm" icon="times" class="icon"/>
        </header>
        <div class="inputs">
            <input placeholder="Image" v-model="newProduct.imageUrl">
            <input placeholder="Brand" v-model="newProduct.brand">
            <input placeholder="Product Name" v-model="newProduct.product_name">
            <input placeholder="Price" v-model="newProduct.price">
            <input placeholder="Category" v-model="newProduct.productCategory">
        </div>
        <button @click="addProduct" class="click-button">Save Product</button>
    </div>
</template>

<script>
   export default {
    props: {
        newProduct: Object
    },
     data: () => ({
       
     }),
     methods: {
         addProduct() {
             this.$store.dispatch("addProduct", this.newProduct);
             document.querySelector('.underlying').style.display = 'none';
             document.querySelector('.new-product-form').style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
         },
         hideProductForm() {
             document.querySelector('.underlying').style.display = 'none';
              document.querySelector('.new-product-form').style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
        },
     },
   }
</script>

<style lang="scss" scoped>
   .new-product-form{
    position: fixed;
    background: #fff;
    top:50%;
    left: 50%;
    width: 400px;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    height:500px;
    header {
        width: 100%;
        background: #5a5959;
        text-align: left;
        padding: 1rem 0.5rem;
        .icon {
        position: absolute;
        left: 94.5%;
        top: 7px;
        font-size: 20px;
        }
    }
    .inputs {
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
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
</style>