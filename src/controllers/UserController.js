const {RegistrationService,loginService,SingleReadProfileService} = require('../services/UserServices.js');

//Registration 
exports.Registration = async(req,res)=>{
    let result = await RegistrationService(req) ;
    return res.status(200).json(result);
}

//! login Service
exports.Login =async (req,res) =>{
    let result = await loginService(req);
    if(result.status === "success"){
        //Cookies Set 
        let cookieOption ={
            expires: new Date(Date.now() + 24 * 6060 * 1000),
            httpOnly: false
        }
        //Set the cookie with Response
        res.cookie('token', result.token, cookieOption);
        return res.status(200).json(result);
    }else{
        return res.status(200).json(result);
    }
}

//SingleReadProfile
exports.SingleReadProfile = async(req,res)=>{
    let result = await SingleReadProfileService(req);
    return res.status(200).json(result);
}