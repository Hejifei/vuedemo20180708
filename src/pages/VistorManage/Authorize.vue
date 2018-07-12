<template>
  <div class="hello">
    <div class="listtitle">授权操作</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' label-width="100px" class="demo-ruleForm newaddInfoC">
      <el-form-item label="场景">
        <el-select v-model="ruleForm.scene" placeholder="选择场景" class="right15">
          <el-option label="场景1" value="场景1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="listadd">
        <div class="addtransferC">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="ruleForm.listadd"
            filterable
            :left-default-checked="[]"
            :right-default-checked="[]"
            :titles="['未添加设备', '下发库']"
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
      <el-form-item label="审批状态" prop="ifpass">
        <template>
          <el-radio v-model="ruleForm.ifpass" label="1">通过</el-radio>
          <el-radio v-model="ruleForm.ifpass" label="2">不通过</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="原因" prop="reason">
        <el-input type="textarea" v-model="ruleForm.reason"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">保存</el-button>
        <router-link class="el-button" to="/VistorAuthorize">取消</router-link>
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
    return {
      data:generateData(),
      ruleForm: {
          scene: '',
          listadd:[],
          ifpass:'',
          reason:'',
      },
      rules: {
          scene: [
            { required: true, message: '请选择场景', trigger: 'change' }
          ],
          listadd: [
            { required: true, message: '请添加设备到下发库', trigger: 'change' }
          ],
          ifpass: [
            { required: true, message: '请选择审批状态', trigger: 'change' }
          ],
          reason: [
            { required: true, message: '请输入原因', trigger: 'blur' }
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
