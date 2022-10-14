<template>
  <nav class="header d-flex justify-content-arround align-items-center">
    <div class="header-left">
      <router-link to="/">Home</router-link>
      <router-link to="/listCard">All card</router-link>
      <router-link to="/listTransaction">All transactions</router-link>
    </div>
    <div class="header-right">
      <!-- <router-link to="/logout">Logout</router-link> -->
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>

nav {
  background-color: teal;
  padding: 30px;
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffa300;
}

.header-left,.header-right{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 45%;
    position: relative;
}


</style>
