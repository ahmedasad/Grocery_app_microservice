const Joi = require('joi')

module.exports = {

    login: Joi.object().keys({
        phone_number: Joi.string().max(13).min(13).required(),
        password: Joi.string().min(3).required()
    }),

    CreateAccount: Joi.object().keys({
        phone_number: Joi.string().max(13).min(13).required(),
        password: Joi.string().min(3).required(),
        name: Joi.string().min(3).required()
    }),

    phoneVerification: Joi.object().keys({
        phone_number: Joi.string().max(13).min(13).required(),
        verification_code: Joi.string().min(3).required()
    }),

}
