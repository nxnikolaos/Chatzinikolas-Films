import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MovieDetails from '../pages/MovieDetails.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/movie/:id', component: MovieDetails, props: true, name: 'MovieDetails' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
