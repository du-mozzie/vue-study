<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log('请重试',error.message);
        }
      );
    },
  },
};
</script>
