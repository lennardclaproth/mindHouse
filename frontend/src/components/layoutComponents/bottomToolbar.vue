<template>
  <v-bottom-navigation app fixed grow v-model="activeItem" color="primary">
    <v-btn
      v-for="template in navigation"
      :key="template.value"
      :value="template.value"
      @click="$router.push(template.route)"
    >
      <span>{{ template.text }}</span>
      <v-icon>{{ template.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class BottomToolbar extends Vue {
  activeItem = "top";
  navigation = [
    {
      text: "option1",
      route: "option1",
      icon: "mdi-account"
    },
    {
      text: "option2",
      route: "option2",
      icon: "mdi-format-list-bulleted"
    },
    {
      text: "option3",
      route: "option3",
      icon: "mdi-heart"
    },
    {
      text: "option4",
      route: "option4",
      icon: "mdi-plus-circle"
    }
  ];
}
</script>
