<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <!-- 绑定自定义事件 -->
    <!-- <Student @du="getStudentName"></Student> -->

    <Student ref="student" @m1="demo"></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  methods: {
    getStudentName(...param) {
      console.log("学生姓名是：" + param[0] + "，第二个参数：" + param[1]);
    },
    demo() {
      console.log("demo事件被触发");
    },
  },
  mounted() {
    this.$refs.student.$on("du", this.getStudentName);
  },
};
</script>
