<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <HomeRecommends :recommend="recommend"></HomeRecommends>
    <HomeFeature></HomeFeature>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home";
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommends from "./childrenComponents/HomeRecommends";
import HomeFeature from "./childrenComponents/HomeFeature";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner;
      this.recommend = res.data.recommend;
    });
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0px;
  z-index: 9;
  width: 100%;
}
#home {
  padding: 44px 0;
}
</style>
