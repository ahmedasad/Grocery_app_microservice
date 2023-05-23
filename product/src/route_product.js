const service = require('./service_product').productService
const ProductValidator  = require('./validator/validators')
const productValidator = new ProductValidator()

module.exports = (route) => {
    route.get('/', async (req, res) => {
        try {
            res.json({ status: 200, message: "Product service is up and running" })
        } catch (err) { res.json({ status: 500, message: "Internal Server Error" }) }
    })

    route.get('/get_products', async (req, res) => {
        try {
            const result = await service.getProducts()
            res.status(result.status).json(result)
        } catch (err) { res.status(err.status).json({ status: err.status, message: err.message }) }
    })

    route.put('/update_product_quantity',productValidator.validateUpdateProductQuantity, async (req, res) => {
        try {
            const result = await service.updateProductQuantity(req.body.id, req.body.quantity)
            res.status(result.status).json(result)
        } catch (err) { res.status(err.status).json({ status: err.status, message: err.message }) }
    })
}

