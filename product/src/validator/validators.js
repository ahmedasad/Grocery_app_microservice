const requestModels = require('./request_models')

module.exports = class ProductValidator {
    
    validateUpdateProductQuantity = function (req, res, next) {
        const { error } = requestModels.updateProductQuantity.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
        
}
