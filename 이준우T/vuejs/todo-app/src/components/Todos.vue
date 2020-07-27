<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      @
      <Todoitem v-bind:todo="todo" />
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
};
</script>

<style>
</style>