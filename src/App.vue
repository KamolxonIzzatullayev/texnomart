<template>
  <nav>
    <router-link to="/todos">First task | </router-link>
    <router-link to="/table"> Second task | </router-link>
    <router-link :to="user ? '/products' : '/auth'"> Third task</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    user() {
      return localStorage.getItem("username");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
