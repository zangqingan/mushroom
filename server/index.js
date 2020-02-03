// 使用express框架创建web服务器
const express = require('express')
const app = express()

// 注册跨域和body数据解析中间件
app.use(require('cors')())
app.use(express.json())


app.listen(3000,() => {
    console.log('server is running on peort 3000')
})