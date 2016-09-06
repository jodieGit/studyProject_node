/**
 * Created by wzwang on 2016/9/5.
 */

var server = require("./server.js");
var router = require("./router.js");

server.start(router.route);