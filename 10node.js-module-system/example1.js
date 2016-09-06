/**
 * Created by wzwang on 2016/9/5.
 */

var hello = require('./hello');
hello.world();

//以上实例，hello.js通过exports对象把world作为模块的访问接口，在main.js中通过require('.hello')加载这个模块，然后就可以直接访问hello.js中exports对象的成员函数了
