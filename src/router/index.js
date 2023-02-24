import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView'
import LoginView from '@/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loginview',
    name: 'loginview',
    component: LoginView
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
    //应急模拟训练
    path: '/meetDrill',
    name: 'meetDrill',
    component: () => import('../views/meet/meetDrill.vue')
  },
  {
    //应急检测预警
    path: '/meetEarly',
    name: 'meetEarly',
    component: () => import('../views/meet/meetEarly.vue')
  },{
    // 园区经济管理
    path:'/EconomyManage',
    name:'EconomyManage',
    meta:{
      label:'经济管理'
    },
    component:()=>import("../views/ParkEconomyManage/EconomyManage.vue")
  },
  {
    // 公文管理
    path: '/kumonManagement',
    name: 'kumonManagement',
    component: () => import('../views/kumonManagement/kumonManagement.vue')
  
  },
  {
     //安全生产信息
     path: '/prdInfo',
     name: 'prdInfo',
     component: () => import('../views/prdInfo/prdInfo.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
