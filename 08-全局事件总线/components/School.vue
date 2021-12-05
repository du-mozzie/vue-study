<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "福建工程学院",
      address: "福建福州",
    };
  },
  methods: {
    alertName(name) {
      alert(name);
    },
  },
  mounted() {
    //需要接收数据提供一个方法给发送数据方
    this.$bus.$on("acceptStudentName", this.alertName);
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
