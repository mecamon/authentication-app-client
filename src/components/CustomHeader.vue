<template>
  <div class="header-group">
    <img src="../assets/images/devchallenges.svg" alt="logo" data-testid="logo">
    <div class="header-right-side">
<!--      DROPDOWN-->
      <div class="dropdown-container">
        <button data-testid="menu-button" @click="toggleDropdown">
          <div class="profile-photo">
            <img v-if="userInfo?.photoURL" :src="userInfo?.photoURL" alt="profile pic">
            <img v-else src="../assets/images/profile-placeholder.png" alt="profile pic">
          </div>
          <div v-if="!isASmallDropDownButton">
            <span v-if="userInfo?.name">{{userInfo.name}}</span>
            <span v-else>Username placeholder</span>

            <span v-if="!isShowingDropdown" class="material-icons">arrow_drop_down</span>
            <span v-else class="material-icons">arrow_drop_up</span>
          </div>
        </button>
        <div class="dropdown" v-show="isShowingDropdown">
          <div class="group" data-testid="profile-menu-item">
            <span class="material-icons icon">person</span>
            <span class="menu-title">{{$t("general.myProfile")}}</span>
          </div>
          <div class="group" data-testid="group-chat-menu-item">
            <span class="material-icons icon">people_alt</span>
            <span class="menu-title">{{$t("general.groupChat")}}</span>
          </div>
          <div class="lang-group">
            <span class="material-icons-outlined material-icons">language</span>
            <div>
              <button
                  class="lang-btn"
                  :class="[$i18n.locale === 'en' ? 'lang-btn-selected': '']"
                  @click="setLanguage('en-US')">EN
              </button>
              <button
                  class="lang-btn"
                  :class="[$i18n.locale === 'es' ? 'lang-btn-selected': '']"
                  @click="setLanguage('es-ES')">ES
              </button>
            </div>
          </div>
          <hr>
          <div class="group" data-testid="logout-menu-item" @click="$emit('logout')">
            <span class="material-icons icon red">logout</span>
            <span class="red menu-title">{{$t("general.logout")}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted ,ref } from 'vue';
import {UserInfo} from "../models/user-info";
import {useI18n} from "vue-i18n";

const {locale} = useI18n({useScope: 'global'})
const isShowingDropdown = ref<boolean>(false);
const isASmallDropDownButton = ref<boolean>(false);
const toggleDropdown = () => isShowingDropdown.value = !isShowingDropdown.value;
const emits = defineEmits<{
  (e: 'logout'): void
}>();
const props = defineProps<{
  userInfo: UserInfo
}>()
const setLanguage = (lang: string) => {
  localStorage.setItem('lang', lang)
  if (lang === 'es-ES') {
    locale.value = 'es'
  } else {
    locale.value = 'en'
  }
}
onMounted(() => {
  shortenDropdownButtonOnMobile();
  window.addEventListener('resize', shortenDropdownButtonOnMobile)
});
onUnmounted(() => {
  window.removeEventListener('resize', shortenDropdownButtonOnMobile)
});
function shortenDropdownButtonOnMobile(): void {
  isASmallDropDownButton.value = window.innerWidth < 800
}
</script>

<style lang="scss" scoped>
  hr {
    margin: 0.5rem 0;
    border: none;
    height: 1px;
    background-color: var(--border-color);
  }
  .header-group {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 24px 0;
  }
  .header-right-side {
    display: flex;
    align-items: center;
  }
  div.profile-photo {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      overflow: hidden;
      margin-right: 0.4rem;
      width: 36px;
      height: 36px;
      img {
        width: 36px;
        height: auto;
      }
    }
  div.dropdown-container {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 100;
    background-color: var(--background-color);
    button {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      background-color: inherit;
      border: none;
      outline: none;
      div {
        display: flex;
        align-items: center;
        span {
          margin: 0 3px;
          display: block;
        }
      }

    }
  }
  div.dropdown {
    position: absolute;
    background-color: var(--background-color);
    min-width: 180px;
    top: 40px;
    right: 0;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0px 0px 8px rgba(114, 114, 114, 0.577);
    div.group {
      cursor: pointer;
      border-radius: 8px;
      //display: block;
      display: flex;
      align-items: center;
      padding: 12px;
      span.menu-title {
        font-size: 12px;
        font-weight: 400;
        margin-left: 0.6rem;
      }
      span.icon {
        font-size: 16px;
      }
      span.red {
        color: var(--danger-color);
      }
    }
    div.lang-group {
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
      }
    }
    div.group:hover {
      background-color: #F2F2F2;
    }
  }
</style>
