<template>
  <div class="hello">
    <div class="listtitle">新增人员</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="头像" prop="photo">
        <el-upload
          class="avatar-uploader"
          :action='imgaction'
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="ruleForm.photo" :src="imgurl+ruleForm.photo" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>展示于设备前端</p>
      </el-form-item>
      <el-form-item label="识别图片" prop="images">
        <el-upload
          :action="imgaction"
          list-type="picture-card"
          :limit='5'
          :file-list='fileList'
          :on-preview="handlePictureCardPreview"
          :on-success="handleimagesSuccess"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <p>（请上传1~5张人脸特征识别图片，建议选取清晰的正脸、左侧脸、右侧脸、低头、抬头）</p>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="idCard">
        <el-input v-model="ruleForm.idCard"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender" placeholder="请选择性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="宿舍房间号" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="personType">
        <el-select v-model="ruleForm.personType" placeholder="请选择类型" >
          <el-option v-for="(typeson,index) in typelist" :key="index" :label="typeson.desc" :value="typeson.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分组" prop="groupIds">
        <el-select v-model="ruleForm.groupIds" placeholder="请选择分组">
          <el-option v-for="(groupson,index) in grouplist" :key='index' :label="groupson.name" :value="groupson.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="studentNumber">
        <el-input v-model="ruleForm.studentNumber"></el-input>
      </el-form-item>
      <el-form-item label="辅导员" prop="teacherId">
        <el-select v-model="ruleForm.teacherId" placeholder="请选择辅导员">
          <el-option v-for="(teacher,index) in teacherlist" :key="index" :label="teacher.name" :value="teacher.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="场景" prop="scene">
        <el-select v-model="ruleForm.scene" placeholder="请选择场景" @change="sceneChange">
          <el-option v-for="(scene,index) in scenelist" :key="index" :label="scene.name" :value="scene.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备" prop="equipment">
        <el-select v-model="ruleForm.equipment" placeholder="请选择设备"  @change="equipmentChange">
          <el-option v-for="(equipment,index) in euipmentlist" :key="index" :label="equipment.name" :value="equipment.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop='faceDbIds'>
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.faceDbIds"
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
            :data="librarylist">
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
          </el-transfer>
        </div>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" v-model="ruleForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">保存</el-button>
        <router-link class="el-button" to="/PeopleRegistered">取消</router-link>
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
      fileList:[],
      imgurl:this.APIURL,
      imgaction:this.APIURL+'/person/image/upload',
      data: generateData(),
      dialogImageUrl: '',
      dialogVisible: false,
      typelist:[],
      grouplist:[],
      teacherlist:[],
      scenelist:[],
      euipmentlist:[],
      librarylist:[],
      ruleForm: {
          photo:'',
          images:[],
          name: '',
          gender: '',
          idCard:'',
          phone: '',
          address:'',
          personType:'',
          faceDbIds:[],
          groupIds:'',
          studentNumber:'',
          teacherId:'',
          scene:'',
          equipment:'',
          remark: ''
      },
      rules: {
          photo:[
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          // images:[
          //   { required: true, message: '请上传图片', trigger: 'blur' },
          //   { min: 1, max: 5, message: '请上传1~5张图片', trigger: 'blur' }
          // ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          idCard: [
            { required: true, message: '请输入身份证', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入宿舍房间号', trigger: 'blur' },
          ],
          personType: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          groupIds: [
            { required: true, message: '请选择分组', trigger: 'change' }
          ],
          studentNumber: [
            { required: true, message: '请输入学号', trigger: 'blur' },
          ],
          teacherId: [
            { required: true, message: '请选择辅导员', trigger: 'change' }
          ],
          scene: [
            { required: true, message: '请选择场景', trigger: 'change' }
          ],
          equipment: [
            { required: true, message: '请选择设备', trigger: 'change' }
          ],
          // faceDbIds:[
          //   { vrequired: true, message: '请添加下发库',trigger: 'change' }
          // ],
          remark: [
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
    // 人员类型
    self._ajax(self,'/person/type/all', {}, function (data) {
      self.typelist = data.data;
    })
    // 人员类型
    self._ajax(self,'/group/all', {}, function (data) {
      self.grouplist = data.data;
    })
    // 辅导员列表
    self._ajax(self,'/person/teacher/all', {}, function (data) {
      self.teacherlist = data.data;
    })
    //场景列表
    self._ajax(self,'/sense/all', {}, function (data) {
      self.scenelist = data.data;
    })
  },
  methods: {
    submitForm(formName) {
      console.log(this.fileList)
      let self = this;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            self._ajax(self,'/person/add', self.ruleForm, function (data) {

            })
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    handleChange(value, direction, movedKeys) {
      this.ruleForm.faceDbIds = value;
      console.log(this.ruleForm.faceDbIds);
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      // this.ruleForm.photo = this.APIURL+res.data;
      this.ruleForm.photo = res.data;
    },
    handleimagesSuccess(res,file){
      console.log(res)
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
      console.log(file.url)
      this.dialogVisible = true;
    },
    sceneChange(){
      // 根据场景获取设备
      let self= this;
      self._ajax(self,'/device/monitor/getBySenseId', {senseId:self.ruleForm.scene}, function (data) {
        self.euipmentlist = data.data;
      })
    },
    equipmentChange(){
      // 根据设备获取人员下发库
      let self= this;
      self._ajax(self,'/device/facedb/getByDeviceId', {deviceId:self.ruleForm.equipment}, function (data) {
        self.librarylist = data.data.map((val)=>{
          let arr = new Object();
          arr.key = val.id;
          arr.label = val.name;
          return arr;
        })
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
