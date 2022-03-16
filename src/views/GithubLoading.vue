<template>
  <div>
    <h1>Loading Github information...</h1>
  </div>
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";
import {useAuth} from "../stores/auth";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
const auth = useAuth()
const route = useRoute()
const router = useRouter()
const {isAuthenticated} = storeToRefs(auth)
watch(isAuthenticated, (newValue, oldValue) => {
  if(!oldValue && newValue) {
    router.push({name: 'Profile'})
  }
})
onMounted(async () => {
  const { state, code } = route.query
  if (state && code) {
    auth.setGithubStateAndCode(state, code)
    await auth.githubLogin()
  }
})
</script>

<style scoped lang="scss">
</style>

