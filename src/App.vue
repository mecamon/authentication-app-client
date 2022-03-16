<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useAuth} from "./stores/auth";
import {onMounted, watch} from "vue";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router"
import {useHttpErrors} from "./stores/http-errors";

const auth = useAuth()
const httpErrors = useHttpErrors()
const { isAuthenticated } = storeToRefs(auth)
const router = useRouter()

watch(isAuthenticated, (newValue) => {
  if(!newValue) {
    router.push({name: 'Home'})
  }
})
onMounted(() => {
  let token = localStorage.getItem('token')
  if(!token) {
    auth.setAuthentication(false)
  } else {
    auth.setAuthentication(true)
  }
})
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
div.created-by {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
    span {
      display: block;
      color: var(--mute-color);
      font-size: 14px;
      font-weight: 400;
    }
  }
</style>
