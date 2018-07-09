<template>
  <div class="hello">
    <el-container class='containerC'>
      <el-header class='BMhead'>
        <el-row :gutter="20">
          <el-col :span="4">LOGO</el-col>
          <el-col :span="16" class='BMheadmid'>
            <img />富士通人脸识别通道管理
          </el-col>
          <el-col :span="4" class='BMheadR'>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="icon-camera-retro"></i>
                <i class="el-icon-edit"></i>
                用户名xxx
                <img />
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
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
        <el-aside width="200px">Aside</el-aside>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerC{height:100vh;}
.BMhead{background: linear-gradient(to right, #006DB3 , #3CA0D0);color:#fff;text-align:left;}
.BMheadmid{text-align:left;padding-left:20px !important;}
.BMheadmid img{margin:0 20px;}
.BMheadR{color:#fff;text-align:right;}
.BMheadR .el-dropdown-link{color:#fff;font-size:12px;}
.BMheadR .el-dropdown-link i:nth-child(1){font-size:12px;width:16px;height:16px;display: inline-block;}
</style>
