import mongoose from "mongoose"
import jwt from "jasonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema( 
    {
        firstname :{
            type : String,
            required : true ,
            trim : true ,
            index: true 
        },
        lastname : {
            type : String,
            required : true ,
            lowercase : true ,
            trim : true 
        },
        phonenumber : {
            type : Number ,
            required : true ,
            trim : true ,
            index : true 
            ,unique : true 
        },
        email : {
            type : String,
            required : true ,
            lowercase : true ,
            trim : true ,
            unique : true 
        },
        password : {
            type : String ,
            required : [true , 'password is required ']
        }
     } 
,{
    timestamps : true 
})
userSchema.pre("save" ,async function (next){
    if(!this.isModified("password")) return next() ; 
     this.password = await bcrypt.hash(this.password, 10)
     next()
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await  bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email : this.email,
        phonenumber :this.phonenumber,
        firstname: this.firstname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiryIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function(){

    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiryIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User",userSchema)