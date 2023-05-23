const dbConnection = require('../configs/app_config')
const helper = require('../src/helper/helper')

class UserRepo {

    async createUser(phoneNumber,name,password) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("insert ignore into user (phone_number,name,password,verification_code) values(?,?,?,?) ",
            [phoneNumber,name,password,helper.verification_code],
            (err, res) => {

                if (err) reject({ status: 500, message: err.message });
                else if(res.affectedRows == 1) resolve({ status: 200, data: "Verfication has been sent" })
                else reject({ status: 409, message: "Account already exist" })
            })
        })
    }

    async login(phoneNumber,password) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("select * from user where phone_number = ? ", [phoneNumber], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No user found" });
                else if(res[0].password != password) return reject({ status: 401, message: "Password is not correct" })

                else resolve({ status: 200, data: res[0] })
            })
        })
    }

    async verifyPhoneNumber(phoneNumber,code) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("update user set account_verified = 1 where phone_number = ? and verification_code = ?", [phoneNumber,code], (err, res) => {
    
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows == 1) reject({ status: 200, message: "Phone has been verified" });
                else resolve({ status: 200, message:"Invalid Code" })
            })
        })
    }
}



module.exports = {
    userRepo: new UserRepo()
}