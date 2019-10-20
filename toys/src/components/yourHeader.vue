<template>
  <div id=y-header>

    <!-- 搜索条 -->
    <div id="y-d1">
      <input type="text" class="sear1" placeholder="search...">
     <button class="btn1"></button>
      <img src="../../public/img/sousuo.png" width="20px" height="20px">
    </div>

    <!-- 左边白云 -->
    <div id="y-d2"></div>

    <!-- 玩具logo -->
    <div id="y-d3"></div>

    <!-- 右边登陆下拉菜单 -->
    <div class="dropdown" id="y-d31">
      <button>我的消息</button>
      <button>我的宝贝</button>
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        我的登陆
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#">微信登陆</a></li>
        <li><a href="#">注册帐号</a></li>
        <li><a href="#">退出登陆</a></li>
        <li role="separator" class="divider"></li>
      </ul>
    </div>

    <!-- 购物车下拉菜单 -->
    <div class="dropdown" id="y-d4">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#">待定</a></li>
        <li><a href="#">待定</a></li>
        <li><a href="#">待定</a></li>
        <li role="separator" class="divider"></li>
      </ul>
    </div>

    <!-- 右边导航条 -->
    <div id="y-d5">
      <div class="dropdown">
          <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">玩具家首页</button>
          <ul class="dropdown-menu">
              <li>主页</li>
          </ul>     
      </div>
      <div class="dropdown">
          <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">教育体系</button>
          <ul class="dropdown-menu">
              <li>童话世界</li>
              <li>理念体系</li>
              <li>社会关注</li>
              <li>玩具家说</li>
              <li>我玩你看</li>
              <li>你玩我看</li>
              <li>直播</li>
          </ul>     
      </div>
      <div class="dropdown">
          <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">社会关注</button>
          <ul class="dropdown-menu">
              <li>平面媒体日报</li>
              <li>电视电台报道</li>
              <li>社会关注</li>
         
          </ul>     
      </div>
      <div class="dropdown">
          <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">教育体系</button>
          <ul class="dropdown-menu">
              <li>童话世界</li>
              <li>理念体系</li>
              <li>社会关注</li>
              <li>玩具家说</li>
              <li>我玩你看</li>
              <li>你玩我看</li>
              <li>直播</li>
          </ul>     
      </div>
    </div>

    <!-- 导航条上边的白云 -->
    <div id="y-d6">
      <img src="../../public/img/pie.png" >
    </div>
  

  </div>
</template>

<style scoped>
  @import url(../assets/css/your-header.css);
</style>

<script>
export default {
  data(){
    // var showhome;   
    // showhome:false
    // return showhome;
    return {
      isShow:0
    }
    },
  
  methods:{
    tab(id){
      this.isShow=id
    },
    changeStatus(){
      if('a:hover'==true){
        showhome:true;
      }
    }
  }
}

</script>