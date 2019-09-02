<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link>
		<router-link to="/news">测试</router-link>
    <hr> -->
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name:'app',
  methods: {
  }
}
</script>

<style lang="scss">
body{ 
   padding:0px;
  margin:0px;}
#app {
  font-family: Helvetica, sans-serif;
  position:absolute;
  top:0px;
  bottom:0px;
  width:100%;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .2s ease;}
.fade-enter,.fade-leave-to{
  opacity: 0;
}

</style>
