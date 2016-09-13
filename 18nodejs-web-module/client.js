/**
 * Created by wzwang on 2016/9/12.
 */

var http = require('http');

//用于请求的选项
var options = {
    host: '10.32.247.164',
    port: '8888',
    path: '/index.html'
};

//处理相应的回调函数
var callback = function(response) {
     console.log(response);
    //不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        //数据接收完成
        console.log(body);
    });
}

//向服务器发送请求
var req = http.request(options, callback);
req.end();

//host使用localhost 或者本地ip，暂时都未通过