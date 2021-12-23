<template>
  <div>
    <layout>
      <template v-slot:header>
        <custom-header />
      </template>
    </layout>
  </div>
</template>
<script setup lang="ts">
import Layout from '../layouts/Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';
</script>