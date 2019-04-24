<template>
    <div id="login">
        <div class="login-box" v-if="signingIn">
            <div class="login-header">
                <img style="height: 100px; width: 100px;" src="../assets/icons/png/logo.png"> 
                <h3>Welcome Back!</h3>
            </div>
            <form id="login-form">
                <label for="email">Email</label>
                <input id="email" class="form-control" type="text" v-model="email"></input>
                <label for="password">Password</label>
                <input id="password" class="form-control" type="password" v-model="password"></input>
                <p class="click-text" @click="forgotPassword">Forgot your password?</p>
                <button class="btn btn-login" @click="signIn">Sign In</button>
            </form>
            <button class="btn btn-nologin" @click="continueNoLogin">Continue Without Logging In</button>
            <p>Don't have an account? <span class="click-text" @click="signingIn = !signingIn">Create one.</span></p>
        </div>
        <div class="login-box" v-if="!signingIn">
            <div class="login-header">
                <img style="height: 100px; width: 100px;" src="../assets/icons/png/logo.png"> 
                <h3>Create an Account</h3>
            </div>
            <label for="email">Email</label>
            <input id="email" class="form-control" type="text" v-model="email"></input>
            <label for="password">Password</label>
            <input id="password" class="form-control" type="password" v-model="password"></input>
            <br>
            <button class="btn btn-login" @click="signUp">Sign Up</button>
            <p>Already have an account? <span class="click-text" @click="signingIn = !signingIn">Login.</span></p>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            signingIn: true,
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            var ctx = this;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    console.log(user);
                    ctx.$store.state.loggedIn = true;
                    ctx.$store.state.isUser = true;
                    ctx.$store.state.user.email = user.user.email;
                    ctx.$store.state.user.uid = user.user.uid;
                    ctx.$store.state.user.emailVerified = user.user.emailVerified;
                },
                function(err) {
                    alert(err.message);
                }
            )

        },
        signUp() {
            console.log(firebase);
            /* Attempt to create user with firebase */
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    console.log(user);
                },
                function(err) {
                    alert(err.message);
                }
            )
        },
        continueNoLogin() {
            this.$store.state.loggedIn = true;
        },
        forgotPassword() {

        }
    }
}

</script>
<style>
.login-box {
    background: var(--secondary-bg-color);
    width: 400px;
    padding: 10px;
    color: white;
    border-radius: 5px;
}
.login-header {
    text-align: center;
}
.btn-login {
    width: 100%;
    background: var(--main-header-color);
    color: white !important;
    margin-top: 5px;
}
.btn-nologin {
    width: 100%;
    background: var(--main-bg-color);
    color: white !important;
    margin-top: 5px;
}
.click-text {
    color: var(--main-header-color);
    cursor: pointer;
}
</style>