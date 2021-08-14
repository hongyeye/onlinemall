<template>
  <ul id="tab-bar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
ul {
  display: flex;
  width: 100%;
  box-shadow: 0px 2px 2px 2px #f6f6f6;
}
</style>
