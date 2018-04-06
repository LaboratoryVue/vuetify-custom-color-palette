<template>
  <v-toolbar class="nav" fixed app :gradient="gradient">
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
}
</script>

<style scoped>
  .nav {
    background: #75a7ff; /* Old browsers */
    background: -moz-linear-gradient(top, #75a7ff 0%, #004ecb 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #75a7ff 0%,#004ecb 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #75a7ff 0%,#004ecb 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#75a7ff', endColorstr='#004ecb',GradientType=0 ); /* IE6-9 */
  }
</style>
