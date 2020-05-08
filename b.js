const { add, mul } = require('./a.js')

const _ = require('lodash')

const sum = add(2,3)
const result = mul(2,3)
console.log(sum,result)

const arr = _.concat([1,2,3])
console.log('arr---',arr)