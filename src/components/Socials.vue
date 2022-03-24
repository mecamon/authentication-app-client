<template>
  <div class="socials">
<!--    <img src="../assets/images/Google.svg" data-testid="social-google-icon" alt="google icon">-->
<!--    <img src="../assets/images/Facebook.svg" data-testid="social-facebook-icon" alt="facebook icon">-->
<!--    <img src="../assets/images/Twitter.svg" data-testid="social-twitter-icon" alt="twitter icon">-->
    <img src="../assets/images/Gihub.svg" data-testid="social-github-icon" @click.prevent="$emit('github-login')" alt="github icon">
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{(e: 'github-login'): void}>()
</script>

<style lang="scss">
  div.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 22px 0;
    img {
      margin: 0 0.4rem;
      width: 42px;
      height: auto;
      cursor: pointer;
    }
  }
</style>
