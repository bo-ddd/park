import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 环境质量
    path: '/environmentalQuality',
    name: 'EnvironmentalQuality',
    component: () => import('../views/environmentalQuality/EnvironmentalQuality.vue')
  },
  {
    //能源管理
    path: '/energyManagement',
    name: 'energyManagement',
    component: () => import('../views/energyManagement/EnergyManagement.vue')
  },
  {
    //企业环保登记
    path: '/enterpriseEnvironmentalProtection',
    name: 'enterpriseEnvironmentalProtection',
    component: () => import('../views/enterpriseEnvironmentalProtection/enterpriseEnvironmentalProtection.vue')
  },
  {
    // 园区经济管理
    path:'/EconomyManage',
    name:'EconomyManage',
    meta:{
      label:'经济管理'
    },
    component:()=>import("../views/ParkEconomyManage/EconomyManage.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
