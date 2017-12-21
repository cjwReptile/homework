// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import {getLoginInfo} from './util/util'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(ElementUI)

router.beforeEach((to,from,next) => {
    let userInfo=getLoginInfo();//从local
   // let exp  =localStorage.getItem("exp");
    if(to.matched.some( m => m.meta.auth)){
        // 对路由进行验证
        if(userInfo.username!=null && userInfo.token!=null) { // 已经登陆
            next()
        }else{
            // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
            alert("请先登录");
            next({path:'/',query:{ referrer: to.fullPath} })  
        }
    }else{
        next()
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
