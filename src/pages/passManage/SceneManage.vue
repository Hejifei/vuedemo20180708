<template>
  <div class="hello">
    <div class="listtitle">场景管理</div>
    <div class="listSearchC">
      <el-input
        placeholder="场景名称"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-button round @click="querylist">查询</el-button>
      <el-row>
        <el-col :span="12">
          <router-link to="/SceneAdd" class="el-button">新增</router-link>
          <el-button @click="listDelete">删除</el-button> 
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
          label="场景名称">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="场景描述">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link :to="'/SceneAdd?id='+scope.row.id" class="el-button el-button--mini redbtn">修改</router-link>
            <el-button class="delbtn"
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="querydata.pageIndex"
        :page-size="querydata.pageSize"
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
        pageIndex: 1,
        pageSize:10,
        pagetotal:10
      },
      tableData: [],
      
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
      // console.log(`当前页: ${self.querydata.currentPage}`);
      self._ajax(self,'/sense/query', self.querydata, function (data) {
        self.querydata.pagetotal = data.data.total;
        self.querydata.pageSize = data.data.pageSize;
        self.querydata.pageIndex = data.data.pageNum;
        self.tableData = data.data.list;
      })
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.querylist();
    },
    handleDelete(id){
      //删除接口
      var self = this;
      let newarr = new Array();
      newarr.push(id)
      this.Delete(self,'/sense/delete',{ids:newarr});
    },
    handleSelectionChange(val) {
      // 获取列表选中项id
      this.delIds = val.map((val)=>val.id);
    },
    listDelete(){
      // 列表页删除
      this.Delete(this,'/sense/delete',{ids:this.delIds});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
