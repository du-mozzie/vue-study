<template>
  <div>
    <h1>About页</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  // 组件守卫路由，进入该路由的时候触发
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next);
  },
  // 离开该路由的时候触发
  beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
  },
};
</script>

<style>
</style>
