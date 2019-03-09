// main.js is the main starting point of a Vue.js app

// Vue is imported from its npm package
import Vue from 'vue'
// Vue projects use .vue files very often.They are called
// Single File Components.
// For more info, go to: https://vuejs.org/v2/guide/single-file-components.html
import App from './App.vue'

Vue.config.productionTip = false

// Initialize Vue.js
new Vue({
  // Render the App component into the the element with id: app
  // See src/App.vue and public/index.html files
  render: h => h(App),
  // In public/index.html, there is a div with #app selector:
  // <div id="app"></div>
}).$mount('#app')
