<template>
<div class="user-profile-container">
    <div class="user-profile">
        <div class="profile-top">
            <font-awesome-icon icon="home" class="icon home" @click="toHomePage"/>
            <font-awesome-icon icon="sign-out-alt" class="icon logout" @click="logout()"/>
        </div>
        <div class="profile-card">
            
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
        height: 95vh;
        padding: 110px 3rem 0 3rem;
        .user-profile {
            width: 100%;
             .profile-top {
                    display: flex;
                    justify-content: flex-end;
                    .icon {
                    color: #5a5959;
                    width: 40px;
                    height: 40px;
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
            .profile-card {
                
                padding: 1rem;
                
                width: 400px;
                height: 70vh;
                margin: auto;
                border-radius: 5px;
               
                .profile-icon {
                    width: 120px;
                    height: 120px;
                    margin: auto;
                    border-radius: 50%;
                    border: solid 2px #5a5959;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 1rem;
                    .icon {
                        width: 70px;
                        height: 70px;
                        color: #5a5959;
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
                        color: #5a5959;
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