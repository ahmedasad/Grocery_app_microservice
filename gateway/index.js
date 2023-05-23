const express = require('express')
const proxy = require('express-http-proxy')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/order',proxy("localhost:8004"))
app.use('/product',proxy("localhost:8003"))
app.use('/shopping_cart',proxy("localhost:8002"))
app.use('/auth',proxy("localhost:8001"))

app.use('/',(req,res)=>{
    res.send({status:200, message: "gateway is up and running"})
})

app.listen(8000,()=>{
    console.log("Listening on port "+8000)
})