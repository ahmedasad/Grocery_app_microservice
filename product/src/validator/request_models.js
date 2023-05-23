const Joi = require('joi')

module.exports = {

    updateProductQuantity: Joi.object().keys({
        id: Joi.number().required(),
        quantity: Joi.number().min(0).required()
    }),

}
