<template>
  <div class="container">
    <h2>{{ $t("profile.personalInfo") }}</h2>
    <h6>{{ $t("profile.basicInfo") }}</h6>
    <div class="profile-info">
      <div class="title-area">
        <div>
          <span class="sub-title">{{ $t("profile.profileLabel") }}</span>
          <span class="small-text">{{ $t("profile.profileMsg") }}</span>
        </div>
        <button @click="$emit('edit-mode')" class="edit-btn">{{ $t("profile.edit") }}</button>
      </div>
      <hr>
      <!--PHOTO-->
      <div class="info-group">
        <label>{{ $t("profile.photoLabel") }}</label>
        <div class="profile-photo">
          <img v-if="userProfileInfo?.photoURL" :src="userProfileInfo?.photoURL" alt="profile photo" data-testid="photo">
        </div>
      </div>
      <hr>
      <!--NAME-->
      <div class="info-group">
        <label>{{ $t("profile.nameLabel") }}</label>
        <span data-testid="name" class="content">{{userProfileInfo?.name}}</span>
      </div>
      <hr>
      <!--BIO-->
      <div class="info-group">
        <label>{{ $t("profile.bioLabel") }}</label>
        <span data-testid="bio" class="content">{{ userProfileInfo?.bio }}</span>
      </div>
      <hr>
      <!--TELEPHONE-->
      <div class="info-group">
        <label>{{ $t("profile.phoneLabel") }}</label>
        <span data-testid="phone" class="content">{{ userProfileInfo?.telephone }}</span>
      </div>
      <hr>
      <!--EMAIL-->
      <div class="info-group">
        <label>{{ $t("profile.emailLabel") }}</label>
        <span data-testid="email" class="content">{{ userProfileInfo?.email }}</span>
      </div>
      <hr>
      <!--PASSWORD-->
      <div class="info-group">
        <label>{{ $t("profile.passwordLabel") }}</label>
        <span data-testid="password" class="content">{{ '' }}</span>
      </div>
    </div>
    <div class="created-by">
      <span>{{ $t("auth.createdBy") }}</span>
      <span>devchallenges.io</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import {UserInfo} from "../models/user-info";

const emits = defineEmits<{
  (e: 'edit-mode'): void
}>()

defineProps<Props>()
interface Props {
  userProfileInfo: UserInfo
}
</script>
<style lang="scss" scoped>
  div.container {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    h2, h6 {
      text-align: center;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
    }
    h6 {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 46px;
    }
  }
  div.profile-info{
    display: flex;
    flex-direction: column;
    div.info-group{
      display: flex;
      align-items: center;
      padding: 24px 48px;
      label {
        width: 33%;
        display: block;
        color: var(--mute-color);
        font-size: 13px;
      }
      span.content {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  @media (min-width: 800px) {
    div.container {
      width: 70%;
      h2 {
        font-size: 36px;
        font-weight: 400;
      }
      h6 {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 46px;
      }
    }
    div.profile-info{
      border: 1px var(--border-color) solid;
      border-radius: 12px;
    }
  }
  @media (min-width: 1400px) {
    div.container {
      width: 50%;
    }
  }
  div.title-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    margin-bottom: 28px;
    padding: 8px 48px;
    div {
      display: flex;
      flex-direction: column;
    }
  }
  div.profile-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    overflow: hidden;
    border-radius: 8px;
    img {
      height: 72px;
      width: auto;
      border-radius: 8px;
    }
  }
  .sub-title {
    font-size: 24px;
    font-weight: 400;
  }
  .small-text {
    font-size: 13px;
    font-weight: 400;
    color: var(--mute-color);
  }
  .edit-btn {
    font-size: 16px;
    border-radius: 12px;
    padding: 8px 35px;
    border: 1px var(--border-color) solid;
    color: var(--mute-color);
    background-color: transparent;
  }
  .edit-btn:hover {
    background-color: var(--accent-color);
    color: white;
  }
</style>
