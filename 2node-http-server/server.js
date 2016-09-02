/**
 * Created by wzwang on 2016/8/25.
 */
var http = require('http');//请求（require）Node.js自带的http模块，并且把它赋值给http变量
//我们调用http模块提供的函数：createServer.这个函数会返回一个对象，这个对象有一个叫做listen的方法，这个方法有一个参数值，指定这个http服务器监听的端口号
http.createServer(function(request, response) {
    //发送HTTP头部
    //HTTP 状态值： 200：ok
    //内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //发送相应数据"Hello World"
    response.end("Hello World!");
}).listen(8888);

//终端打印如下信息：
console.log('Server running at http://10.32.247.164:8888'); //本地ip地址
