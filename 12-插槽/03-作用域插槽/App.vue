<template>
  <div class="container">
    <Category>
      <template scope="{films}">
        <ul>
          <li v-for="(item, index) in films" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category>
      <template scope="{films}">
        <ol>
          <li v-for="(item, index) in films" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category>
      <template scope="{films}">
        <h4 v-for="(item, index) in films" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "app",
  components: {
    Category,
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
