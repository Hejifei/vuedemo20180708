<template>
  <div class="hello">
    <div class="listtitle">新增考勤任务</div>
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
      <el-form-item label="上班时间" prop="workstarttime">
        <el-time-picker
          v-model="ruleForm.workstarttime"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="上班时间">
        </el-time-picker>    
      </el-form-item>
      <el-form-item label="下班时间" prop="workendtime">
        <el-time-picker
          v-model="ruleForm.workendtime"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="下班时间">
        </el-time-picker>    
      </el-form-item>
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
            :button-texts="['删除考勤对象','添加到考勤对象']"
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
      days:['星期一','星期二','星期三','星期四','星期五','星期六','星期日',],
      queryinfo:{
        group:'',
        personname:'',
      },
      data: generateData(),
      ruleForm: {
          name: '',
          desc:'',
          days:[],
          startTime: '',
          endTime:'',
          workstarttime:'',
          workendtime:'',
          listadd:[]
      },
      rules: {
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' }
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
          workstarttime: [
            { required: true, message: '请选择上班时间', trigger: 'change' }
          ],
          workendtime:[
            { required: true, message: '请选择下班时间', trigger: 'change' }
          ],
          listadd: [
            { required: true, message: '请添加考勤对象', trigger: 'blur' },
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
      this.$router.push({path:'/WorkCheckTask'});
    },
    querylist(){
      let self = this;
      // self._ajax(self,'/api/', self.querydata, function (data) {

      // })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
