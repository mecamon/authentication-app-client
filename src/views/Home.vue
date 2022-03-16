<template>
  <div class="home">
    <auth-form
      :is-login="isLogin"
      @switch-to-login="isLogin = true"
      @switch-to-register="isLogin = false"
      @log-with-email-pass="login($event)"
      @sign-with-email-pass="register($event)"
      @github-login="githubLogin()"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import AuthForm from '../components/AuthForm.vue';
import {useAuth} from "../stores/auth";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const isLogin = ref<boolean>(true);
const auth = useAuth()
const { isAuthenticated, githubLoginState } = storeToRefs(auth)
const router = useRouter()

//HANDLERS LOGIN REDIRECT
watch(isAuthenticated, (newValue, oldValue) => {
  if(!oldValue && newValue) {
    router.push({name: 'Profile'})
  }
})
//HANDLERS GITHUB LOGIN
watch([() => githubLoginState.value.accessRequest, isAuthenticated],
    ([accessRequest, authenticated]) => {
  if(accessRequest !== '' && !authenticated) {
    window.location.href = githubLoginState.value.accessRequest
  }
})
const login = async (userInfo: any) => {
  await auth.loginWithEmail(userInfo.email, userInfo.password)
}
const register = async (userInfo: any) => {
  await auth.registerWithEmail(userInfo.email, userInfo.password)
}
const githubLogin = async () => {
  await auth.githubAccessRequest()
}


</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

</style>
