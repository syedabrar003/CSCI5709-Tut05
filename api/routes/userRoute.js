const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Joi = require("joi");

const{ searchUser,addUser ,updateUser } = require('../controllers/userController');
const userData = require('../model/userModel');
const { json } = require('body-parser');

router.get('/',(req,res)=>{
    res.status(200).json(userData);
})


router.get('/specific/:uuid',(req,res)=>{
    try{
        let userId = req.params.uuid;
        const user = searchUser("uuid",userId);
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(406).json({
            success: false,
            error:err,
            message: "User not found"
        })
    }
})

router.post('/',(req,res,next)=>{

    const userid = uuid.v1()
    const requser = {
        uuid: userid,
        username: req.body.username,
        email: req.body.email
    };
    const validResult = validatePostUser(req.body);
    if (validResult.error) {
        res.status(400).send(validResult.error.details[0].message);
        return;
    }
    const resUser = addUser("username",requser);
    
    res.status(200);
    res.send({
        message:"user added successfully",
        uuid:userid,
        username:resUser.username,
        email:resUser.email
    });
})

router.put('/',(req,res,next)=>{
    try{
        const requestUser = {
            uuid: req.body.uuid,
            username: req.body.username,
            email: req.body.email
        };
        const updatedUser=updateUser("uuid", requestUser);
        res.status(200);
        res.send({
            message:"user updated successfully",
            uuid:updatedUser.userid,
            username:updatedUser.username,
            email:updatedUser.email
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            error:err,
            message: "User not found"
        })
    }
})


function validatePostUser(user) {
    const schema = {
      username: Joi.string().min(1).required(),
      email: Joi.string().min(1).required(),
    };
  
    return Joi.validate(user, schema);
  }


module.exports = router;