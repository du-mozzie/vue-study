<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeCreate() {
  //   clearInterval(this.timer)
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.1;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  //路由组件被激活触发
  activated() {
    this.timer = setInterval(() => {
      console.log("路由特有生命周期");
      this.opacity -= 0.1;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  //路由组件切走触发
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
