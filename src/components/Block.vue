<template>
  <v-jumbotron class="block" color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 color="error" class="display-3">{{ title }}</h3>
          <span color="accent" class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div color="secondary" class="title mb-3">Check out our newest features!</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: "Block",
  props: {
    title: {
      type: String,
      default: "Welcome to the site"
    }
  }
};
</script>

<style scoped>
.block {
  margin-bottom: 1rem;
}
</style>
