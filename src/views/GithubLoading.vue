<template>
  <div>
    <div class="center">
      <h1>Loading Github information...</h1>
      <span class="big-ring">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";
import {useAuth} from "../stores/auth";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useHttpErrors} from "../stores/http-errors";
const auth = useAuth()
const httpError = useHttpErrors()
const route = useRoute()
const router = useRouter()
const {isAuthenticated} = storeToRefs(auth)
const {statusCode} = storeToRefs(httpError)
watch(isAuthenticated, (newValue, oldValue) => {
  if(!oldValue && newValue) {
    router.push({name: 'Profile'})
  }
})
watch(statusCode, (newValue) => {
  if (newValue !== 0) {
    router.push({name: 'Home'})
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
.center {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.big-ring {
  //background-color: #349b56;
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.big-ring span {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 140px;
  height: 140px;
  margin: 30px;
  border: 10px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #bbbbbb transparent transparent transparent;
}
.big-ring span:nth-child(1) {
  animation-delay: -0.45s;
}
.big-ring span:nth-child(2) {
  animation-delay: -0.3s;
}
.big-ring span:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

