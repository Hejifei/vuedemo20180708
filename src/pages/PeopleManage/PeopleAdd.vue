<template>
  <div class="hello">
    <div class="listtitle">新增人员</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="头像" prop="headimgurl">
        <el-upload
          class="avatar-uploader"
          :action='imgaction'
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="ruleForm.headimgurl" :src="ruleForm.headimgurl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="识别图片" prop="name">
        <el-upload
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="宿舍房间号" prop="roomNum">
        <el-input v-model="ruleForm.roomNum"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择类型">
          <el-option label="type2" value="type2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分组" prop="group">
        <el-select v-model="ruleForm.type" placeholder="请选择分组">
          <el-option label="group1" value="group1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="studentNum">
        <el-input v-model="ruleForm.studentNum"></el-input>
      </el-form-item>
      <el-form-item label="辅导员" prop="teacher">
        <el-select v-model="ruleForm.teacher" placeholder="请选择辅导员">
          <el-option label="teacher1" value="teacher1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="场景" prop="scene">
        <el-select v-model="ruleForm.scene" placeholder="请选择场景">
          <el-option label="scene" value="scene"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备" prop="equipment">
        <el-select v-model="ruleForm.equipment" placeholder="请选择设备">
          <el-option label="equipment" value="equipment"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop='addlist'>
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.addlist"
            filterable
            :left-default-checked="[]"
            :right-default-checked="[]"
            :titles="['人员下发库', '已添加的库']"
            :button-texts="['删除下发库','添加到下发库']"
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
      <el-form-item label="备注" prop="desc">
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
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `分组 ${ i }`,
            // disabled: i % 4 === 0
          });
        }
        return data;
    };
    return {
      imgaction:this.APIURL+'/person/photo/add',
      data: generateData(),
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
          headimgurl:'',
          name: '',
          sex: '',
          phone: '',
          roomNum:'',
          type:'',
          addlist:[],
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
            { required: true, message: '请输入手机号码', trigger: 'blur' }
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
          addlist:[
            { vrequired: true, message: '请添加下发库',trigger: 'change' }
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
      console.log('suc')
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
