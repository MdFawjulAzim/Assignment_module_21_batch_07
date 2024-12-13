const UserModel = require("../models/UserModel.js");

const RegistrationService=async(req)=>{
    try{
        let reqBody = req.body;
        let Data = await UserModel.create(reqBody);
        return {status: "success", data: Data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}



module.exports = {
    RegistrationService,
}