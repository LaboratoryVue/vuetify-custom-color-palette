import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    // primary: '#3f51b5',
    primary: colors.purple.base,
    // secondary: '#b0bec5',
    secondary: colors.grey.darken1,
    // accent: '#8c9eff',
    accent: colors.shades.black,
    // error: '#b71c1c'
    error: colors.red.accent3
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
