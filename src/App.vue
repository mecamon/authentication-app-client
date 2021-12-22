<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import url('./assets/_core.scss');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--main-font-family);
  color: var(--common-text-color);
} 
// SOFT-TRANSITION-TO-DARK-THEME
* {
  transition: all 0.4s linear 0.1s;
}
body {
  background-color: var(--background-color);
  margin: 0 auto;
}
button {
  cursor: pointer;
}
button:disabled {
  opacity: 0.7;
}
</style>
