<template>
  <div class="hello">
    <div class="listtitle">考勤记录</div>
    <div class="listSearchC">
      <el-select v-model="querydata.task" placeholder="选择任务">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="querydata.group" placeholder="选择分组">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="输入姓名、手机号"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-time-select
          placeholder="起始时间"
          v-model="querydata.startTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00'
          }">
      </el-time-select>
      <el-time-select
          placeholder="结束时间"
          v-model="querydata.endTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00',
            minTime: querydata.startTime
      }">
      </el-time-select>
      <el-button round @click="querylist">查询</el-button>
      <el-row>
        <el-col class="rowright">
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
        >
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="group"
          label="分组">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="workstarttime"
          label="上班时间">
        </el-table-column>
        <el-table-column
          prop="workendtime"
          label="下班时间">
        </el-table-column>
        <el-table-column
          prop="equipment"
          label="设备">
        </el-table-column>
        <el-table-column
          prop="scene"
          label="场景">
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
      querydata:{
        name:'',
        task:'',
        group:'',
        startTime:'',
        endTime:'',
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
          name:'姓名1',
          phone:'18020285668',
          group:'分组00x',
          date:'2018-07-11',
          workstarttime:'08:30',
          workendtime:'17:30',
          equipment:'设备001',
          scene: '场景001',
        }, {
          id: '2',
          name:'姓名1',
          phone:'18020285668',
          group:'分组00x',
          date:'2018-07-11',
          workstarttime:'08:30',
          workendtime:'17:30',
          equipment:'设备001',
          scene: '场景001',
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
