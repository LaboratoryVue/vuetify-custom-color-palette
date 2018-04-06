<template>
  <v-toolbar fixed app :gradient="gradient">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-btn icon>
      <v-icon v-html="'chevron_right'"></v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>web</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>remove</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navigation",
  data () {
    return {
      gradient: 'to top, #004ecb, #75a7ff'
    }
  }
};
</script>

<style scoped>
.block {
  margin-bottom: 1rem;
}
</style>
