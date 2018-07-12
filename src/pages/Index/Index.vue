<template>
  <div class="indexC">
    <div class="listtitle">首页</div>
    <div class="indexBGC" :style="indexBG"></div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      indexBG:{
        backgroundImage: "url(" + require("../../assets/img/main_bgpic.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPositon: 'center center',
        backgroundSize: "cover",
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
