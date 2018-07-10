import $ from 'jquery';
import Vue from 'vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import axios from 'axios'
import qs from 'qs';

// import promise from 'es6-promise';
// promise.polyfill();

Vue.use(VueRouter);
Vue.use(VueResource);

function install(Vue, options) {
    let APIURL = 'http://172.16.0.60:8080'

    //ajax全局配置_url接口名称 a参数 b成功方法(code 1)  c失败方法(code other)
    const _ajax = function(that,_url, a, b, c) {
        // 统一错误提示
        if (typeof c != "function") {
            c = function (data) {
                that.$alert(data.msg, '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        // that.$message({
                        //     type: 'info',
                        //     message: `action: ${ action }`
                        // });
                    }
                });
            }
        }
        axios({
            method: 'post',
            url: APIURL + _url,
            data: qs.stringify(a)
          }).then(function(res){
            // console.log(res)
            let d = res.data;
            d = (typeof(d) == 'string') ? JSON.parse(d) : d;
            d.code == '1' ? b(d) : c(d);
          }).catch(function(err){
            console.log('报错：' +err);
          })
    }

    // 删除的公共方法
    const Delete = (that,url,id)=>{
        that.$confirm('确认删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            console.log('1111111111')
            self._ajax(self,APIURL+url, id, function (data) {
                that.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
        }).catch(() => {
            that.$message({
              type: 'info',
              message: '已取消删除'
            });          
        });
    }

    //获取地址栏参数
    const getUrl = function (url) {
        url = !url ? location.search : url;
        var temp = {};
        if (url.indexOf("?") != -1) {
            var params = url.substr(url.indexOf("?") + 1).split("&");
            for (var i = 0; i < params.length; i++) {
                var param = params[i].split("=");
                temp[param[0]] = param[1];
            }
            return temp;
        } else {
            return false;
        }
    }

    // 倒计时
    var countdown = 60;
    const settime =function() {
        if (countdown == 0) {
            $("#getSmsVerify").html("获取验证码");
            $("#getSmsVerify").removeClass("graybtn");
            countdown = 60;
            return;
        } else {
            $("#getSmsVerify").html(countdown + "s后重新获取");
            $("#getSmsVerify").addClass("graybtn");
            countdown--;
        }
        setTimeout(function () {
            settime();
        }, 1000);
    }

    //Unix时间戳转换
    // 正常时间转unix时间戳
    const unixChange=function(_str){
        if(_str != ''){
            var date = new Date(_str);
            var time1 = date.getTime(); 
            return time1/1000;
        }else{
            return '';
        }
    }
    // unix转普通时间
    const formatTime =function(time) {
        let unixtime = time;
        let unixTimestamp = new Date(unixtime * 1000);
        let Y = unixTimestamp.getFullYear();
        let M = unixTimestamp.getMonth() + 1;
        let D = unixTimestamp.getDate();
        let toDay = Y + '-' + M + '-' + D;
        return toDay;
    }

    Vue.prototype.APIURL=APIURL;
    Vue.prototype._ajax=_ajax;
    Vue.prototype.Delete = Delete;
    Vue.prototype.getUrl=getUrl;
    Vue.prototype.settime=settime;
    Vue.prototype.unixChange=unixChange;
    Vue.prototype.formatTime=formatTime;

}
export default install;




