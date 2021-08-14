<template>
  <div class="home-recommends">
    <a :href="item.link" v-for="(item, index) in recommend.list" :key="index">
      <img :src="item.image" alt="" />
      <span v-text="item.title"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommends {
  display: flex;
  text-align: center;
  padding: 10px 0 30px 0;
  background-color: #fff;
  border-bottom: 10px solid #eee;
}
.home-recommends img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
.home-recommends a span {
  font-size: 14px;
}
</style>
