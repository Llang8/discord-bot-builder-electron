<template>
    <div id='app'>
    
    <!-- Show login page if not logged in (Hide if "Continue without logging in" is selected as well) -->
    <login v-if="!loggedIn" class="login"></login>

    <!-- Sidenav wrapper -->
    <div id='mySidenav' class='sidenav'>
        <a href='javascript:void(0)' @click='toggleNav' >
            <i v-if='navOpen' class='closebtn fas fa-arrow-circle-left'></i>
            <i v-if='!navOpen' class=' fas fa-arrow-circle-right'></i>
        </a>
        <!-- Home link -->
        <router-link to='/' v-bind:style="[this.$router.currentRoute.path == '/' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fas fa-home'></i><span v-if='navOpen'> Home</span>
        </router-link>
        <!-- Discord link -->
        <router-link to='/discord' v-bind:style="[this.$router.currentRoute.path == '/discord' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fab fa-discord'></i></i><span v-if='navOpen'> Discord</span>
        </router-link>
        <!-- ManageBots Dashboard -->
        <router-link to='/managebots' v-bind:style="[this.$router.currentRoute.path == '/managebots' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fas fa-cog'></i><span v-if='navOpen'> Manage Bots</span>
        </router-link>
        <!-- Profile page -->
        <router-link v-if="isUser" to='/profile' v-bind:style="[this.$router.currentRoute.path == '/profile' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class="fas fa-user-circle"></i><span v-if='navOpen'> Profile</span>
        </router-link>
    </div>
    <!-- Use router view component to view selected page -->
    <div id='main'>
        <router-view style='color: white;'></router-view>
    </div>
    </div>
</template>
<script>
import Login from './components/Login.vue'

export default {
    data() {
        return {
            /* Controls viewing of extended nav */
            navOpen: false
        }
    },
    methods: {
        /*  Controls expanding and minimizing the navigation.
        *   When arrow on navbar is selected this function is
        *   called. toggleNav() will minimize the navbar when
        *   navOpen is set to true and maximize when false.
        */
        toggleNav() {
            /* If nav is open shrink icon sizes and bar; set navOpen to false */
            if(this.navOpen) {
                var elements = document.querySelectorAll('.sidenav a');
                for( var i = 0; i < elements.length; i++) {
                    elements[i].style.fontSize = '24px';
                    elements[i].style.textAlign = 'center';
                }

                document.getElementById('mySidenav').style.width = '50px';
                document.getElementById('main').style.marginLeft = '50px';
                this.navOpen = false;
            /* If nav is closed expand icon sizes and bar; set navOpen to true */
            } else {

                var elements = document.querySelectorAll('.sidenav a');
                for( var i = 0; i < elements.length; i++) {
                    elements[i].style.fontSize = '12px';
                    elements[i].style.textAlign = 'left';
                }

                document.getElementById('mySidenav').style.width = '125px';
                document.getElementById('main').style.marginLeft = '125px';


                this.navOpen = true;
            }
        }

    },
    computed: {
        /* Function returns property 'loggedIn' from global store
        *  Logged in keeps track of whether user is logged in (or has continued without logging in) or not.
        */
        loggedIn() {
            return this.$store.state.loggedIn;
        },
        /* Function returns property 'isUser' from global store
        *  isUser keeps track of whether or not the user is logged into
        *  an account or is using the program without logging in.
        */
        isUser() {
            return this.$store.state.isUser;
        }
    },
    components: {
        Login
    }

}
</script>
<style>
/* Import bootstrap */
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

/* Import Icons */
@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');

/* Import Fonts */
@import url('https://fonts.googleapis.com/css?family=Overpass|Chivo');

/* Global variables */
:root {
    --main-bg-color: #222629;
    --secondary-bg-color: #474B4F;
    --main-text-color: #6B6E70;
    --hover-text-color: white;
    --main-header-color: rgb(50, 148, 194);
    --secondary-header-color: rgb(47, 86, 137);
    --form-background-color: rgb(69, 69, 75);

}

.login {
    position: fixed;
    z-index: 1000;
    height: 100%;
    width: 100%;
    background: var(--main-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
}

/* BEGIN SIDENAV STYLES */

.sidenav {
    height: 100%;
    width: 50px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--secondary-bg-color);
    overflow-x: hidden;
    padding-top: 10px;
    transition: 0.5s;
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 24px;
    color: var(--main-text-color);
    display: block;
    transition: 0.3s;
    text-align: center;
}

.sidenav a:hover {
    color: var(--hover-text-color);
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 24px;
    margin-left: 50px;
    padding-top: 8px;
    transition: .03s;
}

/* Position and style the open button (top right corner) */
.sidenav .openbtn {
    position: absolute;
    top: 0;
    right: 0px;
    font-size: 24px;
    margin-left: 50px;
    padding: 8px;
    transition: .03s;
    text-align: center;
}

/* END SIDENAV STYLES */

/* Styles page content */
#main {
    transition: margin-left .5s;
    padding: 0px 20px 20px 20px;
    margin-left: 50px;
}

.title {
    color: var(--main-header-color);
    text-shadow: 4px 3px 0 #7A7A7A;
}

h1 {
    color: var(--main-header-color);
    font-size: 35px;
    font-family: 'Chivo';
}

h2 {
    color: var(--secondary-header-color);
    font-size: 25px;
    font-family: 'Chivo';
}

body {
    background-color: var(--main-bg-color);
    font-family: 'Overpass';
}

.form-control {
    border: 0px;
    box-shadow: inset -3px 3px 2px rgba(0,0,0,.2);
    text-shadow: 2px 2px rgba(0,0,0,.2);
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* Set custom scrollbar */
::-webkit-scrollbar {
        background-color: black;
        width: .8em
}

::-webkit-scrollbar-thumb:window-inactive,

::-webkit-scrollbar-thumb {
        background:  grey;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 800px) {
    .sidenav {padding-top: 15px;}
}
</style>
