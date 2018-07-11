<template>
  <div class="hello">
    <div class="listtitle">访客记录</div>
    <div class="listSearchC">
      <p>
        <label>来访人数：<span>12</span>人</label>
        <label>超时未离开：<span>12</span>人</label>
        <label>未来来访人数：<span>12</span>人</label>
      </p>
      <el-date-picker
        v-model="querydata.date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      <el-select v-model="querydata.state" placeholder="状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="输入姓名"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-button round @click="querylist">查询</el-button>
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
          label="访客">
        </el-table-column>
        <el-table-column
          prop="namevisted"
          label="被访人">
        </el-table-column>
        <el-table-column
          prop="reason"
          :show-overflow-tooltip='true'
          label="来访事由">
        </el-table-column>
        <el-table-column
          prop="starttime"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="endtime"
          label="结束时间">
        </el-table-column>
        <el-table-column
          prop="time"
          label="访客时长">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="equipment"
          label="抓拍设备">
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
        date:'',
        name:'',
        state:'',
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
          name:'张三',
          namevisted:'李四',
          phone:'18020285668',
          reason:'来访事由来访事由',
          starttime:'2018-07-11 08:30',
          endtime:'2018-07-11 09:30',
          time:'01:00',
          state:'离开',
          equipment:'入口设备',
        }, {
          id: '2',
          name:'张三',
          namevisted:'李四',
          phone:'18020285668',
          reason:'来访事由来访事由',
          starttime:'2018-07-11 08:30',
          endtime:'2018-07-11 09:30',
          time:'01:00',
          state:'离开',
          equipment:'入口设备',
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
