// main.js is the main starting point of a Vue.js app

// Vue is imported from its npm package
import Vue from 'vue'
// Vuetify is a semantic component framework for Vue.
// It aims to provide clean, semantic and reusable components for building your application.
import Vuetify from 'vuetify'
// The vue-router is Vue's official router.
// A router is a the library that makes moving from page to page easy and efficient.
import VueRouter from 'vue-router'
// Vuex is a state management pattern and library for Vue.js applications.
// It serves as a centralized store for all the components in an application
import Vuex from 'vuex'

// Vue projects use .vue files very often.They are called
// Single File Components.
// For more info, go to: https://vuejs.org/v2/guide/single-file-components.html
import App from './App.vue'
// Views. Vue components that are associated with a given route
import Favorites from './views/Favorites'
import Home from './views/Home'
import Pets from './views/Pets'
// Vuex Store
import createStore from './store/store'

Vue.config.productionTip = false

// Vuetify CSS styles are included as well.
import 'vuetify/dist/vuetify.min.css'


// Register plugins https://vuejs.org/v2/guide/plugins.html
// Plugins usually add global-level functionality to Vue.
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: Home },
  { path: '/favorites', component: Favorites },
  { path: '/pets', component: Pets },
]
const router = new VueRouter({ routes })

const store = createStore()


// Initialize Vue.js
new Vue({
  // Render the App component into the the element with id: app
  // See src/App.vue and public/index.html files
  render: h => h(App),
  // Object initialization shorthand from variables. It's equivalent to:
  // router: router
  router,
  store
  // In public/index.html, there is a div with #app selector:
  // <div id="app"></div>
}).$mount('#app')
