/**
 * Created by wzwang on 2016/9/5.
 */

//node.js函数
//function say(world) {
//    console.log(world);
//}
//
//function execute(someFunction, value) {
//    someFunction(value);
//}
//
//execute(say, "Hello");

//匿名函数
function execute(someFunction, value) {
    someFunction(value);
}

execute(function(word) {console.log(word);}, "Hello");