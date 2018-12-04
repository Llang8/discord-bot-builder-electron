<template>
  <div id="home">
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
  }
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
</style>
