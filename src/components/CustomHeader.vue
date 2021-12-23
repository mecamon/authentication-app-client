<template>
  <div class="header-group">
    <img src="../assets/images/devchallenges.svg" alt="logo" data-testid="logo">
    <div class="header-right-side">
      <div class="profile-photo">
        <img src="../assets/images/profile-placeholder.png" alt="profile pic">
      </div>
      <div class="dropdown-container">
        <button data-testid="menu-button" @click="toggleDropdown">
          <span>Username placeholder</span>
          <span v-if="!isShowingDropdown" class="material-icons">arrow_drop_down</span>
          <span v-else class="material-icons">arrow_drop_up</span>
        </button>
        <div class="dropdown" v-show="isShowingDropdown">
          <div data-testid="profile-menu-item">
            <span class="material-icons icon">person</span>
            <span class="menu-title">My Profile</span>
          </div>
          <div data-testid="group-chat-menu-item">
            <span class="material-icons icon">people_alt</span>
            <span class="menu-title">Group Chat</span>
          </div>
          <hr>
          <div data-testid="logout-menu-item">
            <span class="material-icons icon red">logout</span>
            <span class="red menu-title">Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const isShowingDropdown = ref<boolean>(false);
const toggleDropdown = () => isShowingDropdown.value = !isShowingDropdown.value;
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
  }
  div.dropdown-container {
    position: relative;
    button {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      background-color: inherit;
      border: none;
      outline: none;
      span {
        margin: 0 3px;
      }
    }
  }
  div.dropdown {
    position: absolute;
    min-width: 180px;
    top: 30px;
    right: 0;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0px 0px 8px rgba(114, 114, 114, 0.577);
    div {
      cursor: pointer;
      border-radius: 8px;
      display: block;
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
    div:hover {
      background-color: #F2F2F2;
    }
  }
</style>