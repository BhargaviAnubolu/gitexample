const mongoose= require('mongoose');

const schema= new mongoose.Schema({
    First_name:{
        type:String,
        required:true
    },
	Last_name:{
        type:String,
        required:true
    },
	email:{
        type:String,
        required:true
    },
	password:{
        type:String,
        required:true
    },
	qualification:{
        type:String,
        required:true
    },
	domain:{
        type:String,
        required:true
    },
	awards:{
        type:String,
        required:true
    },
	gender:{
        type:String,
        required:true
    },
    flag:{
        type:Number,
        default:0,
        required:true
    }

})

module.exports=mongoose.model('Author',schema);