import Vue from 'vue';
import $ from 'jquery';
// import VueResource from 'vue-resource';
// import VueRouter from 'vue-router';
import axios from 'axios'
import qs from 'qs';

exports.install = function (Vue, options) {
    let APIURL = ''

    //ajax全局配置_url接口名称 a参数 b成功方法(code 1)  c失败方法(code other)
    const _ajax = function(that,_url, a, b, c) {
        if (typeof c != "function") {
            c = function (data) {
                setTimeout(function(){layer.closeAll();}, 2000);
                layer.alert(data.msg, {icon: 5}, function () { layer.closeAll(); })
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
            //成功的处理
            // if (d.code == '-1' || _url == "/api/session/check" && d.code == 0) {
            //     getSID(that);
            // } else if (d.code == '-3'|| _url == "/api/user/logout" && d.code == -1) {
            //     layer.msg(d.msg);
            //     getSID(that,'/login')
            // } else {
                d.code == '1' ? b(d) : c(d);
            // }
          }).catch(function(err){
            console.log('报错：' +err);
          })
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
}



