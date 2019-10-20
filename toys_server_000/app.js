//app.js 服务器端项目
//1:下载第三方模块
//express/express-session/mysql/cors
//2:将第三方模块引入到程序中
const express = require('express');
const session = require('express-session');
const  mysql = require('mysql');
const cors = require('cors');
//3:创建数据库连接池
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  connectionLimit:20,
  database:'toy'
});
//4:创建服务器监听8080端口
var server=express();
server.listen(8080);
//5:处理跨域cors
//5.1:配置允许访问程序地址（脚手架）
//    http://127.0.0.1:5050  (可行)
//    http://localhost:5050
//5.2:每次请求是否验证true
server.use(cors({
  origin:['http://127.0.0.1:8081','http://localhost:8081'],    //8081式脚手架端口
  credentials:true     //每次请求需要验证
}))
//6:配置session
//#配置session一定要在所有请求之前
server.use(session({
  secret:'128位字符串',        //安全字符串
  resave:true,                //每次请求保存数据
  saveUninitialized:true      //保存初始化数据
}));
//7:配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static('public'));

//功能一：完成用户登陆
//启动服务器app.js  /启动数据库
//打开浏览器
//http://127.0.0.1:8080/login?uname=tom&upwd=123456

server.get('/login',(req,res)=>{
  //6.1:接收网页传递的数据 用户名 密码
  var uname = req.query.uname;
  var upwd = req.query.upwd;

  //6.2:创建sql查询语句
  var sql = 'SELECT id FROM login WHERE uname = ? AND upwd = md5(?)';
  //6.3:执行sql语句并且返回获取的结果
  pool.query(sql,[uname,upwd],(err,result)=>{
    //6.4:判断登陆是否成功
    if(err) throw err;
    //6.5:将结果返回网页
    if(result.length==0){
      res.send({code:-1,msg:'用户名或密码有误'})
    }else{
      //获取当前登陆用户id
      //result=[{id:2}]
      var id = result[0].id;
      //将用户id保存到session对象中
      //uid当前登陆：用户凭证 
      req.session.uid = id;
      console.log(req.session);
      res.send({code:1,msg:'登陆成功'});
    }
  });
})