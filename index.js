import express from "express"
import router from './router/index.js'

const app = express()
const port = 3333

// 设置允许跨域访问该服务
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

router(app)

app.get('/', (req, res) => res.send('你好'))

// 404
app.use((req, res, next) => {
    let err = new Error("Not Found")
    err.status = 404
    next(err)
})

// 错误处理
app.use((err, req, res,next) => {
    res.status(err.status || 500)
    res.send(err.message)
})

app.listen(port, () => console.log(`您已启动端口: ${port}!`))