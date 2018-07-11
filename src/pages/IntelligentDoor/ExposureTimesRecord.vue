<template>
  <div class="hello">
    <div class="listtitle">曝光频次记录</div>
    <div class="listSearchC">
      <el-select v-model="querydata.selectval" placeholder="选择任务">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="querydata.selectval" placeholder="设备">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="querydata.selectval" placeholder="摄像头">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="querydata.selectval" placeholder="分组">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="输入关键字查找"
        v-model="querydata.keywords"
        clearable>
      </el-input>
      <el-button round @click="querylist">查询</el-button>
      <el-row>
        <el-col :span="12">
          <el-button @click="patrolNow">立即巡查</el-button> 
        </el-col>
        <el-col :span="12" class="rowright">
          <el-button><img src="../../assets/img/icons/content_export.png"/> 导出</el-button>
        </el-col>
      </el-row>
      
    </div>
    <div class="listtableC">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
          label="选择"
          type="selection"
          width='50'
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="scene"
          label="场景">
        </el-table-column>
        <el-table-column
          prop="equipment"
          label="设备">
        </el-table-column>
        <el-table-column
          prop="camera"
          label="摄像头">
        </el-table-column>
        <el-table-column
          prop="scene"
          label="分组">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话号码">
        </el-table-column>
        <el-table-column
          prop="times"
          label="曝光次数">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="querydata.currentPage"
        :page-size="querydata.pagesize"
        :total="querydata.pagetotal"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      delIds:[],
      querydata:{
        name:'',
        phone:'',
        selectval:'',
        currentPage: 1,
        pagesize:10,
        pagetotal:100
      },
      options: [{
          value: '选项1',
          label: '选项1'
      }],
      tableData: [{
          id: '1',
          name: '王小虎',
          scene: '场景001',
          equipment:'设备001',
          camera:'摄像头001',
          group:'分组001',
          phone: '18020285668',
          times:'1123',
        }, {
          id: '2',
          name: '王小虎',
          scene: '场景001',
          equipment:'设备001',
          camera:'摄像头001',
          group:'分组001',
          phone: '18020285668',
          times:'1123',
      }],
      
    }
  },
  created(){
    let self = this;
  },
  mounted () {  
    let self = this;
    // 页面加载获取第一列数据
    this.querylist();
  },
  methods: {
    querylist(){
      let self = this;
      console.log(`当前页: ${self.querydata.currentPage}`);
      // self._ajax(self,'/api/', self.querydata, function (data) {

      // })
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.querylist();
    },
    handleSelectionChange(val) {
      // 获取列表选中项id
      this.delIds = val.map((val)=>val.id);
    },
    patrolNow(){
      let self = this;
      console.log(`当前页: ${self.querydata.currentPage}`);
      // self._ajax(self,'/api/', self.querydata, function (data) {

      // })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
