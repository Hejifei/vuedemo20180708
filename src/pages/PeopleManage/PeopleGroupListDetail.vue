<template>
  <div class="hello">
    <div class="listtitle">查看分组</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="分组名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <div class="el-form-item addtableC">
        <el-table
          ref="multipleTable"
          :data="ruleForm.tableData"
          tooltip-effect="dark"
          style="width: 100%"
          >
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
        </el-table>
        
      </div>
      <el-form-item>
        <router-link class="el-button" to="/PeopleGroupList">取消</router-link>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `何继飞 男 18020285668`,
            // disabled: i % 4 === 0
          });
        }
        return data;
    };
    return {
      data: generateData(),
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
          name: '',
          desc: '',
          tableData: [{
            id: '1',
            name: '王小虎',
            sex: '男',
            phone: '18020285668',
          }, {
            id: '2',
            name: '王小二',
            sex: '女',
            phone: '18020285668',
        }],
      },
      
      rules: {
          name: [
            { required: true, message: '请输入分组名', trigger: 'blur' },
          ],
          state: [
            { required: true, message: '请选择状态', trigger: 'change' }
          ],
          listadd: [
            { required: true, message: '请选择分组对象', trigger: 'change' },
          ],
          desc: [
            { required: true, message: '请输入描述', trigger: 'blur' }
          ],
          
        }
      }
  },
  created(){
    let self = this;
  },
  mounted () {  
    let self = this;
  },
  methods: {
    getGroupInfo(id) {
      let self = this;
      self._ajax(self,'/api/', self.ruleForm, function (data) {

      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
