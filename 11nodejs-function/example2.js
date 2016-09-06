/**
 * Created by wzwang on 2016/9/5.
 * 函数传递如何让服务器工作的
 */
    //part1
//var http = require('http');
//
//http.createServer(function(request, response) {
//    response.writeHead(200, {'Content-Type': "text/plain"});
//    response.write('Hello World');
//    response.end();
//}).listen(8888);

//part2
var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8888);
