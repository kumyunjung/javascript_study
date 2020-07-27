<template>
  <header class="header">
    <h1>{{title}} {{time}}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  data() {
    return {
      time: new Date(),
    };
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