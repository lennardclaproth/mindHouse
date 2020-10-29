<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <BottomToolbar></BottomToolbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopToolbar from "@/components/layoutComponents/topToolbar.vue";
import BottomToolbar from "@/components/layoutComponents/bottomToolbar.vue";
import Page from "@/components/layoutComponents/page.vue";
@Component({
  components: {
    TopToolbar,
    BottomToolbar,
    Page
  }
})
export default class extends Vue {}
</script>
