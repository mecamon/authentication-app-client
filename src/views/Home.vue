<template>
  <div class="home">
    <auth-form :is-login="isLogin" />
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthForm from '../components/AuthForm.vue';

const isLogin = ref<boolean>(false);

</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

</style>