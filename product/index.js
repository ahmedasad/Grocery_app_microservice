const express = require('express')
const product = require('./src/route_product')
const config = require('./configs/app_config')


const startService = async () => {
    const app = express()
    app.use(express.json())  
    app.use(express.urlencoded({extended:true}))


    product(app)

    app.listen(config.appPort,()=>{
        console.log(`Server running at PORT: ${config.appPort}`);
    })
}

startService()