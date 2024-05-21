import { createRouter, createWebHistory } from 'vue-router'
import BasicViews from '../views/BasicViews.vue'
import GridViews from '../views/GridViews.vue'
import TreeView from '../views/TreeView.vue'
import TodoView from '../views/TodoView.vue'
import LoginView from '../views/LoginView.vue'
import InputView from '../views/InputView.vue'
import PayView from '../views/PayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: BasicViews
    },
    {
      path: '/pay',
      name: 'Pay',
      component: PayView
    },
    {
      path: '/grid',
      name: 'GridView',
      component: GridViews
    },
    {
      path: '/tree',
      name: 'TreeView',
      component: TreeView
    },
    {
      path: '/todo',
      name: 'TodoView',
      component: TodoView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/input',
      name: 'InputView',
      component: InputView
    },
    
  ]
})

export default router
