<template>
  <div>
    <my-header></my-header>
    <!-- 页面主体 -->
    <div id="main">

        <!-- 轮播图 -->
        <div>
          <div id="lunbo" class="carousel" data-ride="carousel">
            <!-- 图片 -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../../public/img/banner-4.png" alt="">
              </div>
              <div class="carousel-item">
                <img src="../../public/img/banner-6.png" alt="">
              </div>
              <div class="carousel-item">
                <img src="../../public/img/banner-7.png" alt="">
              </div>
            </div>
            <!-- 左右箭头 -->
            <a data-slide="prev" class="carousel-control-prev" href="#lunbo">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a data-slide="next" class="carousel-control-next" href="#lunbo">
              <span class="carousel-control-next-icon"></span>
            </a>
            <!-- 轮播指示器 -->
            <ul class="carousel-indicators">
              <li data-target="#lunbo" data-slide-to="0" class="active"></li>
              <li data-target="#lunbo" data-slide-to="1"></li>
              <li data-target="#lunbo" data-slide-to="2"></li>
            </ul>
          </div>

          <!-- 轮播图上面的白云 -->
          <div class="cloud0"></div>
          <div class="cloud1"></div>
          <div class="cloud2"></div>
          <div class="cloud3"></div>

          <!-- 轮播图下边的白云 -->
          <div class="cloud4"></div>
        </div>
      
      

      <!-- 第一排关联商品 -->
      <div id="d1">
        <div>
          <a href="">
            <img src="../../public/img/1_1.png" width="223px" height="171px">
          </a>
          <a href="">地球仪学习</a>
        </div>
        <div>
            <a href="">
                <img src="../../public/img/1_1(1).png" width="223px" height="171px">
              </a>
          <a href="">科学包</a>
        </div>
        <div>
            <a href="">
                <img src="../../public/img/1_1(2).png" width="223px" height="171px">
              </a>
          <a href="">点触学习桌</a>
        </div>
        <div>
            <a href="">
                <img src="../../public/img/0_11.png" width="223px" height="171px">
              </a>
          <a href="">创意气泡膜</a>
        </div>
      </div>

    <!-- 第二排商品--轮播图 -->
    <div id="ul">
      <ul>
        <li>
          <a href="">
            <img src="../../public/img/2-1.png" width="223px" height="112px">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/img/2-2.png" width="223px" height="112px">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/img/2-3.png" width="223px" height="112px">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/img/2-4.png" width="223px" height="112px">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/img/2-5.png" width="223px" height="112px">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../public/img/2-6.png" width="223px" height="112px">
          </a>
        </li>
      </ul>
    </div>

    <!-- toyplus新闻 -->
    <div id="news">
      <h1>toyPlus新闻</h1>
      <div>
        <a href="javascript:;">出个门，就知道你的身教是几分？</a>
        <a href="javascript:;">6岁小娃月入千万美元，竟然是因为这个……</a>
        <a href="javascript:;">中科大少年班班主任和他的博士后朋友发现：孩子都不会“玩”了</a>
        <a href="javascript:;">网红气球爆炸，别再给孩子买了</a>
        <a href="javascript:;">跟孩子们在一起，你知道什么最重要吗？</a>
        <a href="javascript:;">只知道IQ，EQ的你已经OUT了，快去抢占“玩商”高地吧!</a>
        <a href="javascript:;">中国首家亲子研究院帮你选玩具</a>
        <a href="javascript:;">Toyplus玩具+ | 亲子玩具送到家，引领玩具行业新潮流</a>
      </div>
    </div>

    <!-- 新闻下边的图片 -->
    <div>
      <img src="../../public/img/landscape_banners.jpg" alt="">
    </div>

    </div>
    <my-footer></my-footer>
  </div> 
</template>

<style scoped>
  @import url(../assets/css/index.css);
  body{
    text-align:center !important;
  }
</style>

<script>


export default {
  
}
</script>
