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
import { mapState, mapGetters,mapActions,mapMutations } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {

    // 直接写计算属性 $store.state.sum ...

    // 对象写法
    // ...mapState({ he: "sum", xuexiao: "school", kecheng: "subject" }),
    // ...mapGetters({ bigSum: "bigSum" }),

    // 数组写法
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(['bigSum'])

  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    //对象写法，    如果方法名一样也可以写成数组写法
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);    
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>
