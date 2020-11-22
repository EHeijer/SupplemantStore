<template>
    <div class="admin-container">
        <div class="admin-top">
            <div class="user-icon">
                <font-awesome-icon icon="user" class="icon"/>
            </div>
            <div class="admin-panel">
                <h1>ADMIN PORTAL</h1>
                <div class="home-and-logout">
                    <font-awesome-icon icon="home" class="icon home" @click="toHomePage()"/>
                    <font-awesome-icon icon="sign-out-alt" class="icon logout" @click="logout()"/>
                </div>
            </div>
        </div>
        <div class="admin-functions-container">
            
            <router-link :to="'admin/users'" class="function">
                <font-awesome-icon icon="users" class="icon"/>
                <h2>VIEW USERS</h2>
            </router-link>
            <router-link to="admin/products" class="function">
                <font-awesome-icon icon="tshirt" class="icon"/>
                <h2>VIEW PRODUCTS</h2>
            </router-link>
            <router-link to="admin/order-history" class="function">
                <font-awesome-icon icon="history" class="icon"/>
                <h2>VIEW ORDER HISTORY</h2>
            </router-link>
            <router-link to="admin/orders-to-handle" class="function">
                <font-awesome-icon icon="tasks" class="icon"/>
                <h2>VIEW ORDERS TO SEND</h2>
            </router-link>
        </div>    
    </div>
</template>
<script>
export default {
    data: () => ({

    }),
    
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
        },
        toHomePage(){
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
    .admin-container {
        padding-top: 100px;
        padding-left: 2rem;
        padding-right: 2rem;
        min-height: 95vh;
        .admin-top {
            display: grid;
            grid-template-columns: 12% 88%;
            padding: 1rem 0;
            .admin-panel {
                height: 50%;
                background: #5a5959;
                align-self: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0rem 1rem;
                h1{
                font-size: 40px;
                color: #fff;
                }
                .home-and-logout {
                    .icon {
                        color: #fff;
                        width: 30px;
                        height: 30px;
                    }
                    .icon:hover {
                        color: #000;
                    }
                    .home {
                        margin-right: 8px;
                    }
                }
            }
            
            .user-icon {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                border: solid 4px #5a5959;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                width: 100px;
                height: 100px;
                color: #5a5959;
            }
            }
            
        }
        .admin-functions-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 80%;
            
            
            margin: auto;
            .function {
                cursor: pointer;
                padding: 1rem 0.5rem;
                text-decoration: none;
                .icon {
                    width: 150px;
                    height: 150px;
                    color: #5a5959;
                }
                h2 {
                    color: #5a5959;
                    font-size: 20px;
                }
            }
            .function:hover {
                .icon {
                    color: #2f2f2f;
                }
                h2 {
                    color: #2f2f2f;
                }
            }
        }
    }
</style>