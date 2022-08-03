import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignUp from '../views/auth/SignUp.vue'
import ForgotPassword from '../views/forgotpassword/ForgotPassword.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/LoginView.vue'),
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword
  },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: 'dashboard',
    redirect: '/dashboard/d',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    children: [
      {
        path: "/dashboard/d",
        name: "DashboardView",
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/DashboardView.vue')
      },
      {
        path: "/dashboard/s",
        name: "StudentList",
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/StudentListView.vue')
      },
      {
        path: "/dashboard/r",
        name: "ReportView",
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/ReportView.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
// component: HomeView