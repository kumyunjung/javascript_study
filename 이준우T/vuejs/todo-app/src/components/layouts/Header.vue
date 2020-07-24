<template>
  <header class="header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>