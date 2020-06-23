const express = require('express');
const router = express.Router();


const{ searchUser } = require('../controllers/userController');
const userData = require('../model/userModel');

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
/*
router.post('/',(req,res)=>{
    //console.log(req.body.uuid+req.body.username+req.body.email);
    const p = { uuid:req.body.uuid, username:req,body,username, email:req.body.email};
    res.push(p);
    res.status(201).json({
        message:"User Created"
    });

});
*/
router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.send({
        "uuid": "e9004f7-8237-43b2-844f-a3f794a41e90",
        "username": "test3",
        "email": "test3@gmail.com"
    })
    res.send({
        type: 'POST',
        uuid:req.body.uuid,
        username:req.body.username,
        email:req.body.email
    });
})

router.put('/:uuid',(req,res)=>{
    console.log('PUT ');
    res.send({"uuid": "e9004f7-8237-43b2-844f-a3f794a41e90",
    "username": "test33",
    "email": "test33@gmail.com"})
})

module.exports = router;