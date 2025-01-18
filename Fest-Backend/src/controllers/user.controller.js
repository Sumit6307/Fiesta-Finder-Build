import { asyncHandler } from "../utils/asynchandler.js";
 import {ApiError} from "../utils/apierror.js"
 import {User} from "../models/user.model.js"
 import {uploadonCloudinary} from "../utils/cloudinary.js"
 import { application } from "express";
 import {apiResponse} from "../utils/apiResponse.js"
const registerUser = asyncHandler(async(req ,res) => {



    //  get user detail from frontend 
    // validation -not empty 
    //check if user already exists 
 
    // create user object -create entry in db 
    // remove password and refresh token field from response 
    // check for user creation 
    // return res 

    const { email,username , password } = req.body
    if(
        [email,username ,password].some((field) => field?.trim() ==="")
    ){
        throw new ApiError(400 , "all fields are required")
    }

    const existedUser = await User.findOne({
        $or :[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"user with this email or username already exists ")
    }



    const user = await User.create({
        email,
        password, 
        username :username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password "
    )
    if(!createdUser){
        throw new ApiError(500 ,"something went wrong while registering a user  ")
    }
    return res.status(201).json(
        new apiResponse(200 ,createdUser,"user registered successfully ")
    )
})

export {registerUser}
