const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    if(req.method === 'POST') {
        // req 数据格式
        console.log('content-type',req.headers['content-type'])
        // 接收数据
        let postData =''
        req.on('data',chunk =>{
            postData += chunk.toString()
        })
        req.on('end',()=>{
            console.log('end--postData',postData)
            res.end('end hello')
        })
    }
    
})

server.listen(3002,()=>{
    console.log('listening on 3002 port')
})


