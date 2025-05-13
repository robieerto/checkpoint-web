import { createRouter, createWebHistory } from 'vue-router'
import Root from './pages/Root.vue'
import Reservation from './pages/Reservation.vue'
import GetInfo from './pages/GetInfo.vue'
import PrivacyRules from './pages/PrivacyRules.vue'
import NotFound from './pages/NotFound.vue'

interface Route {
  path: string
  name: string
  component: any
}

const routes: Route[] = [
  {
    path: '/',
    name: 'Root',
    component: Root
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/getInformation',
    name: 'GetInfo',
    component: GetInfo
  },
  {
    path: '/checkpoint-privacy/',
    name: 'PrivacyRules',
    component: PrivacyRules
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string
  const metaDesc = toRoute?.meta?.description as string

  window.document.title = metaTitle || 'Checkpoint'
  if (metaDesc) {
    addMetaTag(metaDesc)
  }
  next()
})

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`)
  if (element) {
    element.setAttribute('content', value)
  }
}

export default router
