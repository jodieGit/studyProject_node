/**
 * Created by wzwang on 2016/9/6.
 */
var util = require('util');

util.isArray([]);
//true

util.isArray(new Array);
//true

util.isArray({})
//false

//本实例只能在node模式下进行测试，如果node example3.js  则无任何效果