<template>
  <div class="hello">
    <div class="listtitle">访客授权</div>
    <div class="listSearchC">
      <el-date-picker
        v-model="querydata.date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      <el-input
        placeholder="输入姓名、手机号"
        v-model="querydata.keywords"
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
          label="访客姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          :show-overflow-tooltip='true'
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="timerange"
          label="时间段">
        </el-table-column>
        <el-table-column
          prop="desc"
          :title='desc'
          :show-overflow-tooltip='true'
          label="来访事由">
        </el-table-column>
        <el-table-column
          prop="namevisted"
          label="被访人">
        </el-table-column>
        <el-table-column label="操作" width=180>
          <template slot-scope="scope">
            <router-link to="/PeopleAdd" class="el-button el-button--mini redbtn">查看</router-link>
            <router-link to="/Authorize" class="el-button el-button--mini greybtn">授权</router-link>
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
        date:'',
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
          name: '唐老鸭',
          phone:'18020285668',
          timerange:'2017-06-20 2017-08-20',
          desc:'来干嘛干嘛来干嘛干嘛来干嘛干嘛来干嘛干嘛',
          namevisted: '米老鼠',
        }, {
          id: '2',
          name: '唐老鸭',
          phone:'18020285668',
          timerange:'2017-06-20 2017-08-20',
          desc:'来干嘛干嘛来干嘛干嘛来干嘛干嘛来干嘛干嘛',
          namevisted: '米老鼠',
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
    authorize(id){
      //暂停
      var self = this;
      // this.Delete(self,'url',id);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
