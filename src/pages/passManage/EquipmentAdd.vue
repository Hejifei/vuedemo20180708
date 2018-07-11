<template>
  <div class="hello">
    <div class="listtitle">新增设备</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="设备名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="型号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="IP地址" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="同步端口" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="管理端口" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="报警端口" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="报警用户" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="报警密码" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="场景" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="管理员账号" prop="roomNum">
        <el-input v-model="ruleForm.roomNum"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="roomNum">
        <el-input v-model="ruleForm.roomNum"></el-input>
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
      imgaction:this.APIURL+'/person/photo/add',
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
          name: '',
          sex: '',
          phone: '',
          roomNum:'',
          type:'',
          group:'',
          studentNum:'',
          teacher:'',
          scene:'',
          equipment:'',
          desc: ''
      },
      rules: {
          headimgurl:[
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            {pattern: /^1[34578]d{9}$/, message: '手机号格式错误', trigger: 'blur'}
          ],
          roomNum: [
            { required: true, message: '请输入宿舍房间号', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          group: [
            { required: true, message: '请选择分组', trigger: 'change' }
          ],
          studentNum: [
            { required: true, message: '请输入学号', trigger: 'blur' },
          ],
          teacher: [
            { required: true, message: '请选择辅导员', trigger: 'change' }
          ],
          scene: [
            { required: true, message: '请选择场景', trigger: 'change' }
          ],
          equipment: [
            { required: true, message: '请选择设备', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
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
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    backtolist() {
      this.$router.push({path:'/EquipmentManage'});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
