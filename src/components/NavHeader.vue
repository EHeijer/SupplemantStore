<template>
    <header>
        <div class="header-container">
            <h1>SUPPLEMANT STORE</h1>
            <div class="search-box">
                <img src="../assets/search-solid.svg" alt="">
                <input type="text">
            </div>
            <ul class="nav-list">
                <li class="log-in"> <img src="../assets/user-solid.svg" alt=""><p>LOGGA IN</p></li>
                <li class="shopping-cart"> <img src="../assets/shopping-cart-solid.svg" alt=""><p>VARUKORG</p></li>
            </ul>
        </div>
        
    </header>

</template>
<script>
export default {
    data: () => ({

    }),
    
    methods: {

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
            h1 {
                color: #ff6900;
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
                        img {
                            width: 20px;
                        }
                    }
                    .shopping-cart {
                        img{
                            width: 25px;
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
        }
    }
</style>