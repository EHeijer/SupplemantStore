<template>
   <div class="login-container">
      <div class="login-form">
         <h2>LOGGA IN PÅ DITT KONTO</h2>
         <form name="form" @submit.prevent="login()">
            <div class="input-name">
               <input type="text" v-validate="'required'" placeholder="Användarnamn" v-model="user.username" name="username">
               <div class="alert alert-danger" v-if="errors.has('username')" role="alert">Username is required</div>
            </div>
            <div class="input-password">
               <input type="password" v-validate="'required'" placeholder="Lösenord" v-model="user.password" name="password">
               <div class="alert alert-danger" v-if="errors.has('password')" role="alert">Password is required</div>
            </div>
            <button class="click-button">LOGGA IN</button>
            <div class="alert alert-danger" v-if="message" role="alert">{{message}}</div>
         </form>
         <div class="form-bottom">
            <div class="checkbox">
               <input type="checkbox" id="check">
               <label for="check">Kom Ihåg Mig</label>
            </div>
            <div class="forgot-password">
               <a href="#">Glömt Lösenordet?</a>
            </div>
         </div>
         <hr>
         <div class="register">
            <p>Har du inget konto?</p>
            <router-link to="/register"><button class="register-button">Registrera Dig Här</button></router-link>
         </div>
      </div>
   </div>
</template>

<script>
import User from '../models/user';
   export default {
     data: () => ({
       user: new User('',''),
       message: ''
     }),
     methods: {
        login() {
         //   this.$store.commit('initialiseStore');
         //   this.$store.dispatch('login', this.user);
         //   this.$router.push({path: '/profile'})
         this.$validator.validateAll().then(isValid => {
            if(!isValid) {
               return;
            }

            if(this.user.username && this.user.password) {
               this.$store.dispatch('auth/login', this.user).then(
                  () => {
                     this.$router.push('/profile');
                  },
                  error => {
                     this.message = 
                     (error.response && error.response.data) ||
                     error.message ||
                     error.toString();
                  }
               )
            }
         })
        }
     },
     computed: {
        loggedIn() {
           return this.$store.state.auth.status.loggedIn;
        }
     },
     created() {
        if(this.loggedIn) {
           this.$router.push('/profile');
        }
     }
   //   mounted() {
   //      this.$store.commit('initialiseStore');
   //  }
   }
</script>

<style lang="scss" scoped>
   .login-container {
      padding-top: 100px;
      min-height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(214, 214, 214);
       hr {
         border: 0;
         height: 0;
         border-top: 1px solid #ff6900;
         width: 90%;
         margin: auto;
         padding: 0.5rem 0;
      }
      .login-form {
         background: #fff;
         padding: 2rem 2rem;
         border-radius: 15px;
         width: 600px;
         min-height: 300px;
         border: solid 2px #000;
         h2 {
            
         }
         .input-name {
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
            margin: 1rem 0;
         }
         .input-password {
            input{
               width: 90%;
               padding: 1rem 1rem;
               background: rgb(233, 231, 231);
               border-style: none;
               border-radius: 5px;
               color: black;
               font-weight: bold;
               font-size: 18px;
            } 
            margin: 1rem 0;
         }
         .click-button {
            margin: auto;
            width: 90%;
            border-style: none;
            padding: 1rem;
            font-weight: bold;
            font-size: 18px;
         }
         .form-bottom {
            padding: 1rem 0;
            width: 90%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            .checkbox {
               label {
                  font-size: 14px;
                  font-weight: bold;
                  margin-left: 3px;
               }
            }
            .forgot-password {
               a {
                  text-decoration: none;
                  color: #000;
                  font-size: 14px;
                  font-weight: bold;
               }
            }
         }
         .register {
            display: flex;
            justify-content: center;
            p{
               padding-right: 4px;
               font-size: 14px;
               font-weight: bold;
            }
            a {
               padding-left: 4px;
               text-decoration: none;
               
               button {
                  border-style: none;
                  background: inherit;
                  color: #000;
                  font-size: 14px;
                  font-weight: bold;
               }
            }
         }
      }
   }
</style>