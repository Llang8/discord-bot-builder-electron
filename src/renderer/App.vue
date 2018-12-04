<template>
    <div id='app'>
    <header id='appHeader'>
        <div class="option" id='close' @click='closeWindow'><i class='far fa-window-close'></i></div>
        <div class="option" id='maximize' @click='toggleMax'><i class='far fa-window-maximize'></i></div>
        <div class="option" id='minimize' @click='minimize'><i class='far fa-window-minimize'></i></div>
    </header>
    <div id='mySidenav' class='sidenav'>
        <a href='javascript:void(0)' @click='toggleNav' >
            <i v-if='navOpen' class='closebtn fas fa-arrow-circle-left'></i>
            <i v-if='!navOpen' class=' fas fa-arrow-circle-right'></i>
        </a>
        <router-link to='/' v-bind:style="[this.$router.currentRoute.path == '/' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fas fa-home'></i><span v-if='navOpen'> Home</span>
        </router-link>
        <router-link to='/discord' v-bind:style="[this.$router.currentRoute.path == '/discord' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fab fa-discord'></i></i><span v-if='navOpen'> Discord</span>
        </router-link>
        <router-link to='/managebots' v-bind:style="[this.$router.currentRoute.path == '/managebots' ? {'color': 'var(--hover-text-color)'} : {'color': 'var(--main-text-color)'}]">
            <i class='fas fa-cog'></i><span v-if='navOpen'> Manage Bots</span>
        </router-link>
    </div>

    <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
    <div id='main'>
        <router-view style='color: white;'></router-view>
    </div>
    </div>
</template>
<script>
const remote = require('electron').remote;

export default {
    data() {
        return {
            navOpen: true
        }
    },
    methods: {
        toggleNav() {
            if(this.navOpen) {

                var elements = document.querySelectorAll('.sidenav a');
                for( var i = 0; i < elements.length; i++) {
                    elements[i].style.fontSize = '24px';
                    elements[i].style.textAlign = 'center';
                }

                document.getElementById('mySidenav').style.width = '50px';
                document.getElementById('main').style.marginLeft = '50px';
                this.navOpen = false;
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
        },
        closeWindow() {
            var window = remote.getCurrentWindow();
            console.log(window);
            window.close();
        },
        toggleMax() {
            var window = remote.getCurrentWindow();
            window.isMaximized() ? window.unmaximize() : window.maximize();
        },
        minimize() {
            var window = remote.getCurrentWindow();
            window.minimize();
        }

    }

}
</script>
<style>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');
/* The side navigation menu */
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 125px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: var(--secondary-bg-color);
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 10px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    margin-top: 30px;
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 12px;
    color: var(--main-text-color);
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: var(--hover-text-color);
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 24px;
    margin-left: 50px;
    padding-top: 8px;
    transition: .03s;
}

/* Position and style the close button (top right corner) */
.sidenav .openbtn {
    position: absolute;
    top: 0;
    right: 0px;
    font-size: 24px;
    margin-left: 50px;
    padding: 8px 8px 8px 8px;
    transition: .03s;
    text-align: center;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
    transition: margin-left .5s;
    padding: 20px;
    margin-left: 125px;
}

.title {
    color: var(--main-header-color);
    text-shadow: 4px 3px 0 #7A7A7A;
}

:root {
    --main-bg-color: #222629;
    --secondary-bg-color: #474B4F;
    --main-text-color: #6B6E70;
    --hover-text-color: white;
    --main-header-color: rgb(50, 148, 194);
    --secondary-header-color: rgb(47, 86, 137);

}

h1 {
    color: var(--main-header-color);
}

h2 {
    color: var(--secondary-header-color);
    font-size: 40px;
}

body {
    background-color: var(--main-bg-color);
}

header {
    display: flex;
    flex-direction: row-reverse;
    height: 30px;
    justify-content: flex-start;
    background: var(--secondary-bg-color);
    align-items: right;
    -webkit-app-region: drag;
    top: 0;
    position: fixed;
    width: 100%;
}

.option {
    color: var(--hover-text-color);
    font-size: 15px;
    padding: 2px 6px;
    cursor: pointer;
    -webkit-app-region: no-drag;
}


.option:hover {
    background: red;
}

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
