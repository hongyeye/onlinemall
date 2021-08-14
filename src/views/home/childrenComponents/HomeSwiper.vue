<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banner.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
/* hit you with that ddu du ddu du */
