<template>
  <div class="hello">
    <el-container class='containerC'>
      <el-header class='BMhead'>
        <el-row :gutter="20">
          <el-col :span="4" class='BMheadL'>
            <img @click='menushow = !menushow' src="../../assets/img/icons/side_hide.png"/>
          </el-col>
          <el-col :span="16" class='BMheadmid'>
            <img src="../../assets/img/logo_title.png"/>
          </el-col>
          <el-col :span="4" class='BMheadR'>
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../assets/img/icons/menu.png"/>
                用户名xxx
                <img class="headimg" src='../../assets/img/head.jpg'/>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-collapse-transition>
          <el-aside  v-show="menushow" width="200px">
            <el-menu
              class="el-menu-vertical-demo"
              text-color="#fff"
              background='transparent'
              active-text-color="#fff"
              :router="true">
              <el-submenu class="textleft" index="1">
                <template slot="title">
                  <img src="../../assets/img/icons/side_rygl.png"/>
                  <span>人员管理</span>
                </template>
                <el-menu-item index="/pslregisted">已登记人员管理</el-menu-item>
                <el-menu-item index="/list">未等级人员管理</el-menu-item>
                <el-menu-item index="">人员分组管理</el-menu-item>
                <el-menu-item index="">人员数据同步</el-menu-item>
              </el-submenu>
              <el-submenu class="textleft" index="2">
                <template slot="title">
                  <img src="../../assets/img/icons/side_tdgl.png"/>
                  <span>通道管理</span>
                </template>
                <el-menu-item index="">设备管理</el-menu-item>
                <el-menu-item index="">场景管理</el-menu-item>
              </el-submenu>
              <el-submenu class="textleft" index="3">
                <template slot="title">
                  <img src="../../assets/img/icons/side_tzgl.png"/>
                  <span>通知管理</span>
                </template>
                <el-menu-item index="">通知任务</el-menu-item>
                <el-menu-item index="">通知记录</el-menu-item>
              </el-submenu>
              <el-menu-item class="textleft" index="4">
                <img src="../../assets/img/icons/side_jkgl.png"/>
                <span slot="title">监控管理</span>
              </el-menu-item>
              <el-submenu class="textleft" index="5">
                <template slot="title">
                  <img src="../../assets/img/icons/side_znmg.png"/>
                  <span>智能门岗</span>
                </template>
                <el-menu-item index="">在岗巡查任务</el-menu-item>
                <el-menu-item index="">在岗巡查记录</el-menu-item>
                <el-menu-item index="">曝光频次任务</el-menu-item>
                <el-menu-item index="">曝光频次记录</el-menu-item>
                <el-menu-item index="">实时计数任务</el-menu-item>
                <el-menu-item index="">实时计数记录</el-menu-item>
              </el-submenu>
              <el-submenu class="textleft" index="6">
                <template slot="title">
                  <img src="../../assets/img/icons/side_kqgl.png"/>
                  <span>考勤管理</span>
                </template>
                <el-menu-item index="">考勤任务</el-menu-item>
                <el-menu-item index="">考勤记录</el-menu-item>
              </el-submenu>
              <el-submenu class="textleft" index="7">
                <template slot="title">
                  <img src="../../assets/img/icons/side_fkgl.png"/>
                  <span>访客管理</span>
                </template>
                <el-menu-item index="">访客授权</el-menu-item>
                <el-menu-item index="">访客记录</el-menu-item>
              </el-submenu>
              <el-menu-item class="textleft" index="8">
                <img src="../../assets/img/icons/side_xtgl.png"/>
                <span slot="title">系统管理</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </el-collapse-transition>
        
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      menushow:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header, .el-footer,.el-aside,.el-menu{background-color:transparent;}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover,.el-submenu__title:focus{background-color:#00578F !important;}
.el-menu{width:199px;}
.el-submenu img{width:25px;height:25px;margin:0 5px 0 2px;}
.el-menu .is-opened{background-color:#00578F;}
.el-menu .textleft{text-align:left;}
.el-submenu__title i,.el-menu-item i{color:#fff;}
.el-submenu .el-menu-item{padding-left:53px  !important;}
.containerC{height:100vh;background: linear-gradient(to right, #006DB3 , #3CA0D0);}
.BMhead{color:#fff;text-align:left;}
.BMheadmid{text-align:left;}
.BMheadmid img{width:220px;height:22px;display: inline-block;position: relative;top: 5px;}
.BMheadL img{width:25px;height:25px;position:relative;top:8px;}
.BMheadR{color:#fff;text-align:right;}
.BMheadR .el-dropdown-link{color:#fff;font-size:12px;}
/* .BMheadR .el-dropdown-link i:nth-child(1){font-size:12px;width:16px;height:16px;display: inline-block;} */
.BMheadR .el-dropdown-link img:nth-child(1){width:15px;height:15px;position:relative;top:3px;margin-right:5px;}
.BMheadR .el-dropdown-link .headimg{width:25px;height:25px;position:relative;top:8px;margin:0 5px;}
</style>
