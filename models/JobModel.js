const mongoose=require('mongoose')
const JobModel=mongoose.model('job',new mongoose.Schema({
    prof_uname:{type:String,required:true,},
    cmp_name:{type:String,required:true},
    desp:{type:String,required:true},
    address:{type:String,required:true},
    location:{type:String,required:true},
    mobile:{type:Number,required:true},
    service:{type:Array,required:true},
    price:{type:Number,required:true},
}));
module.exports=JobModel;