<template>
  <div>
    <School></School>
    <button @click="showName">mixin使用</button>
  </div>
</template>

<script>
import School from "./components/school.vue";
// import {mixin} from './mixin'

export default {
  components: {
    School
  },
//   mixins: [mixin]
};
</script>

<style>
</style>
