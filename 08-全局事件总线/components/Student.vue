<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我把学生姓名给学校</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Du",
      age: 20,
    };
  },
  methods: {
    showName() {
      this.$bus.$emit("acceptStudentName", this.name);
    },
  },
};
</script>
