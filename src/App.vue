<template>
  <v-app>

    <Navigation :dense="fab" :title="title" />

    <v-content style="position: relative">
      <v-container fluid>
        <Block v-for="block in blocks" :key="block.id" :title="block.name" />
        <v-fab-transition>
          <v-btn
            v-show="fab"
            @click="toTop"
            v-scroll="onScroll"
            fixed
            bottom
            right
            fab
            color="secondary"
          >
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-container>
    </v-content>

    <Footer :year="year" :fixed="fixed" />

  </v-app>
</template>

<script>
import Block from "./components/Block";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
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
      year: new Date().getFullYear(),
      link: "https://codepen.io/gearmobile/pen/vRVRRx",
      fab: false,
      fixed: false,
      title: "Vuetify"
    };
  },
  components: {
    Block,
    Navigation
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
    onScroll() {
      if (typeof window === "underfined") return;
      const top = window.pageYOffset || document.documentElement.offsetTop || 0;
      this.fab = top > 300;
    }
  }
};
</script>
