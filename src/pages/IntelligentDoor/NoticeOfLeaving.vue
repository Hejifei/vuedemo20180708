<template>
  <div class="hello">
    <div class="listtitle">离岗通知</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="通知形式" prop="noticeForm">
        <template>
          <el-radio v-model="ruleForm.noticeForm" label="1">微信公众号</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="通知类型" prop="noticetype">
        <template>
          <el-radio v-model="ruleForm.noticetype" label="1">在岗巡查</el-radio>
          <el-radio v-model="ruleForm.noticetype" label="2">签到</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="通知内容" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="backtolist()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
          noticeForm:'',
          noticetype: '',
          desc: ''
      },
      rules: {
          noticeForm: [
            { required: true, message: '请选择通知形式', trigger: 'change' }
          ],
          noticetype:[
            { required: true, message: '请选择通知类型', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入通知内容', trigger: 'blur' },
          ],
        }
      }
  },
  created(){
    let self = this;
  },
  mounted () {  
    let self = this;
    // self._ajax(self,'/api/', {}, function (data) {

    // })
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm.timerange)
      let self = this;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            self._ajax(self,'/api/', self.ruleForm, function (data) {

            })
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    backtolist() {
      this.$router.push({path:'/PatrolOndutyTask'});
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
