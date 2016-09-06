/**
 * Created by wzwang on 2016/9/6.
 */
var util = require("util");
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    }
}
Base.prototype.showName = function() {
    console.log(this.name);
}
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);

//执行结果：
//base
//Hello base
//{name: 'base', base: 1991, sayHello: [Funtion]}
//sub
//{name: 'sub'}