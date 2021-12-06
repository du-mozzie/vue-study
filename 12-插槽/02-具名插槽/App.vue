<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        src="https://pica.zhimg.com/80/6651f2f811ec133b0e6d7e6d0e194b4c_720w.jpg?source=1940ef5c"
        alt="美食"
      />
      <a slot="footer" href="#">更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center" v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
      <div slot="footer" class="foot">
        <a href="#">动作</a>
        <a href="#">剧情</a>
        <a href="#">恐怖</a>
      </div>
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
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《大话西游》"],
    };
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
