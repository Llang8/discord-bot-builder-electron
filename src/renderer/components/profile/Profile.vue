<template> <!-- TODO: Show user info and allow editing -->
    <div id="auth">
        <h1>User Profile</h1>
        <h2>{{ user.email }}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loggedIn: false
        }
    },
    computed: {
        /* Get user info from store */
        user() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        }
    }
}   
</script>
<style>
</style>