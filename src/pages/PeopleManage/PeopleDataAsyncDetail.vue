<template>
  <div class="hello">
    <div class="listtitle">人员数据同步</div>
    <div class="listSearchC">
      <el-input
        placeholder="姓名"
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
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="group"
          label="分组">
        </el-table-column>
        <el-table-column
          prop="xfku"
          label="下发库">
        </el-table-column>
        <el-table-column
          prop="equipmentName"
          label="设备号">
        </el-table-column>
        <el-table-column
          prop="scene"
          label="场景">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.state === 1">已同步</span>
            <span v-else>未同步</span>
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
        name:'',
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
          sex: '男',
          phone: '18020285668',
          group:'分组1',
          xfku:'下发库',
          equipmentName:'设备xxxxx',
          scene:'场景1',
          state:1
        }, {
          id: '2',
          name: '王小虎',
          sex: '男',
          phone: '18020285668',
          group:'分组1',
          xfku:'下发库',
          equipmentName:'设备xxxxx',
          scene:'场景1',
          state:2
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
    handleDelete(id){
      //删除接口
      var self = this;
      this.Delete(self,'url',id);
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
