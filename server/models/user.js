const mongoose = require('mongoose');

const {Schema}=mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
        email:{
        type:String,
        required:true
    },
    
    id1:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
     }, 
     rate:{
          type:String,
          required:true
      }   
});
module.exports = mongoose.model("users",userSchema);