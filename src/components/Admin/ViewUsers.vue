<template>
    <div class="user-container">
        
        <div class="user-table">
            <header>
                <p>All Users</p>
                <font-awesome-icon icon="user-plus" class="icon"/>
            </header>
            <table class="table">
                <tr class="table-top">
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Access Level</th>
                    <th style="width:200px; text-align: center;">Actions</th>
                </tr>
                <tr class="table-row" v-for="(user, index) in users" :key="index">
                    <td>{{user.id}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td v-if="getRoles(user) == 'admin'" >Admin</td>
                    <td v-if="getRoles(user) == 'employee'">Employee</td>
                    <td v-if="getRoles(user) == 'customer'">Customer</td>
                    <td style="width:200px;">
                        <font-awesome-icon icon="user" class="icon"/>
                        <font-awesome-icon icon="pen" class="icon"/>
                        <font-awesome-icon icon="trash-alt" class="icon"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>
<script>
import { mapState } from "vuex"
export default {
    data: () => ({

    }),
    
    methods: {
        getRoles(user) {
            let roleNames = []
            user.roles.forEach(role => {
                roleNames.push(role.name);
            });
            if(roleNames.includes("ROLE_ADMIN")){
                return "admin"
            }else if (roleNames.includes("ROLE_ADMIN") && !roleNames.includes("ROLE_ADMIN")){
                return "employee"
            }else {
                return "customer";
            }
        } 
    },

    computed: {
        ...mapState([
          'users'
      ]),

      
    },
    mounted(){
      this.$store.dispatch('loadUsers')
    }
}
</script>

<style lang="scss" >
    .user-container {
        padding-top: 120px;
        padding-bottom: 50px;
        max-width: 1538px;
        min-height: 90vh;
        margin: auto;
        .user-table {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
            width: 80%;
            margin: auto;
            header {
                background: #9b9a9a;
                color: #fff;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                font-size: 22px;
               
            }
            .table {
                border-collapse: collapse;
                color: #9b9a9a;
                
                .table-top {
                   
                   
                    
                    th {
                        padding: 1.4rem 1rem;
                    }
                }
                width:100%;
                
                text-align: left;
                .table-row td{
                    border-top: 1px solid #9b9a9a;
                    border-bottom: 1px solid #9b9a9a;
                    padding: 1rem;
                }
                .table-row td .icon {
                    margin: 0px 20px;
                }
            }

        }
        
    }
</style>