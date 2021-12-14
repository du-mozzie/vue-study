<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 字符串拼接query写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

        <!-- 字符串拼接params写法-->
        <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link>

        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>

        <!-- 路由传参query对象写法 -->
        <!-- <router-link
          :to="{
            name: 'detail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link> -->

        <!-- 路由传参params对象写法，如果是对象写法的params必须用name,不能用path -->
        <!-- <router-link
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link> -->
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "detail",
        params: { id: item.id, title: item.title },
      });
    },
    replaceShow({ id, title }) {
      this.$router.replace({
        name: "detail",
        params: { id, title },
      });
    },
  },
  beforeDestroy() {
    console.log("路由切换的时候组件被销毁");
  },
};
</script>

<style>
</style>
