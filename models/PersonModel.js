const mongoose=require('mongoose')
const PersonModel=mongoose.model('user',new mongoose.Schema({
    name:{type:String,required:true},
    uname:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},  
    role:{type:String,required:true}
}));
module.exports=PersonModel;