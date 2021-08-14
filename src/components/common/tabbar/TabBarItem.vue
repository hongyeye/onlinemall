<template>
  <li id="tab-bar-item" @click="itemClick" :style="{ color: styleActive }">
    <slot name="item-iconfont"></slot>
    <slot name="item-text"></slot>
  </li>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      defalut: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    styleActive() {
      return this.$route.path == this.path ? this.activeColor : null;
    },
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      // console.log(this.$router);
      //解决重复导航报错问题
      this.$route.path !== this.path ? this.$router.push(this.path) : null;
      // setTimeout(() => {
      //   console.log(this.$route.path); //为什么这里的输出结果和想象不一致:路由懒加载是异步的问题
      // }, 400)
    },
  },
};
</script>

<style scoped>
li {
  flex-grow: 1;
  height: 49px;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
li > span {
  font-size: 12px;
}
li > i {
  font-size: 25px;
}
</style>
