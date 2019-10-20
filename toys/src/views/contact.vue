<template>
  <div id="contact">
    <your-header></your-header>

    <!-- 页面主体部分 -->
    <div id="c-d1">
      <!-- 面包屑导航条 -->
      <div id="a-d2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb"  id="a-d21">
            <li class="breadcrumb-item"><router-link to="/index">首页</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Contact us</li>
          </ol>
        </nav>
      </div>

      <!-- 面包屑导航条下边的白色区域 -->
      <div id="c-d2">

        <!-- 表单 -->
        <div id="c-d21">
          <h3>Contact us</h3>
          <form>
            <div class="form-group">
              
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">              
              <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="phone">
            </div>
            <div class="form-group">
              <input type="address" class="form-control" id="exampleFormControlInput1" placeholder="address">
            </div>
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>

        <!-- 电话号码 -->
        <div id="c-d22">
          <p>0551-63736733</p>
          <p>合肥趣陪信息技术有限公司</p>
        </div>

      </div>

      <!-- 下边白色区域四个框 -->
      <div id="c-d3">
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

      <!-- 下面横条白云 -->
      <div id="c-d4">

      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<style scoped>
  @import url(../assets/css/contact.css);
</style>
