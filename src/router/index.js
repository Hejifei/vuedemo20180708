import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginLayout from '@/pages/Layout/LoginLayout'
import Layout from '@/pages/Layout/Layout'
import Login from '@/pages/Login/Index'
import Index from '@/pages/Index/Index'
import List from '@/pages/Index/List'
import Listson from '@/pages/Index/Listson'
// 人员管理
import PeopleRegistered from '@/pages/PeopleManage/PeopleRegistered';//已登记人员管理
import PeopleAdd from '@/pages/PeopleManage/PeopleAdd';//新增人员
import PeopleUnRegist from '@/pages/PeopleManage/PeopleUnRegist';//未登记人员管理
import PeopleGroupList from '@/pages/PeopleManage/PeopleGroupList';//人员分组管理
import PeopleGroupListAdd from '@/pages/PeopleManage/PeopleGroupListAdd';//人员分组增加
import PeopleDataAsync from '@/pages/PeopleManage/PeopleDataAsync';//人员数据同步
import PeopleDataAsyncDetail from '@/pages/PeopleManage/PeopleDataAsyncDetail';//人员数据同步查看

//通道管理
import EquipmentManage from '@/pages/passManage/EquipmentManage';//通道管理
import EquipmentAdd from '@/pages/passManage/EquipmentAdd';//通道添加
import SceneManage from '@/pages/passManage/SceneManage';//场景管理
import SceneAdd from '@/pages/passManage/SceneAdd';//场景添加

//监控管理
import MonitorManage from '@/pages/MonitorManage/MonitorManage';//监控管理


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Layout,
      children:[
        {path: '/',component: Index,},
        {path: '/PeopleRegistered',component: PeopleRegistered,},
        {path: '/PeopleAdd',component: PeopleAdd,},
        {path: '/PeopleUnRegist',component: PeopleUnRegist,},
        {path: '/PeopleGroupList',component: PeopleGroupList,},
        {path: '/PeopleGroupListAdd',component: PeopleGroupListAdd,},
        {path: '/PeopleDataAsync',component: PeopleDataAsync,},
        {path: '/PeopleDataAsyncDetail',component: PeopleDataAsyncDetail,},

        {path: '/EquipmentManage',component: EquipmentManage,},
        {path: '/EquipmentAdd',component: EquipmentAdd,},
        {path: '/SceneManage',component: SceneManage,},
        {path: '/SceneAdd',component: SceneAdd,},

        {path: '/MonitorManage',component: MonitorManage,},
      ]
    },
    {path: '/login',component: Login,
      // children:[
      //   // {path: '',redirect: '/login/index'},
      //   {path: '/login',component: Login,},
      // ]
    }
  ]
})
