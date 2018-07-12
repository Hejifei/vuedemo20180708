<template>
  <div class="hello">
    <div class="listtitle">员工管理</div>
    <div class="listSearchC">
      <el-input
        placeholder="账号"
        v-model="querydata.account"
        clearable>
      </el-input>
      <el-input
        placeholder="用户名"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-input
        placeholder="手机号码"
        v-model="querydata.account"
        clearable>
      </el-input>
      <el-select v-model="querydata.state" placeholder="请选择员工状态">
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
          <router-link to="/EmployeeAdd" class="el-button">新增</router-link>
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
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="account"
          label="账号">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="type"
          label="角色类型">
        </el-table-column>
        <el-table-column label="操作"  width=180>
          <template slot-scope="scope">
            <router-link to="/EmployeeAdd" class="el-button el-button--mini redbtn">编辑</router-link>
            <el-button class="greybtn"
              size="mini"
              @click="authorize(scope.row.id)">授权</el-button>
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
    <el-dialog
      title="角色授权"
      :visible.sync="dialogVisible">
      <div class="authorizeTreeC">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <el-tree
          class="filter-tree"
          :data="menutree"
          :default-checked-keys="aTreekeysChecked"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          :default-expand-all='false'
          :filter-node-method="filterNode"
          ref="authorizeTree">
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="authorizeSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      delIds:[],
      querydata:{
        name:'',
        state:'',
        currentPage: 1,
        pagesize:10,
        pagetotal:100
      },
      options: [{
          value: '有效',
          label: '有效'
        },{
          value: '无效',
          label: '无效'
      }],
      tableData: [{
          id: '1',
          name: '张三',
          account:'admin',
          phone: '18020285668',
          state: '有效',
          type:'超级管理员'
        }, {
          id: '2',
          name: '张三',
          account:'admin',
          phone: '18020285668',
          state: '有效',
          type:'超级管理员'
      }],
      dialogVisible: false,
      filterText: '',
      menutree:[
        {
          id: 1,
          label: '超级管理员',
        }, {
          id: 2,
          label: '普通管理员',
        },
      ],
      aTreekeysChecked:[22],//默认选中的授权
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
        this.$refs.authorizeTree.filter(val);
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
      
    },
    handleSelectionChange(val) {
      // 获取列表选中项id
      this.delIds = val.map((val)=>val.id);
    },
    authorize(){
      // 角色授权
      console.log(`授权${this.delIds}`)
      this.dialogVisible= true;
    },
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
    },
    authorizeSubmit(){
      // 授权提交
      console.log(this.$refs.authorizeTree.getCheckedKeys())
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
