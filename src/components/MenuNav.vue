<template>
  <div class="body">
    <nav>
      <ul>
        <router-link class="link" to="/">Home</router-link> |
        <router-link class="link" to="/aigua">Aigua</router-link> |
        <router-link class="link" to="/llista">Llista</router-link> |
        <router-link class="link" to="/store">Fake Store</router-link> |
        <router-link class="link" to="/watch">Watch</router-link> |
        <router-link class="link" to="/provInject">Provide & Inject</router-link> |
        <router-link class="link" to="/propsEmit">Emit</router-link>

      </ul>
    </nav>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
nav {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 50px;
}

.body {
  padding-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
.link {
  display: inline-block;
  margin: 0 10px;
  color: #42b983;
  transition: ease-in-out .2s;
}

.link:hover{
  color: #222;
}

</style>
