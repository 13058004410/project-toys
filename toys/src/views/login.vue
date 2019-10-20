
<!--用户登录组件-->
<template> 
  <div id=l-d1>
    <img src="../../public/img/logo-1.png" alt="">
    <!-- 白色登录框 -->
    <div id=l-d2>
      <h3 style="font-size:24px;color:#8b91a0;margin-bottom:13px;">登陆</h3>
      <h6 style="font-size:13px;color:#8b91a0;margin-bottom:13px;">输入ID和密码登陆系统</h6>
      <!-- 用户名输入框 -->
      <el-input v-model="uname" placeholder="请输入用户名"></el-input>
      <el-input v-model="upwd" placeholder="请输入密码" show-password></el-input>
      <el-row>
        <!-- 复选框 -->
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <!-- 提交按钮 -->
        <el-button type="info" @click="login">登陆</el-button>
      </el-row>
      <p style="font-size:13px;color:#8b91a0;">还没有帐号？<router-link to="javascript:;">创建帐号</router-link></p>
      <p style="font-size:13px;color:#8b91a0;text-align:center">2017 &合肥趣陪;</p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      checked:false
    }
 },
  methods:{
    login(){
      console.log(this.axios);
      var u = this.uname;
      var p = this.upwd;
      //2：创建正则表达式 3~13位 字母数字
      var reg=/^[a-z0-9]{3,13}$/i;
      //3：判断如果错误 用户名提示
      if(!reg.test(u)){
        this.$message('用户名格式不正确');
        return;
      }
      //4：判断如果密码错误密码提示
      if(!reg.test(p)){
        this.$message('密码格式不正确');
        return;
      }
      //5:发送ajax  axios 请求
      var url = 'login';
      var obj = {uname:u,upwd:p};
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(22222222222);
        //6:回调函数 接收服务器返回的数据
        var code = res.data.code;
        if(code==-1){
          //7:失败 提示
          this.$message('消息','用户名或密码有误');
        }else{
          //8:成功 跳转
          this.$router.push('/index');
          this.$message('登陆成功')
        }
      })
    },
  }
}
</script>

<style >
  #l-d2 .el-button--info{
    text-align: left;
  padding-left:9px;
}
#l-d2 .el-input__icon{
  height:0;
}
</style>