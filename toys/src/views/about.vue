<template>
  <div id="about">
    <!-- 页头组件 -->
    <your-header></your-header>

    <!-- 页面主体 -->
    <div id="a-d1">
      
      <!-- 面包屑导航条 -->
      <div id="a-d2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb"  id="a-d21">
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item active" aria-current="page">关于Toyplus玩具家</li>
          </ol>
        </nav>
      </div>

      <!-- 面包屑导航条下边的白色区域 -->
      <div id="a-d3">
        <h3>关于Toyplus玩具家</h3>
        <p>TOYPLUS玩具+中国首家情景式亲子玩具服务商，专注亲子玩具。</p>
        <p>TOYPLUS玩具+是合肥趣陪信息技术有限公司的旗下项目之一，以“美妙我们的亲子时<br>光”为使命，为1亿家庭提供高品质亲子陪伴服务。合肥趣陪信息技术有限公司落户在科<br>教之城：合肥。力争三年成为国内家长信赖，孩子喜欢的亲子品质陪伴服务第一企业。<br> TOYPLUS玩具+以玩具集成微创新和亲子高品质陪伴玩法原创指导为核心，以玩具的<br>月、季、年度订阅为主体运营，销售模式为每周快递到家。以亲<br>子玩具为载体，提供亲子创意玩法，情景式陪伴指南，儿童成长评估服务等。</p>
        <img src="../../public/img/hezhao.jpg" alt="">
      </div>

      <!-- 下边四个框 -->
      <div id="a-d4">
        <div>
          <img src="../../public/img/d4-1.png" alt="">
          <div>
            <span>包邮</span><br>
            <span>新疆、西藏除外</span>
          </div>
        </div>
        <div>
          <img src="../../public/img/d4-2.png" alt="">
          <div>
            <span>套餐</span><br>
            <span>省心省力</span>
          </div>
        </div>
        <div>
          <img src="../../public/img/d4-3.png" alt="">
          <div>
            <span>有趣</span><br>
            <span>乐在其中</span>
          </div>
        </div>
        <div>
          <img src="../../public/img/d4-4.png" alt="">
          <div>
            <span>体系化</span><br>
            <span>成长不留误区</span>
          </div>
        </div>
      </div>

    </div>
    <my-footer></my-footer>


  </div>
</template>

<style scoped>
  @import url(../assets/css/about.css);
</style>