<template>
  <div id="app">
    <Test @addItem="addTodo" />
    <Header v-bind:title="pageTitle" />
    <AddTodo />
    <Todos v-bind:todos="todos" />
    <div>
      <h3>App.vue Data</h3>
      <p v-for="(item,index) in todos" :key="item.id">
        {{item.title}}
        <span class="delete-button" v-on:click="deleteItem(index)">x</span>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Test from "./components/Test";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo,
    Test,
  },
  methods: {
    deleteItem(index) {
      this.todos.splice(index, 1);
      console.log("deleted");
    },
    addTodo() {
      const item = { id: this.todos.length, title: "sleep", complete: false };
      this.todos.push(item);
    },
  },
  data() {
    return {
      display: true,
      color: "red",
      user: "Jade!",
      pageTitle: "Todo 앱",
      todos: [
        { id: 1, title: "dentist", complete: false },
        { id: 2, title: "study", complete: true },
        { id: 3, title: "dinner", complete: false },
        { id: 4, title: "sleep", complete: true },
        { id: 5, title: "sleep", complete: false },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.delete-button {
  color: red;
}
</style>
