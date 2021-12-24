<template>
  <div class="container">
    <span class="back">
      <span class="material-icons">arrow_back_ios</span>
      <span class="text">Back</span>
    </span>
    <form @submit="$emit('save-user-info', userInfo)" class="profile-info">
      <div class="title-area">
        <h2>Change Info</h2>
        <h6>Changes will be reflected to every services</h6>
      </div>
      <div class="image-area">
        <div @click="uploadPhoto" class="image-container">
          <span class="material-icons icon">photo_camera</span>
          <img src="../assets/images/profile-placeholder.png" alt="profile image">
        </div>
        <button @click="uploadPhoto">CHANGE PHOTO</button>
        <input type="file" data-testid="photo" ref="inputFile">
      </div>
      <div class="info-group">
        <label for="user-name-input">Name</label>
        <input type="text" name="name" v-model="userInfo.name" id="user-name-input" data-testid="name">
      </div>
      <div class="info-group">
        <label for="user-name-input">Bio</label>
        <input type="text" name="bio" v-model="userInfo.bio" id="user-bio-input" data-testid="bio">
      </div>
      <div class="info-group">
        <label for="user-name-input">Phone</label>
        <input type="number" name="phone" v-model="userInfo.phone" id="user-phone-input" data-testid="phone">
      </div>
      <div class="info-group">
        <label for="user-name-input">Email</label>
        <input type="email" name="email" v-model="userInfo.email" id="user-email-input" data-testid="email">
      </div>
      <div class="info-group">
        <label for="user-name-input">Password</label>
        <input type="password" name="password" v-model="userInfo.password" id="user-password-input" data-testid="password">
      </div>
      <div>
        <button 
          type="submit"
          :disabled="emptyFields" 
          data-testid="save-button" 
          class="save-button" 
          @click="$emit('save-user-info', userInfo)"
        >Save</button>
      </div>
    </form>
    <div class="created-by">
      <span>{{ $t("auth.createdBy") }}</span>
      <span>devchallenges.io</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { UserProfileInfo } from '../models/user-profile-info';
const userInfo = ref<UserProfileInfo>(UserProfileInfo.empty());
const inputFile = ref<any>([]);

const uploadPhoto = () => {
  inputFile.value.click();
}
const emit = defineEmits<{
  (e: 'save-user-info', userInfo: UserProfileInfo): void
}>()
const emptyFields = computed(() => {
  return  userInfo.value.name === '' ||
          userInfo.value.bio === '' ||
          userInfo.value.phone === '' ||
          userInfo.value.email === '' ||
          userInfo.value.password === '' 
});
</script>

<style lang="scss" scoped>
  div.container {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    span.back {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      margin-left: 48px;
      span {
        font-size: 18px;
        font-weight: 400;
        color: var(--accent-color);
        margin-right: 0.5rem;
      }
    }
    span.back:hover {
      cursor: pointer;
      span.text {
        text-decoration: underline;  
      }
    }
    form.profile-info {
      display: flex;
      flex-direction: column;
      padding: 48px;
    }
  }
  div.image-area {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    input {
      visibility: hidden;
    }
    div.image-container {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 8px;
      overflow: hidden;
      span.icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: auto;
        color: white;
      }
      img {
        max-width: 72px;
        height: auto;
        border-radius: 8px;
      }
    }
    button {
      margin-left: 0.8rem;
      background-color: transparent;
      border: none;
      color: var(--mute-color);
      font-size: 13px;
    }
  }
  div.info-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    span {
      font-size: 13px;
      color: var(--mute-color);
    }
    input {
      width: 100%;
      height: 52px;
      border: 1px var(--input-border-color) solid;
      border-radius: 12px;
      text-indent: 0.6rem;
      font-size: 16px;
    }
  }
  @media (min-width: 800px) {
    div.container {
      width: 70%;
    }
    form.profile-info {
      border: 1px var(--border-color) solid;
      border-radius: 12px;
    }
    span.back {
      margin-left: 0px !important;
    }
  }
  @media (min-width: 1400px) {
    div.container {
      width: 50%
    }
    div.info-group {
      input {
        width: 60%;
      }
    }
  }
  div.title-area {
    margin-bottom: 24px;
    h2 {
      font-size: 24px;
      font-weight: 400;
    }
    h6 {
      font-size: 13px;
      font-weight: 500;
      color: var(--mute-color);
    }
  }
  button.save-button {
    background-color: var(--accent-color);
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    padding: 8px 24px;
  }
  
</style>