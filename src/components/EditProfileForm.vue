<template>
  <div class="container">
    <span class="back" @click="$emit('read-mode')" >
      <span class="material-icons">arrow_back_ios</span>
      <span class="text">Back</span>
    </span>
    <form id="edit-form" @submit.prevent="handlerSubmit()" class="profile-info">
      <div class="title-area">
        <h2>{{$t("profile.changeInfo")}}</h2>
        <h6>{{$t("profile.changesReflected")}}</h6>
      </div>
<!--      IMAGE-->
      <div class="image-area">
        <div @click="uploadPhoto()" class="image-container">
          <span class="material-icons icon">photo_camera</span>
          <img v-if="!userInfoToEdit.photoURL" src="../assets/images/profile-placeholder.png" alt="profile image">
          <img v-else :src="userInfoToEdit.photoURL" alt="profile image">
        </div>
        <button type="button" @click="uploadPhoto()">{{ $t("profile.changePhoto") }}</button>
        <input type="file" name="file" data-testid="photo" ref="inputFile">
      </div>
<!--      NAME-->
      <div class="info-group">
        <label for="user-name-input">{{$t("profile.nameLabel")}}</label>
        <input type="text" name="name" v-model="userInfoToEdit.name" id="user-name-input" data-testid="name">
      </div>
<!--      BIO-->
      <div class="info-group">
        <label for="user-name-input">{{$t("profile.bioLabel")}}</label>
        <input type="text" name="bio" v-model="userInfoToEdit.bio" id="user-bio-input" data-testid="bio">
      </div>
<!--      PHONE-->
      <div class="info-group">
        <label for="user-name-input">{{$t("profile.phoneLabel")}}</label>
        <input type="number" name="telephone" v-model="userInfoToEdit.telephone" id="user-phone-input" data-testid="phone">
      </div>
<!--      EMAIL-->
      <div class="info-group">
        <label for="user-name-input">{{$t("profile.emailLabel")}}</label>
        <input type="email" name="email" v-model="userInfoToEdit.email" id="user-email-input" data-testid="email">
      </div>
<!--      PASSWORD-->
      <div class="info-group">
        <label for="user-name-input">{{$t("profile.passwordLabel")}}</label>
        <input type="password" name="password" v-model="userInfoToEdit.password" id="user-password-input" data-testid="password">
      </div>
<!--      SUBMIT-->
      <div>
        <button
          type="submit"
          :disabled="emptyFields || isLoading"
          data-testid="save-button"
          class="save-button primary-btn"
        >
          <span v-if="isLoading" class="lds-ring">
            <span></span><span></span><span></span><span></span>
          </span>
          <span v-if="!isLoading">{{$t("profile.save")}}</span>
        </button>
      </div>
    </form>
    <div class="created-by">
      <span>{{ $t("auth.createdBy") }}</span>
      <span>devchallenges.io</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import {UserInfoEdit} from "../models/user-info";

onMounted(() => {
  userInfoToEdit.value = props.currentUserInfo
})

const userInfoToEdit = ref<UserInfoEdit>(UserInfoEdit.empty());
const inputFile = ref<any>([]);

const handlerSubmit = () => {
  const form = document.querySelector('#edit-form')
  const formParsed = <HTMLFormElement>form
  const fd = new FormData(formParsed)
  emit('save-user-info', fd)
}

const uploadPhoto = () => {
  inputFile.value.click();
}
const emit = defineEmits<{
  (e: 'save-user-info', fd: FormData): void
  (e: 'read-mode'): void
}>()
const props = defineProps<{currentUserInfo: UserInfoEdit, isLoading: boolean}>()
const emptyFields = computed(() => {
  return  userInfoToEdit.value.name === '' ||
      userInfoToEdit.value.bio === '' ||
      userInfoToEdit.value.telephone === '' ||
      userInfoToEdit.value.email === ''
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
      //width: 72px;
      //height: 72px;
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
