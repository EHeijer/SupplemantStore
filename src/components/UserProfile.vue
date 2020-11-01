<template>
<div class="user-profile-container">
    <div class="user-profile">
        <div class="profile-top">
            <font-awesome-icon icon="home" class="icon" />
            <font-awesome-icon style="margin-left: 10px;" icon="sign-out-alt" class="icon" />
        </div>
        <div class="profile-card">
            <h1>Profilsida</h1>
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

    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-profile-container {
        height: 90vh;
        display: flex;
        justify-content: center;
        
        padding-top: 100px;
        background: #fff;
        .user-profile {
            padding: 1rem 2rem 1rem 2rem;
            width: 100%;
            .profile-top {
                display: flex;
                justify-content: flex-end;
            }
            .icon {
                color: #ff6900;
                width: 40px;
                height: 40px;
            }
            .profile-card {
                // border: solid #000 2px;
                width: 400px;
                margin: auto;
                border-radius: 10px;
                h1 {
                color: #2f2f2f;
                padding: 1rem 0;
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
                    }
                
                }
                .profile-info {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    width: 220px;
                    text-align: left;
                    align-items: center;
                    margin: auto;
                    padding: 1rem 0;

                    .icon {
                        width: 25px;
                    }
                    p {
                        font-weight: bold;
                    }
                }
            }
            
        }
    }
</style>