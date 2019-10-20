<template>  
  <!-- 页面头部 -->
  <div id="header">
      <!-- 左手边图片 -->
      <img src="../../public/img/logo.png">
      <img src="../../public/img/bg-logo.png">
      <img src="../../public/img/pie.png">
  
      <!-- 导航栏 -->
      <div class="navbar navbar-expand-lg bg-light nav-light">
          <ul class="navbar-nav">
            <li class="nav-link"><router-link to="/gaodi">强占“玩商”高地</router-link></li>     
            <li class="nav-link"><router-link to="/about">关于TOYPLUS玩具家</router-link></li> 
            <li class="nav-link"><a href="javascript:;">玩具产品</a></li>         
            <li class="nav-link"><a href="javascript:;">社会关注</a></li>         
            <li class="nav-link"><router-link to="/contact">联系TOYPLUS</router-link></li>         
          </ul>
      </div>
      <!-- 登陆按钮 -->
      <div class="login">
        <router-link to="/login">
          <button>我的登陆</button>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>


