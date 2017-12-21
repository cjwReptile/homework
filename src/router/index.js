import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import SelfWorkShow from '@/components/SelfWorkShow'
import TeamWorkShow from '@/components/TeamWorkShow'
import SubmitWork from '@/components/SubmitWork'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden:true
  },
  {
    path: '/main',
    name: '作业管理',
    component: Main,
    icon:'el-icon-menu',
    meta:{
      auth: true,// 这里设置，当前路由需要校验
    },
    children: [
          { 
          path: '/selfworkshow',
          component: SelfWorkShow, 
          meta:{
              auth: true // 这里设置，当前路由需要校验
          },
          name: '作业列表',
          icon:'el-icon-star-on',
          badge:"selfworkshow"
          },

          {
          path: '/mYworkshow',
          component: TeamWorkShow,
          meta:{
            auth: true // 这里设置，当前路由需要校验
          },
          name: '我的作业',
          icon:'el-icon-document'
          }, 


          {
          path: '/allWorkshow',
          component: TeamWorkShow,
          meta:{
            auth: true // 这里设置，当前路由需要校验
          },
          name: '作业列表',
          icon:'el-icon-document'
          }, 
        ]
      },
      {
        path: '/main',
        name: '编辑作业',
        component: Main,
        meta:{
          auth: true // 这里设置，当前路由需要校验
        },
        icon:'el-icon-menu',
        children: [
          { 
          path: '/submitwork',
          component: SubmitWork, 
          meta:{
            auth: true // 这里设置，当前路由需要校验
          },
          name: '提交作业',
          icon:'el-icon-star-on'}
        ]
        },
        ]
      }
      )


