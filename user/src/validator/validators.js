const requestModels = require('./request_models')

module.exports = class UserValidator {
    
    validateLogin = function (req, res, next) {
        const { error } = requestModels.login.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    
    
    validateCreateAccount = function (req, res, next) {
        const { error } = requestModels.CreateAccount.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    
    validatePhoneVerification = function (req, res, next) {
        const { error } = requestModels.phoneVerification.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    
}
