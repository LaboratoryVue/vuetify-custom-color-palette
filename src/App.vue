<template>
  <v-app>

    <Navigation />

    <v-content>
      <v-container fluid style="position: relative">
        <Block v-for="block in blocks" :key="block.id" :title="block.name" />
        <v-btn absolute bottom right fab color="error">
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </v-content>


    <v-footer :fixed="fixed" app>
      <span>&copy; {{ year }}</span>
    </v-footer>

  </v-app>
</template>

<script>
import Block from "./components/Block.vue"
import Navigation from "./components/Navigation.vue"
export default {
  data() {
    return {
      blocks: [
        { id: 1, name: "Block 1" },
        { id: 2, name: "Block 2" },
        { id: 3, name: "Block 3" },
        { id: 4, name: "Block 4" },
        { id: 5, name: "Block 5" },
        { id: 6, name: "Block 6" }
      ],
      year: new Date().getFullYear()
    };
  },
  components: {
    Block,
    Navigation
  }
};
</script>
