<template>
  <div class="home">
    <h1>Home page</h1>
    <h2>{{ $t("message.hello") }}</h2>
    <h2>{{ getTitleDescription }}</h2>
    <h2>This is the numerical value product: {{ getNumericalProduct }}</h2>
    <button @click="example.increment">Increment numerical value</button>
    <button @click="example.decrement">Decrement numerical value</button>
    <button @click="$i18n.locale = 'ja'">Change language</button>
  </div>
</template>

<script setup lang="ts">
import { useExample } from '../stores/example';
import { storeToRefs } from 'pinia';

const example = useExample();
const { getNumericalProduct, getTitleDescription } = storeToRefs(example);
</script>

<style scoped lang="scss">
  .home {
    h1 {
      color: red;
    }
  }
</style>