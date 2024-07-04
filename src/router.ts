import { createRouter, createWebHistory } from 'vue-router'
import Root from './pages/Root.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
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
