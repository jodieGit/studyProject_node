/**
 * Created by wzwang on 2016/9/2.
 */
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');


//error事件：
//EventEmitter定义了一个特殊的事件error，它包含了错误的语义，我们在遇到错误的时候通常会触发error事件。
//当error被触发时，EventEmitter规定如果没有相应的监听器，Node.js会把他当做异常，退出程序并输出错误信息。