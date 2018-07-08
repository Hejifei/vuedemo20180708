<template>
  <div class="hello">
    首页
    <router-link class="fl" to="/login">
    登陆
    <div class='flexdiv'>
      <div class='width50'>50px</div>
      <div class='width1'>1flex</div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flexdiv{display:flex;}
.width50{width:50px;}
.width1{flex:1;}
</style>
