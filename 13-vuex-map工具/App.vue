<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
export default {
  name: "app",
  components: {
    Count,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>
