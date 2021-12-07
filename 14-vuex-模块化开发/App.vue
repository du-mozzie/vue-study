<template>
  <div>
    <Count />
    <hr>
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "app",
  components: {
    Count,
    Person,
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
