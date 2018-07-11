<template>
  <div class="hello">
    <div class="listtitle">新增通知任务</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="任务名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="任务描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="周天" prop="days">
        <div>
          <el-checkbox-group v-model="ruleForm.days" class="specialcheckbox">
            <el-checkbox-button v-for="day in days" :label="day" :key="day">{{day}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-form-item label="时段" prop="timerange">
        <el-time-select
          placeholder="起始时间"
          v-model="ruleForm.startTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00'
          }">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="ruleForm.endTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00',
            minTime: ruleForm.startTime
          }">
        </el-time-select>
      </el-form-item>
      <el-form-item label="通知类型" prop="type">
        <template>
          <el-radio v-model="ruleForm.type" label="1">备选项</el-radio>
          <el-radio v-model="ruleForm.type" label="2">备选项</el-radio>
        </template>
      </el-form-item>
      <!-- <el-form-item label="设备" prop="equipment">
        <el-select v-model="ruleForm.equipment" placeholder="请选择设备">
          <el-option label="group1" value="group1"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="人员分组">
        <el-select v-model="queryinfo.group" placeholder="选择分组" class="right15">
          <el-option label="group1" value="group1"></el-option>
        </el-select>
        <el-input v-model="queryinfo.personname" placeholder="输入人员名" class="right15"></el-input>
        <el-button round @click="querylist">查询</el-button>
      </el-form-item>
      <el-form-item prop="listadd">
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.listadd"
            filterable
            :left-default-checked="[]"
            :right-default-checked="[]"
            :titles="['未添加对象', '已添加对象']"
            :button-texts="['删除通知对象','添加到通知对象']"
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
      <el-form-item label="通知内容" prop="noticeInfo">
        <el-input type="textarea" v-model="ruleForm.noticeInfo"></el-input>
      </el-form-item>
      <el-form-item label="显示照片" prop="headimgurl">
        <el-upload
          class="avatar-uploader"
          :action='imgaction'
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="ruleForm.headimgurl" :src="ruleForm.headimgurl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>（展示于设备前端）</p>
      </el-form-item>
      <el-form-item label="音频文件" prop="video">
        <el-input
          type='file'
          ref="videoinput"
          id='videoinput'
          class="c-hide"
          multiple="multiple"
          accept='.mp3, .ogg, .wav'
          @change="handkeFileChange"
        ></el-input>
        <el-input
          placeholder="仅支持mp3、ogg、wav、格式的音频文件"
          class="right15 width250"
          v-model='videofilename'
          clearable>
        </el-input>
        <el-button  @click="focusclick">添加文件</el-button> 
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
            label: `姓名 性别 18020285668`,
            // disabled: i % 4 === 0
          });
        }
        return data;
    };
    //验证时段不能为空
    const validateTimerange = (rule, value, callback) => {
        if (this.ruleForm.startTime === '' || this.ruleForm.endTime === '') {
          callback(new Error('请选择时段'));
        } else {
          callback();
        }
      };
    return {
      imgaction:this.APIURL+'/person/photo/add',
      days:['星期一','星期二','星期三','星期四','星期五','星期六','星期日',],
      queryinfo:{
        group:'',
        personname:'',
      },
      videofilename:'',
      focusState:false,
      data: generateData(),
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
          headimgurl:'',
          name: '',
          days:[],
          startTime: '',
          endTime: '',
          listadd:[],
          type:'',
          equipment:'',
          noticeInfo:'',
          desc: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写任务描述', trigger: 'blur' }
          ],
          days: [
            { required: true, message: '请选择周天', trigger: 'change' }
          ],
          timerange:[
            { required: true,validator: validateTimerange, trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择通知类型', trigger: 'change' }
          ],
          listadd:[
            { required: true, message: '请选择设备', trigger: 'change' }
          ],
          noticeInfo: [
            { required: true, message: '请输入通知内容', trigger: 'blur' },
          ],
          video: [
            { required: true, message: '请选择音频文件', trigger: 'change' }
          ],
          headimgurl:[
            { required: true, message: '请上传图片', trigger: 'blur' },
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
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    backtolist() {
      this.$router.push({path:'/NoticeTask'});
    },
    handleAvatarSuccess(res, file) {
      //图片上传成功
      console.log('suc')
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      //图片上传验证
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
    },
    querylist(){
      let self = this;
      // self._ajax(self,'/api/', self.querydata, function (data) {

      // })
    },
    focusclick () {
      // 按钮模拟音频文件输入框的点击
      document.getElementById('videoinput').click();
    },
    handkeFileChange(){
      // 音频文件上传
      let file = document.getElementById('videoinput').files[0];
      this.videofilename = file.name;
      // console.log(this.$refs.videoinput)
      // console.log(e.target.files)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
