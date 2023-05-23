const express = require('express')
const route = require('./src/route_user')
const config = require('./configs/app_config')

const startServer = async()=>{

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// setup route APIs
route(app)


app.listen(config.appPort,()=>{
    console.log(`Server running at PORT: ${config.appPort}`);
})

}

startServer();