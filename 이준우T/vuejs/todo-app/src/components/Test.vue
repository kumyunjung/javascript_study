<template>
  <div id="test">
    <button @click="$emit('addItem',)">추가</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#test {
  padding: 50px 0;
  height: 400px;
}
</style>