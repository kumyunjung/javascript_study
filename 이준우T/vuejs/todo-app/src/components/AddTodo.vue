<template>
  <div>
    <form>
      <input type="text" placeholder="할 일 입력..." />
      <input type="submit" value="저장" class="btn" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>