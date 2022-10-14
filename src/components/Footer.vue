<template>
  <div class="text-center footer">
    <p>Copyright@ All rights reserved !</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  bottom: 0px;
  margin-top: 100px;
  background-color: teal;
  padding: 30px;
  width: 100%;
  position: fixed;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
}

.footer p{
    color :white;
}
</style>
