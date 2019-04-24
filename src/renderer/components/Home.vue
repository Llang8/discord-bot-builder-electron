<template>
  <div id="home"> <!-- TODO: Update home page with information on how to use bot builder -->
    <img style="height: 100px; width: 100px;" src="../assets/icons/png/logo.png"> 
    <h1>{{ msg }}</h1>
    <h2>Check out our website!</h2>
    <ul>
      <li><a href="https://www.simplebotbuilder.com" target="_blank">Website</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  
  data () {
    return {
      msg: 'Welcome to Simple bot builder'
    }
  },
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
