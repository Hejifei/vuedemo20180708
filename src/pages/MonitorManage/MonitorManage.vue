<template>
  <div class="hello">
    <div class="listtitle">监控管理</div>
    <div class="monitorC">
      <div class="monitorL">
        <el-tree
          :data="treedata"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="monitorR">
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>

        <div class="imglist">
          <div class="imgC unregist">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC registed">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC unregist">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC registed">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC unregist">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC registed">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC unregist">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
          <div class="imgC registed">
            <img src="../../assets/img/head.jpg" />
            <p>未注册</p>
            <p>2018.07.10 17:25</p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      treedata:[
        {
          label: '场景分组1',
          children: [{
            label: '设备分组001',
            children: [{
              label: '监控001',
              id:1
            },{
              label: '监控002',
              id:2
            },{
              label: '监控003',
              id:3
            }]
          },{
            label: '设备分组002',
            children: [{
              label: '监控001',
              id:1
            },{
              label: '监控002',
              id:2
            },{
              label: '监控003',
              id:3
            }]
          }]
        }, {
          label: '场景分组2',
          children: [{
            label: '设备分组001',
            children: [{
              label: '监控001',
              id:1
            },{
              label: '监控002',
              id:2
            },{
              label: '监控003',
              id:3
            }]
          }]
        }, {
          label: '场景分组3',
          children: [{
            label: '设备分组001',
            children: [{
              label: '监控001',
              id:1
            },{
              label: '监控002',
              id:2
            },{
              label: '监控003',
              id:3
            }]
          }]
      }],
      defaultProps: {
          children: 'children',
          label: 'label'
      },
      querydata:{
        currentPage: 1,
        pagesize:10,
        pagetotal:100
      },
      tableData: [],
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: "" //url地址
        }],
        // poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  },
  created(){
    let self = this;
  },
  mounted () {  
    let self = this;
    // 页面加载获取第一列数据
    this.querylist();
  },
  methods: {
    querylist(){
      let self = this;
      console.log(`当前页: ${self.querydata.currentPage}`);
      // self._ajax(self,'/api/', self.querydata, function (data) {

      // })
    },
    handleNodeClick(data) {
      // 状态树点击
      console.log(data);
      if(data.children === undefined){
        console.log(`点击的监控id为${data.id}`)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
