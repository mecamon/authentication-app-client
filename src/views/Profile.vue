<template>
  <div>
    <layout>
      <template v-slot:header>
        <custom-header :user-info="{...userInfo.data}" @logout="logout()" />
      </template>
      <template v-slot:main>
        <edit-profile-form
            v-if="isEditingProfile"
            @read-mode="isEditingProfile=false"
            @save-user-info="updateUserInfo($event)"
            :is-loading="userInfo.isLoading"
            :current-user-info="currentUserInfo"
        />
        <profile-info v-else @edit-mode="setToEditMode()" :user-profile-info="{...userInfo.data}" />
      </template>
    </layout>
  </div>
</template>
<script setup lang="ts">
import Layout from '../layouts/Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import EditProfileForm from '../components/EditProfileForm.vue';
import {onMounted, ref, watch} from 'vue';
import {useAuth} from "../stores/auth";
import {useUsers} from "../stores/users";
import {storeToRefs} from "pinia";
import {UserInfoEdit} from "../models/user-info";

const isEditingProfile = ref<boolean>(false);
const currentUserInfo = ref<UserInfoEdit>(UserInfoEdit.empty());
const auth = useAuth()
const users = useUsers()
const {userInfo} = storeToRefs(users)

//Changing mode after successful update
watch(() => userInfo.value.data, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    isEditingProfile.value = false
  }
})
const updateUserInfo = (fd: FormData) => users.updateUserInfo(fd)
const setToEditMode = () => {
  isEditingProfile.value = true
  let data = userInfo.value.data
  currentUserInfo.value.name = data?.name
  currentUserInfo.value.bio = data?.bio
  currentUserInfo.value.email = data?.email
  currentUserInfo.value.photoURL = data?.photoURL
  currentUserInfo.value.telephone = data?.telephone
  currentUserInfo.value.password = ''
}

onMounted(async () => {
  await users.fetchUserInfo()
})

const logout = () => auth.logOut()


</script>
