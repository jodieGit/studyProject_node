/**
 * Created by wzwang on 2016/9/6.
 */
var util = require('util');

util.isError(new Error())
//true

util.isError(new TypeError())
//true

util.isError({name: 'Error', message: 'an error occurred'})
//false
