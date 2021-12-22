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
        <email fillColor="#828282" :size="20" />
        <input type="email" placeholder="Email" v-model="userInfo.email" data-testid="email-input">
      </div>
      <div class="input-container">
        <lock fillColor="#828282" :size="20"/>
        <input type="password" placeholder="Password" v-model="userInfo.password" data-testid="password-input">
      </div>
      <button type="submit" 
        :disabled="canSendUserInfo"
        data-testid="log-or-sign-button" 
        @click.prevent="handleSubmit"
        >{{ isLogin ? 'Login' : $t("message.startCoding") }}
      </button>
      <span class="muted">{{ $t("message.logWithSocials") }}</span>
      <div class="socials">
        <img src="../assets/images/Google.svg" alt="google icon">
        <img src="../assets/images/Facebook.svg" alt="facebook icon">
        <img src="../assets/images/Twitter.svg" alt="twitter icon">
        <img src="../assets/images/Gihub.svg" alt="github icon">
      </div>
        <span v-if="!isLogin" class="muted">{{ $t("message.alreadyMember") }}
          <span class="accent">{{ $t("message.login") }}</span>
        </span>
        <span v-else class="muted">{{ $t("message.registerMsg") }}
          <span class="accent">{{ $t("message.register") }}</span>
        </span>
    </form>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref, computed } from 'vue';
import Email from 'vue-material-design-icons/Email.vue';
import Lock from 'vue-material-design-icons/Lock.vue';

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
}>();

interface UserInfo {
  email: string;
  password: string;
}
</script>

<style lang="scss">
  .form-container {
    width: 25%;
    margin: auto;
  }
  form {
    border: 1px var(--border-color) solid;
    border-radius: 24px;
    padding: 58px;
    display: flex;
    flex-direction: column;
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
      margin-bottom: 0.3rem;
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
  }
  div.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 22px 0;
    img {
      margin: 0 0.4rem;
      width: 42px;
      height: auto;
    }
  }
  
</style>