<template>
<div>
   <div id="header">
      <el-menu :default-active="activeIndex" class="el-menu-nav" mode="horizontal" :router="true">
<!--               active-text-color="#ffffff" background-color="#23A784">-->
         <el-menu-item class="mr-auto">
            <router-link id="logo" to="/blogs">
               <img src="../assets/logo.png">
               <span class="title">Blog</span>
               <span class="motto">Aspire to inspire until I expire！</span>
            </router-link>
         </el-menu-item>
         <el-menu-item class="header_search">
            <el-input
                    placeholder="请输入搜索内容"
                    v-model="searchStr">
            </el-input>
         </el-menu-item>
         <!--<el-menu-item class="header_title" index="/blogs">博客</el-menu-item>
         <el-menu-item class="header_title" index="/category">分类</el-menu-item>
         <el-menu-item class="header_title" index="/archive">归档</el-menu-item>-->
         <el-menu-item class="header_title" index="/about">关于</el-menu-item>
         <el-menu-item class="header_title" index="/archive">归档</el-menu-item>
         <el-menu-item class="header_title" index="/category">分类</el-menu-item>
         <el-menu-item class="header_title" index="/blogs">博客</el-menu-item>
      </el-menu>
   </div>
</div>
</template>

<script>
export default {
   name: "Header",
   data () {
      return{
         activeIndex:'/blogs',
         searchStr:''
      }
   },

   methods:{
      search(){

      }
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
   width 100%;
.el-menu-nav
   width 100%;
   .header_title
      float right !important;
   .header_search
      display inline;
      margin 0 10% !important;

.title
   font-size 50px;
   color black;
.motto
   font-size 15px;
   font-style: italic;
   line-height 60px;
</style>
