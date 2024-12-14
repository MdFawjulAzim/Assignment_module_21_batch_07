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

//SingleReadProfileService
const SingleReadProfileService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        let result = await UserModel.findOne({_id:user_id});
        return {status:"success", message: "Profile retrieved successfully", data:result}
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}


//AllUserReadProfileService
const AllUserReadProfileService = async(req)=>{
    try{
        let result = await UserModel.find({});
        return {status:"success", message: "ALL User Profile retrieved successfully", data:result}
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}

module.exports = {
    RegistrationService,
    loginService,
    SingleReadProfileService,
    AllUserReadProfileService
}