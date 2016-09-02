/**
 * Created by wzwang on 2016/9/2.
 */

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString()); //ABC
console.log("buffer1 content: " + buffer2.toString()); //ABC


var buffer3 = new Buffer('ABCde');
var buffer4 = new Buffer(31);
buffer4.copy(buffer3);
console.log("buffer3 content: " + buffer3.toString()); //空
console.log("buffer4 content: " + buffer4.toString()); //空