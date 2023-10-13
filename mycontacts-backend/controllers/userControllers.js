const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register a user
// @route GET /api/user/register
// @access public
const registerUser = asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        username,
        email,
        password : hashedPassword,
    });

    if(user){
        res.status(201).json({_id: user.id,email: user.email})
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
});

module.exports = {
    registerUser
}