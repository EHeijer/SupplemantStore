<template>
    <UserProfile/>
</template>
<script>
import UserProfile from '@/components/UserProfile.vue'
export default {
    components: {
        UserProfile
    },
    data: () => ({

    }),
    
    methods: {

    },
    mounted() {
        console.log(JSON.parse(localStorage.getItem('user')))
    }
}
</script>

<style>

</style>