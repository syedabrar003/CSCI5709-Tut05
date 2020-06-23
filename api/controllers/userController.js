const userData = require('../model/userModel');

const searchUser = (key,value)=>{
    const match = userData.find(userData=>{
        return userData[key] === value;
    })
    if(!match) throw new Error("No user found");
    return match;
}

module.exports.searchUser = searchUser;