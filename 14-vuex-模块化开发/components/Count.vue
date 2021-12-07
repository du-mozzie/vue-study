<template>
  <div>
    <h1>当前和为：{{ sum }}</h1>
    <h1>当前和放大10倍为：{{ bigSum }}</h1>
    <h1>我在{{ school }}学习：{{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数就+</button>
    <button @click="incrementWait(n)">过一会在+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>
