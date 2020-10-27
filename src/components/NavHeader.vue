<template>
    <header>
        <div class="header-container">
            <router-link to="/" class="title"><h1>SUPPLEMANT STORE</h1></router-link>
            <div class="search-box">
                <img src="../assets/search-solid.svg" alt="">
                <input type="text">
            </div>
            <ul class="nav-list">
                <router-link to="/login" class="log-in"> <img src="../assets/user-solid.svg" alt=""><p>LOGGA IN</p></router-link>
                <router-link to="/shoppingCart" class="shopping-cart" @click="showCart()"> <img src="../assets/shopping-cart-solid.svg" alt=""><span class="cart-items-counter" v-if="cart.length > 0">{{cart.length}}</span><p>VARUKORG</p></router-link>
            </ul>
            <ul class="product-list">
                <li><router-link to="/products">ALLA PRODUKTER</router-link></li>
                <li><router-link to="">KOSTILLSKOTT</router-link></li>
                <li><router-link to="">TRÄNINGSKLÄDER</router-link></li>
            </ul>
        </div>
        
    </header>

</template>
<script>

export default {
    data: () => ({

    }),
    
    methods: {
        showCart() {
            console.log(this.cart);
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: #000;
        padding: 1rem;
        position: fixed;
        width: 100vw;
        .header-container{
            
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-evenly;
            .title{
                text-decoration: none;
                h1 {
                color: #ff6900;
                }
            }
            
            .search-box{
                position: relative;
                display: flex;
                // background-image: url("../assets/search-solid.svg");
                // background-repeat: no-repeat;
                // background-size: 25px;
                // background-origin: content-box;
                // background-position: 0.5rem center;
                img {
                    position: absolute;
                    width: 20px;
                    top: 10px;
                    left: 2%;
                }
                input{
                    padding: 0 2rem;
                    width: 100%;
                    border-radius: 30px;
                    border: none;
                }
            }
            .nav-list {
                list-style: none;
                display: grid;
                justify-content: center;
                grid-template-columns: repeat(5, 1fr);
                color: #fff;
                font-size: 13px;
                font-weight: bold;
                    .log-in {
                        text-decoration: none;
                        color: #fff;
                        img {
                            width: 20px;
                        }
                    }
                    .shopping-cart {
                        position: relative;
                        cursor: pointer;
                        text-decoration: none;
                        color: #fff;
                        img{
                            width: 25px;
                        }
                        .cart-items-counter {
                            border-radius: 30px;
                            background: red;
                            padding: 2px 6px;
                            position: absolute;
                            color: #fff;
                            top: -25%;
                            left: 50%;
                        }
                    }
                    .checkout {
                        display: flex;
                        a {
                            border: solid 2px #ff6900;
                            color: #fff;
                            text-decoration: none;
                            padding: 0.5rem 1rem;
                            display: flex;
                            align-items: center;
                        }
                    }
            
            }
            .product-list {
                display: grid;
                grid-template-columns: 35% 30% 35%;
                list-style: none;
                color: #fff;
                padding: 1rem 0 0 0;
                justify-self: center;
                margin-left: 1rem;
                li {
                    margin: 0 0rem;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: left;
                    
                    a{
                        color: #fff;
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: bold;
                        text-align: left;
                    }
                }
                li:nth-child(1){
                    border-right: solid #fff 1px;
                }
                li:nth-child(2){
                    border-right: solid #fff 1px;
                    
                }
            }
        }
    }
</style>