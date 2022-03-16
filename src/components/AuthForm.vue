<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div class="logo-area">
        <img src="../assets/images/devchallenges.svg" alt="dev challenges logo">
      </div>
      <div v-if="!isLogin">
        <span class="bold">{{ $t("auth.loginFormMsg1") }}</span>
        <span class="light">{{ $t("auth.loginFormMsg2") }}</span>
      </div>
      <span v-else>Login</span>
      <div class="input-container">
        <label for="email" hidden >Email</label>
        <span class="material-icons icons">email</span>
        <input
            id="email"
            autocomplete="email"
            type="email"
            placeholder="Email"
            v-model="userInfo.email"
            data-testid="email-input"
        >
      </div>
      <div class="input-container">
        <label for="password" hidden >Password</label>
        <span class="material-icons icons">https</span>
        <input
            id="password"
            autocomplete="password"
            type="password"
            placeholder="Password"
            v-model="userInfo.password"
            data-testid="password-input"
        >
      </div>
      <button
        type="submit"
        :disabled="canSendUserInfo"
        data-testid="log-or-sign-button"
        @click.prevent="handleSubmit"
        class="primary-btn"
        >
        <span v-if="auth.logState.isLoading || auth.githubLoginState.isLoading" class="lds-ring">
          <span></span><span></span><span></span><span></span>
        </span>
        <span v-if="!auth.logState.isLoading && !auth.githubLoginState.isLoading">
          {{ isLogin ? 'Login' : $t("auth.startCoding") }}
        </span>
      </button>
      <span class="muted">{{ $t("auth.logWithSocials") }}</span>
      <socials @github-login="$emit('github-login')" />
      <span v-if="!isLogin" class="muted">{{ $t("auth.alreadyMember") }}
        <span class="accent" data-testid="login" @click="$emit('switch-to-login')">{{ $t("auth.login") }}</span>
      </span>
      <span v-else class="muted">{{ $t("auth.registerMsg") }}
        <span class="accent" data-testid="register" @click="$emit('switch-to-register')">{{ $t("auth.register") }}</span>
      </span>
    </form>
    <div class="created-by">
      <span>{{ $t("auth.createdBy") }}</span>
      <span>devchallenges.io</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import Socials from './Socials.vue'
import {useAuth} from "../stores/auth";

const props = defineProps<{isLogin?: boolean}>();
const userInfo = ref<UserInfo>({email: '', password: ''});
const canSendUserInfo = computed(() =>
    userInfo.value.email === '' || userInfo.value.password === '');
const auth = useAuth()

const handleSubmit = () => {
  if(props.isLogin) {
    emits('log-with-email-pass', userInfo.value);
  } else {
    emits('sign-with-email-pass', userInfo.value);
  }
}
const emits = defineEmits<{
  (e: 'log-with-email-pass', userInfo: UserInfo): void
  (e: 'sign-with-email-pass', userInfo: UserInfo): void
  (e: 'switch-to-register'): void
  (e: 'switch-to-login'): void
  (e: 'github-login'): void
}>();

interface UserInfo {
  email: string;
  password: string;
}
</script>

<style lang="scss" scoped>
  .form-container {
    width: 100%;
    margin: auto;
  }
  form {
    border: none;
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 600px) {
    .form-container {
      width: 70%;
    }
    form {
      border: 1px var(--border-color) solid;
      border-radius: 24px;
      padding: 58px;
    }
  }
  @media (min-width: 850px) {
    .form-container {
      width: 60%;
    }
  }
  @media (min-width: 1200px) {
    .form-container {
      width: 40%;
    }
  }
  @media (min-width: 1600px) {
    .form-container {
      width: 25%;
    }
  }
  .input-container {
    display: flex;
    align-items: center;
    border: 1px var(--border-color) solid;
    border-radius: 8px;
    height: 48px;
    padding: 0 0.8rem;
    margin-top: 14px;
    input {
      outline: none;
      border: none;
      font-size: 16px;
      width: 80%;
      text-indent: 0.4rem;
      font-weight: 400;
    }
    input::placeholder {
      color: var(--mute-color);
      font-weight: lighter;
    }
  }
  button {
    background-color: var(--accent-color);
    color: white;
    font-weight: 400;
    font-size: 16px;
    padding: 0.6rem;
    border: none;
    border-radius: 8px;
    margin-top: 22px;
    margin-bottom: 32px;
  }
  span.bold {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0.6rem;
    display: block;
  }
  span.light {
    margin-bottom: 1.1rem;
    display: block;
  }
  .logo-area {
    margin-bottom: 27px;
    img {
      width: auto;
      height: 18px;
    }
  }
  span.muted {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: var(--mute-color);
  }
  span.accent {
    font-size: 14px;
    font-weight: 400;
    color: var(--accent-color);
    cursor: pointer;
  }
  .icons{
    color: var(--mute-color);
    font-size: 20px;
  }
</style>
