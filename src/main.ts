import { createApp } from 'vue'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import App from './App.vue'
import './styles/index.css'

// Import views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to: RouteLocationNormalized, _from: RouteLocationNormalized, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')
