const { add, mul } = require('./a.js')

const _ = require('lodash')

const sum = add(2,3)
const result = mul(2,3)
console.log(sum,result)

const arr = _.concat([1,2,3])
console.log('arr---',arr)

// /api/blog/list get author,keyword,参数为空，不过滤
// /api/blog/detail get id
// /api/blog/add post 
// /api/blog/update post id
// /api/blog/del post id
// /api/user/login username,password post