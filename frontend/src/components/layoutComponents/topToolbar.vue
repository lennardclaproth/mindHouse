<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <UserCard></UserCard>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item @click="handleClick('applicationX')">
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Page 1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="handleClick('applicationY')">
          <v-list-item-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Page 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed flat dark color="primary">
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><v-icon>mdi-brain</v-icon> The Mindhouse</v-toolbar-title
      >
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserCard from "@/components/coreComponents/userCard.vue";

@Component({
  components: {
    UserCard
  }
})
export default class TopToolbar extends Vue {
  showMenu = false;
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  handleClick(route: string): void {
    console.log("navItem clicked");
    this.$router.push(route);
  }
}
</script>
