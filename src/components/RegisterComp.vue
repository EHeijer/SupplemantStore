<template>
   <div class="register">
       <div class="register-form">
         <h2>REGISTRERA DIG HÄR</h2>
         <div class="input-name">
            <input type="text" placeholder="Användarnamn" v-model="user.username">
         </div>
         <div class="input-address">
            <input type="text" placeholder="Adress" v-model="user.address">
         </div>
         <div class="input-email">
            <input type="text" placeholder="E-mail" v-model="user.email">
         </div>
         <div class="input-password">
            <input type="text" placeholder="Lösenord" v-model="user.password">
         </div>
         <router-link to="#"><button class="click-button" @click="registerUser()">Registrera</button></router-link>
      </div>
   </div>
</template>

<script>
   export default {
     data: () => ({
       user: {
          username: '',
          email: '',
          address: '',
          password: ''
       }
     }),
     methods: {
        registerUser() {
           this.$store.dispatch('userRegistration', this.user);
        }
     }
   }
</script>

<style lang="scss" scoped>
   .register {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .register-form {
         padding: 2rem 2rem;
         border: solid 2px  #000;
         border-radius: 15px;
         width: 600px;
         h2 {}
         input {
            width: 90%;
            padding: 1rem 1rem;
            border-style: none;
            background: rgb(233, 231, 231);
            border-radius: 5px;
            color: black;
            font-weight: bold;
            font-size: 18px;
         }
         .input-name {
            padding: 0.5rem 0;
         }
         .input-address {
            padding: 0.5rem 0;
         }
         .input-email {
            padding: 0.5rem 0;
         }
         .input-password {
            padding: 0.5rem 0;
         }
         a {
            text-decoration: none;
            
            .click-button {
            width: 90%;
            margin: auto;
            border-style: none;
            font-size: 18px;
            }
         }
         
      }
   }
</style>