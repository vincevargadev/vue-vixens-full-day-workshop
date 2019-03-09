// main.js is the main starting point of a Vue.js app

// Vue is imported from its npm package
import Vue from 'vue'

import Vuetify from 'vuetify'

// Vue projects use .vue files very often.They are called
// Single File Components.
// For more info, go to: https://vuejs.org/v2/guide/single-file-components.html
import App from './App.vue'

Vue.config.productionTip = false

// Vuetify CSS styles are included as well.
import 'vuetify/dist/vuetify.min.css'

// Ensure Vuetify's themes and components will be available throughout the Vue app.
// What is this: Vue.use? It's registering a plugin: https://vuejs.org/v2/guide/plugins.html
// Plugins usually add global-level functionality to Vue: in this case we add Vuetify to Vue
Vue.use(Vuetify)

// Initialize Vue.js
new Vue({
  // Render the App component into the the element with id: app
  // See src/App.vue and public/index.html files
  render: h => h(App),
  // In public/index.html, there is a div with #app selector:
  // <div id="app"></div>
}).$mount('#app')
