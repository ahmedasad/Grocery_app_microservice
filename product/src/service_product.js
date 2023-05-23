const repo = require('./repo_product').repoProduct

class ProductService{

    async getProducts(){
        return await repo.getProducts()
    }

    async updateProductQuantity(id,quanity){
        return await repo.updateProductQuantity(id,quanity)
    }
}

module.exports = {
    productService: new ProductService()
}