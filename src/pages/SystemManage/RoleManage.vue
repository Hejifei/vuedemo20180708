<template>
  <div class="hello">
    <div class="listtitle">角色管理</div>
    <div class="listSearchC">
      <el-input
        placeholder="角色名称"
        v-model="querydata.name"
        clearable>
      </el-input>
      <el-select v-model="querydata.state" placeholder="请选择角色状态">
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
          <router-link to="/RoleAdd" class="el-button">新增</router-link>
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
          label="角色名称">
        </el-table-column>
        <el-table-column
          prop="desc"
          title='desc'
          :show-overflow-tooltip='true'
          label="角色描述">
        </el-table-column>
        <el-table-column
          prop="state"
          label="角色状态">
        </el-table-column>
        <el-table-column label="操作"  width=180>
          <template slot-scope="scope">
            <router-link to="/RoleAdd" class="el-button el-button--mini redbtn">编辑</router-link>
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
          name: '超级管理员',
          desc: '描述描述描述描述描述描述描述描述',
          state: '有效',
        }, {
          id: '2',
          name: '超级管理员2',
          desc: '描述描述描述描述描述描述描述描述',
          state: '有效',
      }],
      dialogVisible: false,
      filterText: '',
      menutree:[
        {
          id: 1,
          label: '首页',
        }, {
          id: 2,
          label: '人员管理',
          children: [{
            id: 10,
            label: '已登记人员管理'
          }, {
            id: 11,
            label: '未登记分组管理'
          }, {
            id: 12,
            label: '人员分组管理'
          }, {
            id: 13,
            label: '人员数据同步'
          }]
        }, {
          id: 3,
          label: '通道管理',
          children: [{
            id: 14,
            label: '设备管理'
          }, {
            id: 15,
            label: '场景管理'
          }]
        },{
          id: 4,
          label: '通知管理',
          children: [{
            id: 16,
            label: '通知任务'
          }, {
            id: 17,
            label: '通知记录'
          }]
        },{
          id: 5,
          label: '监控管理',
        },{
          id: 6,
          label: '智能门岗',
          children: [{
            id: 18,
            label: '在岗巡查任务'
          }, {
            id: 19,
            label: '在岗巡查记录'
          }, {
            id: 20,
            label: '曝光频次任务'
          }, {
            id: 21,
            label: '曝光频次记录'
          }, {
            id: 22,
            label: '实时计数任务'
          }, {
            id: 23,
            label: '实时计数记录'
          }]
        },{
          id: 7,
          label: '考勤管理',
          children: [{
            id: 24,
            label: '考勤任务'
          }, {
            id: 25,
            label: '考勤记录'
          }]
        },{
          id: 8,
          label: '访客管理',
          children: [{
            id: 26,
            label: '访客授权'
          }, {
            id: 27,
            label: '访客记录'
          }]
        },{
          id: 9,
          label: '系统管理',
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
