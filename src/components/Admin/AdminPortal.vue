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
            <div class="function">
                <font-awesome-icon icon="users" class="icon"/>
                <h2>VIEW USERS</h2>
            </div>
            <div class="function">
                <font-awesome-icon icon="tshirt" class="icon"/>
                <h2>VIEW PRODUCTS</h2>
            </div>
            <div class="function">
                <font-awesome-icon icon="history" class="icon"/>
                <h2>VIEW ORDER HISTORY</h2>
            </div>
            <div class="function">
                <font-awesome-icon icon="tasks" class="icon"/>
                <h2>VIEW ORDERS TO SEND</h2>
            </div>
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
        .admin-top {
            display: grid;
            grid-template-columns: 12% 88%;
            .admin-panel {
                height: 50%;
                background: #ff6900;
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
                border: solid 4px #ff6900;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                width: 100px;
                height: 100px;
                color: #ff6900;
            }
            }
            
        }
        .admin-functions-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            padding: 4rem 0;
            gap: 2rem;
            margin: auto;
            .function {
                border: solid #ff6900 2px;
                background: #fff;
                padding: 3rem 0.5rem;
                .icon {
                    width: 150px;
                    height: 150px;
                    color: #ff6900;
                }
                h2 {
                    color: #ff6900;
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