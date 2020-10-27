<template>
   <div class="form-container">
       <LoginComp v-show="registered"/>
       <RegisterComp v-show="!registered"/>
   </div>
</template>

<script>
    //  import LoginComp from('@/components/LoginComp.vue')
    //  import RegisterComp from('@/components/RegisterComp.vue')
    export default {
        components: {
            //  LoginComp,
            //  RegisterComp
        },
        data: () => ({
            registered: true
        })
    }
</script>

<style lang="scss" scoped>
   
</style>