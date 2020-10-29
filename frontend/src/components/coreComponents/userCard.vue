<template>
  <v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item link>
      <v-list-item-content>
        <v-list-item-title class="title">
          User
        </v-list-item-title>
        <v-list-item-subtitle>user@gmail.com</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UserCard extends Vue {}
</script>
