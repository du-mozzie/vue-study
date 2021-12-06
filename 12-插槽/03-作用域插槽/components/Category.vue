<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :films="films"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《大话西游》"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
