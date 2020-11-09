<template>
    <header>
        <div class="header-container">
            <router-link to="/" class="title"><h1>SUPPLEMENT STORE</h1></router-link>
            <!-- <div class="search-box">
                <img src="../assets/search-solid.svg" alt="">
                <input type="text">
            </div> -->
            <ul class="product-list">
                <li><router-link to="/products">ALLA PRODUKTER</router-link></li>
                <li><router-link to="">KOSTILLSKOTT</router-link></li>
                <li><router-link to="">TRÄNINGSKLÄDER</router-link></li>
            </ul>
            <ul class="nav-list">
                <router-link to="/shoppingCart" class="shopping-cart"> <img src="../assets/shopping-cart-solid.svg" alt=""><span class="cart-items-counter" v-if="cart.length > 0">{{cart.length}}</span><p>VARUKORG</p></router-link>
                <router-link to="#" class="log-in" v-if="!currentUser" @click.native="toLogin()"><img src="../assets/user-solid.svg" alt=""><p>LOGGA IN</p></router-link>
                <router-link to="/profile" class="log-in" v-if="currentUser"><img src="../assets/user-solid.svg" alt=""><p>MITT KONTO</p></router-link>
            </ul>
        </div>
    </header>

</template>
<script>
export default {
    components: {
        
    },
    data: () => ({

    }),
    
    methods: {
        toLogin(){
            this.$store.state.login = true;
            document.querySelector('body').style.overflowY = "hidden"
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        loggedIn() {
           return this.$store.state.auth.status.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    created() {
        // this.$store.commit('initialiseStore');
    }
}
</script>

<style lang="scss" scoped>
    
    header {
        background: #2f2f2f;
        padding: 1.4rem;
        position: fixed;
        width: 100vw;
        .underlying-with-opacity{
         position: absolute;
         background: black;
         top:0;
         left: 0;
         height: 100vh;
         width: 100vw;
         z-index: 1;
         opacity: 0.7;
         overflow-y: scroll;
      }
        .header-container{
            
            display: grid;
            grid-template-columns: 30% 50% 20%;
            justify-content: space-between;
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
                justify-self: center;
                display: flex;
                gap: 2rem;
                justify-content: space-evenly;
                color: #fff;
                font-size: 13px;
                font-weight: bold;
                    a:hover {
                        transform: scale(1.1);
                    }
                    .log-in {
                        text-decoration: none;
                        color: #fff;
                        img {
                            width: 19px;
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
                // padding: 1rem 0 0 0;
                justify-self: center;
                margin-left: 1rem;
                li {
                    margin: auto;
                    padding: 0 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    height: 100%;
                    a{
                        color: #fff;
                        text-decoration: none;
                        font-size: 15px;
                        font-weight: bold;
                        text-align: left;
                    }
                    a:hover {
                        color: #ff6900;
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