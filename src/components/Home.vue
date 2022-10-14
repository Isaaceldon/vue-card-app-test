<template>
 <div class="home-container">
  <div class="home">
    <h1>Welcome !!!</h1>
    <h3>Do you want to create your own debit card ? click the button below</h3>

    <router-link to="/newCard" class="btn btn-success">Create new card</router-link>
  </div>
 </div>
</template>

<script>
export default {
name:"HomeComponent"
}
</script>

<style>
.home-container{
 top: 100px ;
 position: relative;
}
.home{
  margin: 100px auto;
  width:50%;
  position: relative;
}
</style>