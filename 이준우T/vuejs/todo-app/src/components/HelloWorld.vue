<template>
  <ul class="hello">
    <li v-for="city in cities" v-bind:key="city">{{city}}</li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    cities: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
