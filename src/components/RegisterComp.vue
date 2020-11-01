<template>
   <div class="register">
       <div class="register-form">
         <h2 v-if="!successful">REGISTRERA DIG HÄR</h2>
         <form name="form" @submit.prevent="registerUser">
            <div v-if="!successful">
               <div class="input-name">
                  <input type="text" placeholder="Användarnamn" v-model="user.username" v-validate="'required|min:3|max:20'" name="username">
                  <div class="alert-danger" v-if="submitted && errors.has('username')">{{errors.first('username')}}</div>
               </div>
               <div class="input-address">
                  <input type="text" placeholder="Adress" v-model="user.address" v-validate="'required'" name="address">
                  <div class="alert-danger" v-if="submitted && errors.has('address')">{{errors.first('address')}}</div>
               </div>
               <div class="input-email">
                  <input placeholder="E-mail" v-model="user.email" v-validate="'required|email|max:50'" type="email" name="email">
                  <div class="alert-danger" v-if="submitted && errors.has('email')">{{errors.first('email')}}</div>
               </div>
               <div class="input-password">
                  <input type="password" placeholder="Lösenord" v-model="user.password" v-validate="'required|min:6|max:40'" name="password">
                  <div class="alert-danger" v-if="submitted && errors.has('password')">{{errors.first('password')}}</div>
               </div>
               <button class="click-button">Registrera</button>
            </div>
         </form>
      </div>
      <div class="alert" v-if="message" :class="successful ? 'alert-success' : 'alert-danger'">{{message}}</div>
   </div>
</template>

<script>
import User from '../models/user';
   export default {
     data: () => ({
       user:  new User('', '', '', ''),
         //  username: '',
         //  email: '',
         //  address: '',
         //  password: ''
         submitted: false,
         successful: false,
         message: ''
       }
       

     ),
     methods: {
        registerUser() {
           this.message = '';
           this.submitted = true;
           this.$validator.validate().then(isValid => {
              if(isValid) {
                 this.$store.dispatch('auth/register', this.user).then(
                    data => {
                       this.message = data.message;
                       this.successful = true;
                    },
                    error => {
                       this.message = 
                       (error.response && error.response.data) ||
                       error.message ||
                       error.toString();
                       this.successful = false;
                    }
                 )
              }
           });
        }
     },
     computed: {
        loggedIn() {
           return this.$store.state.auth.status.loggedIn;
        }
     },
      mounted() {
         if(this.loggedIn) {
            this.$router.push('/profile');
         }
      }
   }
</script>

<style lang="scss" scoped>
   .register {
      padding-top: 100px;
      min-height: 90vh;
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
         .click-button {
         width: 90%;
         margin: auto;
         border-style: none;
         font-size: 18px;
         }
      }
   }
</style>