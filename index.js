const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    console.log(req.method)
    const url = req.url
    console.log('url---',url)
    // req.query = querystring.parse(url.split('?')[1])
    const path = querystring.parse(url.split('?')[0]) // 路由
    
    console.log('req.path---',path)
    // res.writeHead(200,{'content-type':'text/html'})
    // res.end(JSON.stringify(req.query))
    res.end(path)
})

server.listen(3002,()=>{
    console.log('listening on 3002 port')
})


