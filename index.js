// // const http = require('http')
// // const querystring = require('querystring')

// // const server = http.createServer((req,res)=>{
// //     const method = req.method
// //     const url = req.url
// //     const path = url.split('?')[0]
// //     const query = querystring.parse(url.split('?')[1])
// //     // 设置返回格式 JSON
// //     res.setHeader('Content-type','application/json') // 

// //     // 返回数据
// //     const resData = {
// //         method,
// //         url,
// //         path,
// //         query
// //     }
// //     if(method === "GET"){
// //         res.end(JSON.stringify(resData)) // json格式字符串
// //     }
// //     if(method === "POST"){
// //         let postData = ''
// //         req.on('data',chunk => {
// //             postData += chunk.toString()
// //         })
// //         req.on('end',()=>{
// //             resData.postData = postData
// //             res.end(JSON.stringify(resData))
// //         })
// //     }
    
// //     // console.log(req.method)
// //     // const url = req.url
// //     // console.log('url---',url)
// //     // // req.query = querystring.parse(url.split('?')[1])
// //     // const path = url.split('?')[0] // 路由
    
// //     // console.log('req.path---',path)
// //     // // res.writeHead(200,{'content-type':'text/html'})
// //     // // res.end(JSON.stringify(req.query))
// //     // res.end(path)

// // })

// // server.listen(3002,()=>{
// //     console.log('listening on 3002 port1212')
// // })

// const fs = require('fs')
// const path = require('path')

// // const fullFileName = path.resolve(__dirname,'promiseTest','a.json')

// // fs.readFile(fullFileName,(err,data)=>{
// //     if(err){
// //         console.log(err)
// //         return
// //     }
// //     console.log(data.toString())
// // })

// // callback 方式获取一个文件的内容

// // function getFileContent(fileName,callback) {
// //     const fullFileName = path.resolve(__dirname,'promiseTest',fileName)
// //     fs.readFile(fullFileName,(err,data)=>{
// //         if(err){
// //             console.log(err)
// //             return
// //         }
// //         callback(
// //             JSON.parse(data.toString())
// //         )
// //     })
// // }
// // // callback -hell
// // getFileContent('a.json',aData => {
// //     console.log('a data',aData)
// //     getFileContent(aData.next,bData => {
// //         console.log('b data',bData)
// //         getFileContent(bData.next,cData => {
// //             console.log('c data',cData)
// //         })
// //     })

// // })

// // promise

// function getFileContent(fileName) {
//     const promise = new Promise((resolve,reject)=>{
//         const fullFileName = path.resolve(__dirname,'promiseTest',fileName)
//         fs.readFile(fullFileName,(err,data)=>{
//             if(err){
//                 reject(err)
//                 return
//             }
//             resolve(
//                 JSON.parse(data.toString())
//             )
//         })
//     })
//     return promise
// }

// getFileContent('a.json').then(aData=>{
//     console.log('a data',aData)
//     return getFileContent(aData.next)
// }).then(bData => {
//     console.log('b data', bData)
//     return getFileContent(bData.next)
// }).then(cData => {
//     console.log('c data', cData)
// })

// // async await
// const mysql = require('mysql')

// // 创建连接对象
// const connect = mysql.createConnection({
//     host:'127.0.0.1',
//     user:'root',
//     password:'Gyz@1024',
//     port:'3306',
//     database:'myblog'
// })


// // 开始连接数据库
// connect.connect()

// // 执行sql语句
// const sql = "insert into blogs(title,content,createtime,author) values('标题C','内容C',1588836426640,'zhangsan12');"
// connect.query(sql,(err,result)=>{
//     if(err){
//         console.log('err---',err)
//         return
//     }
//     console.log('result---',result)
// })

// // close connect

// connect.end()
