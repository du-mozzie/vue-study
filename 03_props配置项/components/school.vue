<template>
  <div>
    <div>{{ name }}</div>
    <div>prop属性接收参数：{{ address }}</div>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "fjut",
    };
  },
  // 直接使用数组传参
  //   props:['address']

  //指定类型
//   props: {
//       address: String
//   },
    props:{
        address:{
            //是否必须
            // require:true,
            //指定类型
            type: String,
            //默认值，require:true时设置默认值就没有什么意义了
            default: "福建",
        }
    }
};
</script>

<style>
</style>
