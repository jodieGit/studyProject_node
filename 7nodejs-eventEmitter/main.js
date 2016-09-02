/**
 * Created by wzwang on 2016/9/2.
 */
var events = require("events");
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1执行');
}

//监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2执行');
}

//绑定connection 事件，处理函数为listener1
eventEmitter.addListener('connection', listener1);

//绑定connection 事件，处理函数是listener2
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection'); //listenerCount类方法
console.log(eventListeners + '个监听器监听连接事件');

//处理connection事件
eventEmitter.emit('connection');

//移除监绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

//触发连接事件
eventEmitter.emit("connection");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log("程序执行完毕");

