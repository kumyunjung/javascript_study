<template>
  <div id="app">
    <Topbar v-bind:msg="msg" />
    {{msg}} {{name}}
    <br />
    <br />
    <input type="text" v-model="name" />
    <label>제목</label>
    <input type="text" v-model="msg" />
    <bottom />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Topbar from "./components/Topbar";
import bottom from "./components/bottom";
export default {
  name: "App",
  components: {
    // HelloWorld
    Topbar,
    bottom
  },
  data() {
    return {
      msg: "Hello Vue JS11",
      name: "Jade"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 50px;
  background: pink;
  text-align: center;
  color: black;
}

.footer {
  width: 100%;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  text-align: center;
  background: #333;
  color: #fff;
}
</style>
