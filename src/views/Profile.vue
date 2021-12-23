<template>
  <div>
    <layout>
      <template v-slot:header>
        <custom-header />
      </template>
      <template v-slot:main>
        <edit-profile-form v-if="isEditingProfile" />
        <profile-info v-else :user-profile-info="userProfileMockInfo" />
      </template>
    </layout>
  </div>
</template>
<script setup lang="ts">
import Layout from '../layouts/Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import EditProfileForm from '../components/EditProfileForm.vue';
import { userProfileMockInfo } from '../../__mocks__/user-profile-mock-info';
import { ref } from 'vue';

const isEditingProfile = ref<boolean>(false);

</script>