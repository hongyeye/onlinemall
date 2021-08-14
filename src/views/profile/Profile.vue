<template>
  <div>
    <h2>我的</h2>
    <hr />
    <h4>
      动态路由，使用this.$route.params.userId获取：{{
        this.$route.params.userId
      }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped></style>
