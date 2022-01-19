const usermodel = require('../models/user_model');

async function addNewUser(req, res){
    try {
        await usermodel.create(req.body);
        res.status(200).json({success: true,message:'User has been created'});      
    } catch (error) {
        res.status(404).json({message:error.message,success:false});
    }
}

async function getthreeUsers(req, res){
    try {
        const result = await usermodel.find({});
        const onlythree = result.slice(0,3);
        res.status(200).json({success: true,message:'Total Users: '+result.length,data:onlythree});
    } catch (error) {
        res.status(404).json({message:error.message,success:false});
    }
}
module.exports = {addNewUser,getthreeUsers};