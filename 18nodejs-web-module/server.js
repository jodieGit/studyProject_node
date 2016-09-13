/**
 * Created by wzwang on 2016/9/12.
 */

var http = require("http");
var fs = require("fs");
var url = require("url");

//创建服务器
http.createServer(function(request, response) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    //输出请求的文件名
    console.log("Request for " + pathname + " received.");

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.log(err);
            //HTTP 状态码 404  NOT FOUND
            //Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            //HTTP 状态码 200 OK
            //Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            //相应文件内容
            response.write(data.toString());
        }

        //发送相应数据
        response.end();
    });
}).listen(8888);

//控制台会输出以下信息
console.log('Server running at http://10.32.247.164:8888/');


//本实例在window中端口号配8888才能正常，8081无效使用