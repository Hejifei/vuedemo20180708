<template>
  <div class="hello">
    <div class="listtitle">已登记人员管理</div>
    <div class="listSearchC">
      <el-input
        placeholder="姓名"
        v-model="username"
        clearable>
      </el-input>
      <el-input
        placeholder="手机号码"
        v-model="phone"
        clearable>
      </el-input>
      <el-select v-model="selectval" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button round>查询</el-button>
      <el-row>
        <el-col :span="12">
          <el-button>新增</el-button>
          <el-button>删除</el-button> 
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
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        >
        <el-table-column
          label="选择"
          type="selection">
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
            <el-button class="redbtn"
              size="mini"
              >查看</el-button>
            <el-button class="delbtn"
              size="mini"
              type="danger"
              @click="handleDelete(scope.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      phone:'',
      options: [{
          value: '选项1',
          label: '选项1'
        }],
      selectval:'选项1',
      tableData3: [{
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
