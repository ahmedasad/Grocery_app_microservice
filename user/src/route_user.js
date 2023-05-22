

module.exports = (route) =>{
    route.get('/',(req,res)=>{
        res.status(200).send({status:200, message: "user is up and running"})
    })
}