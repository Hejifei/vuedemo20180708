<template>
  <div class="loginC">
    <div class="loginCenter">
      <form style="display:none;"><input type="password" style="width:0;height:0;"/></form>
      <img src="../../assets/img/login_logo1.png" /> 
      <img src="../../assets/img/logo_title.png" /> 
      <div class="loginfoC">
        <img src="../../assets/img/login_head.png"/>
        <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm"  class="demo-ruleForm">
          <el-form-item label="账号" prop="name">
            <el-input v-model.number="ruleForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-button type="info" style="width:100%;" @click="submitForm('ruleForm')">登录</el-button>
          <!-- <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
    };
    return {
      ruleForm: {
        pass: '',
        name: ''
      },
      rules2: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            // self._ajax(self,'/api/', self.ruleForm, function (data) {

            // })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
