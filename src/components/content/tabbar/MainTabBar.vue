<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <i class="iconfont" slot="item-iconfont">&#xe89a;</i>
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#880099">
        <i class="iconfont" slot="item-iconfont">&#xe75d;</i>
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <i class="iconfont" slot="item-iconfont">&#xe760;</i>
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item :path="'/profile/' + userId" activeColor="#009923">
        <i class="iconfont" slot="item-iconfont">&#xe6f0;</i>
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
onlinemall\src\components\common\tabbar\TabBar.vue
<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.main-tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
