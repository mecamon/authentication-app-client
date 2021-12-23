<template>
  <div>
    <layout>
      <template v-slot:header>
        <custom-header />
      </template>
      <template v-slot:main>
        <profile-info :user-profile-info="userProfileMockInfo" />
      </template>
    </layout>
  </div>
</template>
<script setup lang="ts">
import Layout from '../layouts/Layout.vue';
import CustomHeader from '../components/CustomHeader.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import { userProfileMockInfo } from '../../__mocks__/user-profile-mock-info';

</script>