<template>
  <div class="hello">
    <div class="listtitle">新增分组</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="分组名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <div class="addtransferC">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value3"
          filterable
          :left-default-checked="[]"
          :right-default-checked="[]"
          :titles="['人员', '已添加对象']"
          :button-texts="['删除','添加到分组对象']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          }"
          @change="handleChange"
          :data="data">
          <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </div>
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
      value3: [],
      ruleForm: {
          headimgurl:'',
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
      this.$router.push({path:'/PeopleRegistered'});
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
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
