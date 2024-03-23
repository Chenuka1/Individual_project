
const express= require("express")
const router=express.Router();
const User=require('../models/userModel')
const bcrypt=require('bcryptjs');

// I will declare a route to handle signin

router.post("/login",async(req,res)=>{

    try{

        const {email,password}=req.body;

        const user=await User.findOne({email})//In here I find the user based on email
        

        if(!user){
            return res.status(400).json({error:"Invalid email or password"});
        }

        //now comparing the passwords

        const isPasswordMatch=await bcrypt.compare(password,user.password);

        if(!isPasswordMatch){
           return  res.status(400).json({error:"Invalid email or password"})
        }

        res.status(200).json({ message: 'Sign in successful!' });


    }
    catch(error){


        console.error('Error signin',error);
        res.status(500).json({error:"Internal server error"});
    }


});

module.exports=router;

