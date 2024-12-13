const UserModel = require("../models/UserModel.js");
const { EncodeToken } = require("../utility/TokenHelper.js");

const RegistrationService=async(req)=>{
    try{
        let reqBody = req.body;
        let Data = await UserModel.create(reqBody);
        return {status: "success", data: Data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}


//loginService

const loginService =async (req)=>{
    try{
        let reqBody = req.body;
        let email = req.body.email;
        let password = req.body.password;
        const user = await UserModel.findOne({ email: email,password:password });
        if (!user || user.length === 0) {
            return { status: "fail", message: "Invalid email or password" };
        }
        let token = EncodeToken(email, user._id.toString());
        return {status: "success",token: token};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}



module.exports = {
    RegistrationService,
    loginService
}