import mongoose, { Schema } from "mongoose"


const hotelSchema = new Schema(
    {
        hotelname : {
            type : String ,
            required : true , 
            trim :true ,
            index : true 

        }
        ,hoteladdress : {
            type : String ,
            required : true , 
            trim :true ,
            index : true 
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
        images : {
            type : String ,
            required : true 
        }
        ,pricing : {
            type :Number ,
            required : true 
        },
        wifi : {
            type : Boolean,
            required : true 

        },
        parking : {
            type : Boolean,
            required : true 
        },
        ac : { 
            type : Boolean,
            required : true 
        }
        ,roomservice : {
            type : Boolean,
            required : true 
        }

    }
,{timestamps : true })


export const Hotel = mongoose.model("Hotel" , hotelSchema)