<template>
  <ul>
    <li
      @dblclick="itemDone(index)"
      v-for="(todo, index) in todos"
      :key="todo.id"
      :class="{completed: todo.completed===true}"
    >
      <span>{{todo.title}}</span>
      <a href="#" @click="deleteItem(index)">x</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    itemDone(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteItem(index) {
      if (this.todos[index].completed == true) {
        this.todos.splice(index, 1);
      }
    },
  },
};
</script>

<style>
ul > li {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

ul > li > a {
  width: 30px;
  height: 30px;
  background: red;
  color: #fff;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}

.completed {
  background: #efefef;
  color: #999;
}
</style>