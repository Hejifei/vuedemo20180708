<template>
  <div class="hello">
    <div class="listtitle">新增分组</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="分组名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select v-model="ruleForm.state" placeholder="请选择状态">
          <el-option label="有效" value="boy"></el-option>
          <el-option label="无效" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item prop="listadd">
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.listadd"
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
          sex: '',
          phone: '',
          listadd:[],
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
      this.$router.push({path:'/PeopleGroupList'});
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
