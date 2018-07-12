<template>
  <div class="hello">
    <div class="listtitle">在岗巡查任务</div>
    <div class="listSearchC">
      <el-input
        placeholder="输入关键字查找"
        v-model="querydata.keywords"
        clearable>
      </el-input>
      <el-button round @click="querylist">查询</el-button>
      <el-row>
        <el-col :span="12">
          <router-link to="/PatrolOndutyAdd" class="el-button">新增</router-link>
        </el-col>
        <el-col :span="12" class="rowright"></el-col>
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
          label="任务名称">
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="days"
          label="巡查周天">
        </el-table-column>
        <el-table-column
          prop="state"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="type"
          label="任务类型">
        </el-table-column>
        <el-table-column label="操作" width=340>
          <template slot-scope="scope">
            <router-link to="/SignRecord" class="el-button el-button--mini redbtn">查看</router-link>
            <router-link to="/PatrolOndutyAdd" class="el-button el-button--mini redbtn">修改</router-link>
            <router-link :to="'/NoticeOfLeaving?id='+scope.row.id" class="el-button el-button--mini greybtn">离岗通知</router-link>
            <el-button class="greybtn"
              size="mini"
              @click="taskStop(scope.row.id)">暂停</el-button>
          </template>
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
        keywords:'',
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
          name: 'xx任务名称xx',
          time: '2018-04-10',
          days: '周六、周日',
          state:'启动',
          type:'签到',
        }, {
          id: '2',
          name: 'xx任务名称xx',
          time: '2018-04-10',
          days: '周六、周日',
          state:'启动',
          type:'签到',
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
    taskStop(id){
      //暂停
      var self = this;
      // this.Delete(self,'url',id);
    },
    noticeOfLeaving(id){
      // 离岗通知
    },
    handleSelectionChange(val) {
      // 获取列表选中项id
      this.delIds = val.map((val)=>val.id);
    },
    listDelete(){
      // 列表页删除
      console.log(`删除以下：${this.delIds}`)
      // this.Delete(self,'url',this.delIds);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
