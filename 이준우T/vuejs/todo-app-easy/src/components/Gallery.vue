<template>
  <section class="gallery-section">
    <ul>
      <li @click="changeImg(image.src)" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </li>
    </ul>
    <div class="image-container">
      <p :alt="displayAlt">{{displayAlt}}</p>
      <img :src="displaySrc" alt="image" />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    changeImg(src) {
      this.displaySrc = src;
      console.log(src);
    },
  },
  props: {
    images: Array,
  },
  data() {
    return {
      displaySrc: "https://placeimg.com/500/500/any",
      displayAlt: "",
    };
  },
};
</script>

<style scoped>
.gallery-section > ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
}

.gallery-section > ul > li {
  max-height: 200px;
  /* border: 1px solid red; */
  padding: 0;
}

.gallery-section > ul img {
  width: 100%;
  object-fit: cover;
}
.image-container > img {
  width: 300px;
  object-fit: cover;
}
</style>