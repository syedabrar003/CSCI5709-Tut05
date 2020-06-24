const userData = require('../model/userModel');

//  searches the user with key value pair
const searchUser = (key,value)=>{
    const match = userData.find(userData=>{
        return userData[key] === value;
    })
    if(!match) throw new Error("No user found");
    return match;
}

//  adds new user
const addUser = (key,user)=>{
    userData.push(user);
    return user;
}

//  update the user with key value pair
const updateUser =(key,value)=>{
    try{
        let userId = value.uuid;
        const user = searchUser("uuid",userId);
        if(user)
        {
            user.username = value.username;
            user.email=value.email;
            return user;
        }
    }
    catch(err){
        res.status(406).json({
            success: false,
            error:err,
            message: "User not Exist with uuid"
        })
    }
}

//  module exports
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
