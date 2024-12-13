const {RegistrationService} = require('../services/UserServices.js');


exports.Registration = async(req,res)=>{
    let result = await RegistrationService(req) ;
    return res.status(200).json(result);
}
