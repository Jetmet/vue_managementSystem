<template>
    <el-row class="container">
      <el-col :span="24" class="header" type='flex' justify='space-between'>
          <el-col :span="3" class="logo" :class="isCollapse?'logo-col-width':'log-width'">
            {{isCollapse?'':title}}
          </el-col>
          <el-col :span="2">
              <div class="tools" @click="collapse">
                  <i class="el-icon-menu"></i>
              </div>
          </el-col>
          <el-col :span='15' class="topNone" style="height:100%;"><div></div></el-col>
          <el-col :span="4" class="userinfo">
            <span>李哥</span>
            <span>运营</span>
            <span>退出</span>
          </el-col>
      </el-col>
      <el-col :span="24" class="main">
        <aside :class="isCollapse?'aside-col-width':'aside-width'">
           <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse?true:false" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router :collapse-transition="hidden">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">全局效果</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/program_overview">计划概况</el-menu-item>
                    <el-menu-item index="/programme_detail">计划详情</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/global_monitoring">
                  <i class="el-icon-menu"></i>
                  <span slot="title">全局监控</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span slot="title">店铺管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/shopList">店铺列表</el-menu-item>
                    <el-menu-item index="/shopInfo">店铺信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/kit">
                  <i class="el-icon-service"></i>
                  <span slot="title">锦囊管理</span>
                </el-menu-item>
                <el-menu-item index="/originality">
                  <i class="el-icon-edit"></i>
                  <span slot="title">创意管理</span>
                </el-menu-item>
                <el-menu-item index="/category">
                  <i class="el-icon-date"></i>
                  <span slot="title">类目管理</span>
                </el-menu-item>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-printer"></i>
                    <span slot="title">财务管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/account">账户列表</el-menu-item>
                    <el-menu-item index="/rechange">充值/消费详情</el-menu-item>
                    <el-menu-item index="/ditail">交易详情</el-menu-item>
                    <el-menu-item index="/audit">订单审核</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="/contract">
                  <i class="el-icon-edit-outline"></i>
                  <span slot="title">合同管理</span>
                </el-menu-item>
                <el-menu-item index="/system">
                  <i class="el-icon-setting"></i>
                  <span slot="title">系统管理</span>
                </el-menu-item>
              </el-menu>
        </aside>
        <section>
          <router-view></router-view>
        </section>
      </el-col>
    </el-row>

</template>

<script>

export default {
  components:{},
  props:{},
  data(){
    return {
        srcImg:'static/img/logo.png',
        title:'个人后台管理系统',
        isCollapse: false,
        hidden: false,
    }
  },
  methods: {
      collapse:function() {
        this.isCollapse=!this.isCollapse;
      }
    }

}
</script>
<style  scoped lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .router-view{background-color: #f3f8ff;}
 .container{
   position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
    .header{
              display: block;
                height: 52px;
                line-height: 52px;
                background-color: #545c64;
                box-shadow: 0px 2px 5px 0px
                  rgba(0, 0, 0, 0.3);
                .logo{
                  color: #fff;
                  box-sizing: border-box;
                  display: flex;align-items: center;
                  img{height: 40px;width: 40px;}
                  }
                .logo-width{width: 240px;}
                .logo-col-width{width: 100px;}
                .tools{color: #fff;cursor: pointer;}
                .userinfo{
                  color: #fff;
                  display: flex;
                  cursor: pointer;
                  justify-content: space-around;}
            }
    .main{
      position: absolute;
      display: flex;
      top: 52px;
      bottom: 0px;
      // background: pink;
      overflow: hidden;
        aside,el-menu{
          height: 100%;
          background: #545c64;
          // transition: 0.2s;
          border: none;
        }
        .aside-width{width: 200px;}
        .aside-col-width{width: 64px;}
        section{
          flex: 1;
         margin:40px;
          box-sizing: content-box;
        }
    }
 }



</style>
