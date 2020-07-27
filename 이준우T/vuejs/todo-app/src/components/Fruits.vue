<template>
  <div>
    <h3>반복문 연습</h3>
    <input type="text" v-model="search" @input="getSearch" />

    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        <p>{{fruit.id}}. {{fruit.name}}</p>
        <span :style="`color${fruit.color}`">{{fruit.like}}</span>
      </li>
    </ul>
    <button v-on:click="getLike()">like</button>
    <button v-on:click="getHate()">hate</button>
    <button v-on:click="getRed()">Red</button>
    <button v-on:click="getMini()">3보다작은것</button>
  </div>
</template>

<script>
export default {
  name: "fruits",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "apple",
          color: "red",
          like: false,
        },
        {
          id: 2,
          name: "banana",
          color: "yellow",
          like: false,
        },
        {
          id: 3,
          name: "grape",
          color: "purple",
          like: true,
        },
        {
          id: 4,
          name: "strawberry",
          color: "red",
          like: false,
        },
        {
          id: 5,
          name: "pear",
          color: "yellow",
          like: true,
        },
      ],
      search: "",
      fruits: [],
    };
  },
  mounted() {
    this.fruits = this.list;
  },
  methods: {
    getSearch() {
      const newFruits = this.list.filter((fruit) => {
        return fruit.name === "search";
      });
      this.fruits = newFruits;
    },
    getLike() {
      //map, filter, reduce
      //map은 어떤 배열을 다른 성격의 배열로 바꿀때
      //   const newFruit = this.fruits.map((fruit) => {
      //     fruit.id = fruit.id * 10;
      //     return fruit;
      //   });
      //   const newFruits = this.fruits.filter((fruit) => {
      //     return fruit.like === true;
      //   });
      //   this.fruits = newFruits;
      //   console.log(newFruits);
    },
    getHate() {
      const hateFruits = this.fruits.filter((fruit) => {
        return fruit.like === false;
      });
      this.fruits = hateFruits;
      console.log(hateFruits);
    },
    getRed() {
      const redFruits = this.fruits.filter((fruit) => {
        return fruit.color === "red";
      });
      this.fruits = redFruits;
      console.log(redFruits);
    },
    getMini() {
      const min = this.fruits.filter((fruit) => {
        return fruit.id < 3;
      });
      this.fruits = min;
      console.log(min);
    },
  },
};
</script>

<style>
</style>

 <!-- <span>{{index+1}}</span>
        <span v-if="fruit.color==='red'">{{fruit.name}}</span>
        의 색깔은
        <span :style="`color:${fruit.color}`">{{fruit.color}}</span>-->