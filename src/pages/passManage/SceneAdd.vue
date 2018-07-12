<template>
  <div class="hello">
    <div class="listtitle">新增场景</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="场景名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="场景描述" prop="remark">
        <el-input type="textarea" v-model="ruleForm.remark"></el-input>
      </el-form-item>
      <el-form-item  prop="deviceIds">
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.deviceIds"
            filterable
            :left-default-checked="[]"
            :right-default-checked="ruleForm.deviceIds"
            :titles="['未添加设备', '已添加的设备']"
            :button-texts="['删除','添加']"
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
        <router-link class="el-button" to="/SceneManage">取消</router-link>
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
      data:[],
      ruleForm: {
          id:'',
          name: '',
          remark: '',
          deviceIds:[],
          equipment: '',
      },
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          remark: [
            { required: true, message: '请输入场景描述', trigger: 'blur' },
          ],
          deviceIds: [
            { required: true, message: '请选择设备', trigger: 'change' }
          ],
        }
      }
  },
  created(){
    let self = this;
  },
  mounted () {  
    let self = this;
    //获取未添加设备
    self._ajax(self,'/device/unbind', {}, function (data) {
        self.data = data.data.map((val)=>{
          let arr = new Object();
          arr.key = val.id;
          arr.label = val.name;
          return arr;
        })
    })
    this.ruleForm.id = this.getUrl(location.href).id;
    if(this.ruleForm.id === ''){
      // 新增
    }else{
      //修改
      self._ajax(self,'/sense/view', {id:this.ruleForm.id}, function (data) {
        self.ruleForm = data.data;
        let newdeviceIds=new Object();
        if(data.data.devices.length >0){
          for(let i = 0;i<data.data.devices.length;i++){
            let arr = new Object();
            arr.key = data.data.devices[i].id;
            arr.label = data.data.devices[i].name;
            self.data.push(arr);
            newdeviceIds[i]=data.data.devices[i].id;
          }
        }
        console.log(newdeviceIds)
        self.deviceIds = newdeviceIds;
      })
    }
    
    // self._ajax(self,'/api/', {}, function (data) {

    // })
  },
  methods: {
    submitForm(formName) {
      let self = this;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.ruleForm.id === ''){
              // 新增
              self._ajax(self,'/sense/add', self.ruleForm, function (data) {
                self.$message({
                  message: '添加成功！',
                  type: 'success'
                });
                self.$router.push({path:'/SceneManage'});
              })
            }else{
              //修改
              self._ajax(self,'/sense/edit', self.ruleForm, function (data) {
                self.$message({
                  message: '修改成功！',
                  type: 'success'
                });
                self.$router.push({path:'/SceneManage'});
              })
            }
            
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    handleChange(value, direction, movedKeys) {
      console.log(value)
      console.log(typeof(value))
      this.ruleForm.deviceIds = value;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
