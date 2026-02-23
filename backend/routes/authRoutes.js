import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import doctors from "../models/doctors.js";
const router=express.Router()
router.post("/register",async(req,res)=>
{
    try{
        const {name,email,password}=req.body
                const existingUser=await User.findOne({email})
        if(existingUser)
        {
            return res.status(400).json(
                {
                    success:false,
                    message:"Email already exists"
                }
            )
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser=new User(
            {
                name,email,password:hashedPassword
            }
        )
        
        await newUser.save()
        res.status(201).json(
            {
                success:true,
                message:"User registered Successfully"
            }
        )
    }
    catch(error)
    {
          console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
})
router.post('/login',async(req,res)=>
{
    try{
   const{email,password}=req.body
   const user=await User.findOne({email})
   if(!user)
   {
    return res.status(400).json({
           success: false,
        message:"User not found"
    })
   }
   const isMatch=await bcrypt.compare(password,user.password)
   if(!isMatch)
   {
    return res.status(400).json(
        {
               success: false,
            message:"Invalid password"
        }
    )
   }
res.status(200).json(
    {
        success:true,
        message:"Login successful"
    }
)}
catch(error){
    
console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
}
})
router.get('/appointment',async(req,res)=>
{
    try
    {
        const doctors=await doctors.find();
        res.status(200).json({
            success:true,
            count:doctors.length,
            data:doctors
        })
    }catch(error)
    {
        res.status(500).json({
            success:false,
            message:"Error fetching doctors",
            error:error.message
        })
    }
})
export default router;