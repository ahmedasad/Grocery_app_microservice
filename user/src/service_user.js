const userRepo = require('./repo_user').userRepo
const jwt = require("jsonwebtoken")

class UserService {

    async loginUser(phone_number, password) {
        console.log(phone_number)
        const user = await userRepo.login(phone_number, password)
        if (user.status == 200) {
            delete user.data.password
            const u = user.data
            console.log(user)
            user.data.token = jwt.sign({ u }, process.env.ACCESS_TOKEN_SECRET);
        }

        return user
    }

    async createUser(phone_number,name, password) {
        console.log(phone_number)
        return await userRepo.createUser(phone_number,name, password)
    }
   
    async verifyPhoneNumber(phone_number, code) { return await userRepo.verifyPhoneNumber(phone_number, code) }


}

module.exports = UserService