const dbConnection = require('../configs/app_config')

class RepoProduct {
    async getProducts() {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query('select * from products', (err, res) => {
                if(err) reject({status:500,message:err.message})
                else if(!res.length) reject({status:404,message:"No item found in inventory"})
                else resolve({status:200,data:res})
            })
        })
    }

    async updateProductQuantity(id, quanity) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query('update products set quantity = ? where id = ?',[quanity,id], (err, res) => {
                if(err) reject({status:500,message:err.message})
                else if(res.affectedRows==0) reject({status:404,message:"No item found in inventory against this id"})
                else resolve({status:200,message:"Product quantity has been updated"})
            })
        })
    }
}

module.exports = {
    repoProduct: new RepoProduct()
}
