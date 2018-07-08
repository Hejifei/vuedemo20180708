import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginLayout from '@/pages/Layout/LoginLayout'
import Layout from '@/pages/Layout/Layout'
import Login from '@/pages/Login/Index'
import Index from '@/pages/Index/Index'
import List from '@/pages/Index/List'
import Listson from '@/pages/Index/Listson'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Layout,
      children:[
        {path: '/',component: Index,},
        {path: '/list',component: List,
          children:[
            {path: '',component: Listson},
          ]
        },
      ]
    },
    {path: '/login',component: LoginLayout,
      children:[
        // {path: '',redirect: '/login/index'},
        {path: '/login',component: Login,},
      ]
    }
  ]
})
