<template>
  <div id="app">
    <router-view name="foo"></router-view>
    <header class="main-header">
      <h1>Todo App</h1>
    </header>
    <section class="input-section">
      <input v-model="todoText" type="text" />
      <button @click="addItem">추가</button>
    </section>
    <section class="list-section">
      <List :todos="todos" />
    </section>
    <Gallery :images="images" />
  </div>
</template>

<script>
import axios from "axios";
import List from "./components/list";
import Gallery from "./components/Gallery";
export default {
  name: "App",
  components: {
    List,
    Gallery,
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then((res) => {
        this.todos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      todoText: "안녕하세요",
      todos: [],
      images: [
        { src: require("./assets/img1.jpg"), alt: "바다1" },
        { src: require("./assets/img2.jpg"), alt: "바다2" },
        { src: require("./assets/img3.jpg"), alt: "바다3" },
        { src: require("./assets/img4.jpg"), alt: "바다4" },
      ],
    };
  },
  methods: {
    addItem() {
      const item = {
        id: this.todos.length + 1,
        title: this.todoText,
        completed: false,
      };
      this.todos.push(item);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}

h1 {
  padding: 1rem 0;
  background: #333;
  color: #fff;
  text-align: center;
}

.input-section {
  width: 100%;
  display: flex;
}

.input-section input {
  width: 90%;
  height: 30px;
}

.input-section button {
  width: 10%;
  border: none;
  background: #2c82c9;
  color: #fff;
}
</style>
