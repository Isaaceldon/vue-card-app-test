<template>
  <nav class="header d-flex justify-content-arround align-items-center">
    <div class="header-left">
      <router-link to="/">Home</router-link>
      <router-link to="/listCard">All card and Transactions</router-link>
    </div>
      
      <router-link v-show="!userToken" to="/register">Register</router-link>
      <router-link v-show="!userToken" to="/login">Login</router-link>
      
      <button class="btn btn-danger" v-show="userToken" @click="logout">Logout</button>
    <div class="header-right">
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      userToken:null,
    }
  },

  created() {
    this.userToken = localStorage.getItem('userToken');
  },
  methods:{
    logout(){
      localStorage.clear();
      // this.$router.push("/login");
      document.location.href = "/login";
    }
  }
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
  z-index: 100;
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
