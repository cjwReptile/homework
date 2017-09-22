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
      children: [
            { path: '/selfworkshow',
             component: SelfWorkShow, 
             name: '我的作业',
             icon:'el-icon-star-on'},
            { path: '/teamworkshow',
             component: TeamWorkShow,
              name: '作业列表',
              icon:'el-icon-document'
            }, 
        ]
    },
     {
      path: '/main',
      name: '编辑作业',
      component: Main,
      icon:'el-icon-menu',
      children: [
            { path: '/submitwork',
             component: SubmitWork, 
             name: '提交作业',
             icon:'el-icon-star-on'}
        ]
    },
  ]
})
