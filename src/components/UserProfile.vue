<template>
<div class="user-profile-container">
    <div class="user-profile">
        <div class="profile-card">
            <div class="profile-top">
                <font-awesome-icon icon="home" class="icon home" @click="toHomePage"/>
                <font-awesome-icon icon="sign-out-alt" class="icon logout" @click="logout()"/>
            </div>
            <div class="profile-icon">
                <font-awesome-icon icon="user" class="icon" />
            </div>
            <h2 class="">{{currentUser.username}}</h2>
            <div class="profile-info">
                <font-awesome-icon icon="envelope" class="icon" />
                <p>{{currentUser.email}}</p>
                <font-awesome-icon icon="house-user" class="icon" />
                <p>{{currentUser.address}}</p>
            </div>
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
    },
    computed: {
        currentUser() {
            // return this.$store.state.currentUser;
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if(!this.currentUser) {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-profile-container {
        height: 90vh;
        padding-top: 110px;
        .user-profile {
            width: 100%;
            .profile-card {
                box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
                padding: 1rem;
                background: #fff;
                width: 400px;
                height: 70vh;
                margin: auto;
                border-radius: 5px;
                .profile-top {
                    display: flex;
                    justify-content: flex-end;
                    .icon {
                    color: #ff6900;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    }
                    .home {
                        margin-right: 7px;
                    }
                    .logout {
                
                    }
                    .icon:hover {
                        color: #000;
                    }
                }
                .profile-icon {
                    width: 120px;
                    height: 120px;
                    margin: auto;
                    border-radius: 50%;
                    border: solid 2px #ff6900;
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 1rem;
                    .icon {
                        width: 70px;
                        height: 70px;
                        color: #ff6900;
                        justify-self: center;
                    }
                
                }
                .profile-info {
                    display: grid;
                    grid-template-columns: 20% 80%;
                    text-align: left;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                    padding: 1rem 0;
                    gap: 1rem;
                    .icon {
                        width: 25px;
                        height: 25px;
                        color: #ff6900;
                        justify-self: end;
                    }
                    p {
                        font-weight: bold;
                    }
                }
            }
            
        }
    }
</style>