//const express = require("express")
const mongoose = require("mongoose")
const emailValidator = require("email-validator")

const db_link = "mongodb+srv://saket1101:saket1101@cluster0.finnx8t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
    console.log("db is connected")
}).catch(function(err){
    console.log(err)
})

const profileSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:function(){
            return emailValidator.validate(this.email)
        }
    },
    mobileNo:{
        type:String,
        require:false,
        unique:true,
        minlength:10,
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female']
    }
})

const profileModel = mongoose.model("profileModel",profileSchema)

module.exports = profileModel;