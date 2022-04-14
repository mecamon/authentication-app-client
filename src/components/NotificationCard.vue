<template>
  <div class="notification-card">
    <div class="notification-container">
      <div
          class="head"
          :class="[props.error.statusCode?.toString().startsWith('2') ? 'success-bg' : 'error-bg']"
          data-testid="head">
        <span class="material-icons icon" data-testid="icon">error</span>
        <span class="mid-size-font" data-testid="title-value">
          {{ props.error.statusCode?.toString().startsWith('2') ? $t("notification.success") : $t("notification.error") }}
        </span>
      </div>
      <ul>
        <li
            class="small-size-font"
            v-for="value of msgValues"
            data-testid="message-value"
        >{{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ErrorInfo} from "../models/error-info";
import {computed} from "vue";

const msgValues = computed(() => {
  if(!props.error.msg) {
    return ['Unexpected error']
  }
  return Object.values(props.error.msg)
})
const props = defineProps<{error: ErrorInfo}>()
</script>

<style lang="scss" scoped>
  .notification-card {
    background-color: white;
    min-width: 20rem !important;
    max-width: 26rem !important;
    padding: 0.4rem;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    position: fixed;
    box-shadow: 0 0 5px 3px var(--shadow-color);
    bottom: 50px;
    left: 50px;
    z-index: 50;
    div.notification-container {
      display: flex;
      flex-direction: column;
      padding: 0.8rem;
    }
    div.head {
      display: flex;
      align-items: center;
      //background-color: var(--danger-color);
      border-radius: 0.2rem;
      padding: 0.4rem;
      margin-bottom: 0.4rem;
      span {
        color: white;
      }
    }
    ul {
      li {
        color: var(--mute-color);;
      }
      margin: 0 1.4rem;
      display: block;
    }
  }
  .error-bg {
    background-color: var(--danger-color);
  }
  .success-bg {
    background-color: var(--success-color);
  }
  .icon {
    font-size: 32px;
    margin-right: 0.4rem;
    color: var(--danger-color);
  }
</style>
