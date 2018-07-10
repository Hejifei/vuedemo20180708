<template>
  <div class="hello">
    <div class="listtitle">已登记人员管理</div>
    <div class="listSearchC">
      <el-input
        placeholder="姓名"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-input
        placeholder="手机号码"
        v-model="querydata.phone"
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
          <router-link to="/PeopleAdd" class="el-button">新增</router-link>
          <el-button @click="listDelete">删除</el-button> 
        </el-col>
        <el-col :span="12" class="rowright">
          <el-button>模版下载</el-button>
          <el-button><img src="../../assets/img/icons/content_import.png"/> 导入</el-button>
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
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="idcard"
          label="身份证号码">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/PeopleAdd" class="el-button el-button--mini redbtn">查看</router-link>
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
