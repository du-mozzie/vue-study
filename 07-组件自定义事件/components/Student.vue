<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">获取学生姓名</button>
    <button @click="unSend">解绑事件</button>
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
    sendStudentName() {
      this.$emit("du", this.name, 123);
      this.$emit("m1");
    },
    unSend() {
      //解绑一个事件
    //   this.$off("du");
	  //解绑所有的事件
      this.$off();
    },
  },
};
</script>
