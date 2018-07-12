<template>
  <div class="hello">
    <div class="listtitle">未登记人员管理</div>
    
    <div class="listtableC">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        >
        <el-table-column label="实时抓拍">
          <template slot-scope="scope">
            <img :src="scope.row.imgsrc"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="equipment"
          label="抓拍设备">
        </el-table-column>
        <el-table-column
          prop="date"
          label="最近抓拍时间">
        </el-table-column>
        <el-table-column label="操作" width=180>
          <template slot-scope="scope">
            <router-link to="/PeopleAdd" class="el-button el-button--mini redbtn">登记</router-link>
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
        currentPage: 1,
        pagesize:10,
        pagetotal:100
      },
      
      tableData: [{
          id: '1',
          equipment: '抓拍设备1',
          imgsrc:'../../assets/img/head.jpg',
          date: '2016-05-04 16:48',
        }, {
          id: '2',
          equipment: '抓拍设备1',
          imgsrc:'../../assets/img/head.jpg',
          date: '2016-05-04 16:48',
      }],
      
    }
  },
  created(){
    var self = this;
  },
  mounted () {  
    var self = this;
    // 页面加载获取第一列数据
    this.querylist();
  },
  methods: {
    querylist(){
      var self = this;
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
