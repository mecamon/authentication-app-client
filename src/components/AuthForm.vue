<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div class="logo-area">
        <img src="../assets/images/devchallenges.svg" alt="dev challenges logo">
      </div>
      <div v-if="!isLogin">
        <span class="bold">{{ $t("message.loginFormMsg1") }}</span>
        <span class="light">{{ $t("message.loginFormMsg2") }}</span>
      </div>
      <span v-else>Login</span>
      <div class="input-container">
        <span class="material-icons icons">email</span>
        <input type="email" placeholder="Email" v-model="userInfo.email" data-testid="email-input">
      </div>
      <div class="input-container">
        <span class="material-icons icons">https</span>
        <input type="password" placeholder="Password" v-model="userInfo.password" data-testid="password-input">
      </div>
      <button type="submit" 
        :disabled="canSendUserInfo"
        data-testid="log-or-sign-button" 
        @click.prevent="handleSubmit"
        >{{ isLogin ? 'Login' : $t("message.startCoding") }}
      </button>
      <span class="muted">{{ $t("message.logWithSocials") }}</span>
      <socials />
      <span v-if="!isLogin" class="muted">{{ $t("message.alreadyMember") }}
        <span class="accent" data-testid="login" @click="$emit('switch-to-login')">{{ $t("message.login") }}</span>
      </span>
      <span v-else class="muted">{{ $t("message.registerMsg") }}
        <span class="accent" data-testid="register" @click="$emit('switch-to-register')">{{ $t("message.register") }}</span>
      </span>
    </form>
    <div class="created-by">
      <span>{{ $t("message.createdBy") }}</span>
      <span>devchallenges.io</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref, computed } from 'vue';
import Socials from './Socials.vue'

const props = defineProps<{isLogin?: boolean}>();
const userInfo = ref<UserInfo>({email: '', password: ''});
const canSendUserInfo = computed(() => 
    userInfo.value.email === '' || userInfo.value.password === '');

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
      font-weight: thin;
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