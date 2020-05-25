const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json') // 

    // 返回数据
    const resData = {
        method,
        url,
        path,
        query
    }
    if(method === "GET"){
        res.end(JSON.stringify(resData)) // json格式字符串
    }
    if(method === "POST"){
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',()=>{
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
    
    // console.log(req.method)
    // const url = req.url
    // console.log('url---',url)
    // // req.query = querystring.parse(url.split('?')[1])
    // const path = url.split('?')[0] // 路由
    
    // console.log('req.path---',path)
    // // res.writeHead(200,{'content-type':'text/html'})
    // // res.end(JSON.stringify(req.query))
    // res.end(path)

})

server.listen(3002,()=>{
    console.log('listening on 3002 port1212')
})


