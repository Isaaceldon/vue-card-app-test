<template>
  <div v-if="errors.length" class="alert alert-danger">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  props: ["errors"],
};
</script>

<style>
</style>