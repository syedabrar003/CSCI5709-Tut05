const userData = require('../model/userModel');

const searchUser = (key,value)=>{
    const match = userData.find(userData=>{
        return userData[key] === value;
    })
    if(!match) throw new Error("No user found");
    return match;
}

const addUser = (key,user)=>{  
    userData.push(user);
    return user;
}

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


module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;