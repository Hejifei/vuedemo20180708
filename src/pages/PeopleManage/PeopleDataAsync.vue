<template>
  <div class="hello">
    <div class="listtitle">人员数据同步</div>
    <div class="listSearchC">
      <el-input
        placeholder="任务名称"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-select v-model="querydata.selectval" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button round @click="querylist">查询</el-button>
      <el-row>
        <el-col :span="12">
          <el-button @click="dataasync">数据同步</el-button> 
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
          prop="type"
          label="同步状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/PeopleDataAsyncDetail" class="el-button el-button--mini redbtn">查看</router-link>
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
        phone:'',
        selectval:'选项1',
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
          type:'宿管',
          idcard:'320981199306174736',
        }, {
          id: '2',
          name: '王小二',
          sex: '女',
          phone: '18020285668',
          type:'宿管',
          idcard:'320981199306174736',
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
    dataasync(){
      // 列表页删除
      console.log(`数据同步${this.delIds}`)
      // this.Delete(self,'url',this.delIds);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
