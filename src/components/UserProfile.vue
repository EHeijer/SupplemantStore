<template>
<div class="user-profile-container">
    <div class="user-profile">
        <h1>Profilsida</h1>
        <div class="profile-icon">
            <font-awesome-icon icon="user" class="icon" />
        </div>
        <h2 class="">{{currentUser.username}}</h2>
        <div class="profile-info">
            <p>{{currentUser.email}}</p>
            <p>{{currentUser.address}}</p>
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
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        .user-profile {
            border: solid #ff6900 2px;
            padding: 1rem 4rem 3rem 4rem;
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
                 background: #ff6900;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 margin-bottom: 1rem;
                .icon {
                    width: 70px;
                    height: 70px;
                    color: #fff;
                }
               
            }
            .profile-info {
                margin: auto;
                padding: 1rem 0;
            }
        }
    }
</style>