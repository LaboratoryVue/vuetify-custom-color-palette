<template>
  <v-footer :fixed="fixed" app>
    <span>&copy; {{ year }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    year: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/**/
</style>
