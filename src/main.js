import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import colors from 'vuetify/es5/util/colors'

const defaultColorScheme = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}

const customColorScheme = {
  primary: colors.blue.accent3,
  secondary: colors.purple.accent2
}

Vue.use(Vuetify, {
  theme: customColorScheme
})

new Vue({
  el: '#app',
  render: h => h(App)
})
