const mongoose= require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=Schema.ObjectId;
const schema= new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
	description:{
        type:String,
        required:true
    },
	created_date:{
        type:String,
        required:true
    },
	updated_date:{
        type:String,
        required:true
    },
	author_id:{
        type:Schema.Types.ObjectId,ref:'Author'
    },
	visibility:{
        type:String,
        required:true

    } 

})
module.exports=mongoose.model('Post',schema);