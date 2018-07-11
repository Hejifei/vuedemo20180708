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
import PeopleDataAsyncNext from '@/pages/PeopleManage/PeopleDataAsyncNext';//人员数据同步下一步
import PeopleDataAsyncDetail from '@/pages/PeopleManage/PeopleDataAsyncDetail';//人员数据同步查看

//通道管理
import EquipmentManage from '@/pages/passManage/EquipmentManage';//通道管理
import EquipmentAdd from '@/pages/passManage/EquipmentAdd';//通道添加
import SceneManage from '@/pages/passManage/SceneManage';//场景管理
import SceneAdd from '@/pages/passManage/SceneAdd';//场景添加

//通知管理
import NoticeTask from '@/pages/noticeManage/NoticeTask';//通知任务
import NoticeTaskAdd from '@/pages/noticeManage/NoticeTaskAdd';//添加通知任务
import NoticeRecord from '@/pages/noticeManage/NoticeRecord';//通知记录

//监控管理
import MonitorManage from '@/pages/MonitorManage/MonitorManage';//监控管理

// 智能门岗
import PatrolOndutyTask from '@/pages/IntelligentDoor/PatrolOndutyTask';//在岗巡查任务
import PatrolOndutyAdd from '@/pages/IntelligentDoor/PatrolOndutyAdd';//新增在岗巡查
import NoticeOfLeaving from '@/pages/IntelligentDoor/NoticeOfLeaving';//离岗通知
import PatrolOndutyRecord from '@/pages/IntelligentDoor/PatrolOndutyRecord';//在岗巡查记录
import ExposureTimesTask from '@/pages/IntelligentDoor/ExposureTimesTask';//曝光频次任务
import ExposureTimesAdd from '@/pages/IntelligentDoor/ExposureTimesAdd';//新增曝光频次
import ExposureTimesRecord from '@/pages/IntelligentDoor/ExposureTimesRecord';//新增曝光频次
import CountRealtimeTask from '@/pages/IntelligentDoor/CountRealtimeTask';//实时计数任务
import CountRealtimeAdd from '@/pages/IntelligentDoor/CountRealtimeAdd';//新增实时计数
import CountRealtimeRecord from '@/pages/IntelligentDoor/CountRealtimeRecord';//实时计数记录

// 考勤管理
import WorkCheckTask from '@/pages/WorkCheckManage/WorkCheckTask';//考勤任务
import WorkCheckAdd from '@/pages/WorkCheckManage/WorkCheckAdd';//新增考勤任务
import WorkCheckRecord from '@/pages/WorkCheckManage/WorkCheckRecord';//考勤记录

//访客管理
import VistorAuthorize from '@/pages/VistorManage/VistorAuthorize';//访客授权
import Authorize from '@/pages/VistorManage/Authorize';//访客授权
import VistorRecord from '@/pages/VistorManage/VistorRecord';//访客记录

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Layout,
      children:[
        {path: '/',component: Index,},
        //人员管理
        {path: '/PeopleRegistered',component: PeopleRegistered,},
        {path: '/PeopleAdd',component: PeopleAdd,},
        {path: '/PeopleUnRegist',component: PeopleUnRegist,},
        {path: '/PeopleGroupList',component: PeopleGroupList,},
        {path: '/PeopleGroupListAdd',component: PeopleGroupListAdd,},
        {path: '/PeopleDataAsync',component: PeopleDataAsync,},
        {path: '/PeopleDataAsyncNext',component: PeopleDataAsyncNext,},
        {path: '/PeopleDataAsyncDetail',component: PeopleDataAsyncDetail,},
        //通道管理
        {path: '/EquipmentManage',component: EquipmentManage,},
        {path: '/EquipmentAdd',component: EquipmentAdd,},
        {path: '/SceneManage',component: SceneManage,},
        {path: '/SceneAdd',component: SceneAdd,},
        //通知管理
        {path: '/NoticeTask',component: NoticeTask,},
        {path: '/NoticeTaskAdd',component: NoticeTaskAdd,},
        {path: '/NoticeRecord',component: NoticeRecord,},
        //监控管理
        {path: '/MonitorManage',component: MonitorManage,},
        // 智能门岗
        {path: '/PatrolOndutyTask',component: PatrolOndutyTask,},
        {path: '/PatrolOndutyAdd',component: PatrolOndutyAdd,},
        {path: '/NoticeOfLeaving',component: NoticeOfLeaving,},
        {path: '/PatrolOndutyRecord',component: PatrolOndutyRecord,},
        {path: '/ExposureTimesTask',component: ExposureTimesTask,},
        {path: '/ExposureTimesAdd',component: ExposureTimesAdd,},
        {path: '/ExposureTimesRecord',component: ExposureTimesRecord,},
        {path: '/CountRealtimeTask',component: CountRealtimeTask,},
        {path: '/CountRealtimeAdd',component: CountRealtimeAdd,},
        {path: '/CountRealtimeRecord',component: CountRealtimeRecord,},
        //考勤管理
        {path: '/WorkCheckTask',component: WorkCheckTask,},
        {path: '/WorkCheckAdd',component: WorkCheckAdd,},
        {path: '/WorkCheckRecord',component: WorkCheckRecord,},
        //访客管理
        {path: '/VistorAuthorize',component: VistorAuthorize,},
        {path: '/Authorize',component: Authorize,},
        {path: '/VistorRecord',component: VistorRecord,},
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
