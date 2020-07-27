<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <Todoitem v-bind:todo="todo" v-on:delete-todo="deleteItem" />
    </div>
  </div>
</template>

<script>
import Todoitem from "./Todoitem";
export default {
  components: {
    Todoitem,
  },
  props: { todos: Array },
  methods: {
    deleteItem(id) {
      console.log("emit requested", id);
    },
  },
};
</script>

<style>
</style>