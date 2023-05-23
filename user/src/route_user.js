const UserService = require('./service_user')
const UserValidator = require('./validator/validators')
const authorisor = require('./authorisor')

const service = new UserService()
const userValidator = new UserValidator()

module.exports = (route) => {

    route.get('/', (req, res) => {
        res.status(200).send({ status: 200, message: "user is up and running" })
    })

    route.post('/create_user', userValidator.validateCreateAccount, async (req, res) => {
        try {
            const response = await service.createUser(req.body.phone_number,req.body.name, req.body.password)
            res.status(response.status).json(response)
        } catch (err) {
            res.status(err.status).json(err)
        }
    })
    
    route.get('/login', userValidator.validateLogin, async (req, res) => {
        try {
            const response = await service.loginUser(req.body.phone_number, req.body.password)
            res.status(response.status).json(response)
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    route.post('/verify_phone_number', authorisor.authenticateToken, userValidator.validatePhoneVerification, async (req, res) => {
        try {
            const response = await service.verifyPhoneNumber(req.body.phone_number, req.body.verification_code)
            res.status(response.status).json(response)
        }
        catch (err) { res.status(err.status).json(err) }
    })
}
