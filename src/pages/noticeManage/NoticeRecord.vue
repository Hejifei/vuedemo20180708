<template>
  <div class="hello">
    <div class="listtitle">通知记录</div>
    <div class="listtableC">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        >
        <el-table-column
          prop="name"
          width=200
          label="任务名称">
        </el-table-column>
        <el-table-column
          prop="times"
          width=100
          label="通知次数">
        </el-table-column>
        <el-table-column
          prop="content"
          title='content'
          align='left'
          :show-overflow-tooltip='true'
          label="通知内容">
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
        currentPage: 1,
        pagesize:10,
        pagetotal:100
      },
      tableData: [{
          id: '1',
          name: 'xx任务名称xxx',
          times: '1',
          content:'通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示通知内容不会完全显示'
        }, {
          id: '2',
          name: 'xx任务名称xxx',
          times: '1',
          content:'通知内容不会完全显示'
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
