<template>
  <router-view></router-view>
  <transition name="fade">
    <notification-card
        v-if="getHttpError.statusCode !== 0"
        :error=getHttpError
    ></notification-card>
  </transition>
</template>

<script setup lang="ts">
import {useAuth} from "./stores/auth";
import {onMounted, watch} from "vue";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router"
import {useHttpErrors} from "./stores/http-errors";
import NotificationCard from "./components/NotificationCard.vue";

const auth = useAuth()
const httpErrors = useHttpErrors()
const { isAuthenticated } = storeToRefs(auth)
const router = useRouter()
const {getHttpError} = storeToRefs(httpErrors)
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  //span {
  //  color: white;
  //}
}
button:disabled {
  opacity: 0.7;
}
.primary-btn {
  span {
    color: white;
  }
}
.mid-size-font {
  font-size: 20px;
}
.small-size-font {
  font-size: 14px;
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
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring span {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 26px;
  height: 26px;
  margin: 3px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring span:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring span:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring span:nth-child(3) {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to  {
  opacity: 0;
}
</style>
