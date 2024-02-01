const mongoose=require('mongoose')
const BookingModel=mongoose.model('booking',new mongoose.Schema({
    cus_uname:{type:String,required:true,},
    prof_uname:{type:String,required:true,},
    cmp_name:{type:String,required:true},
    service:{type:Array,required:true},
    timedate:{type:String,required:true}, 
    price:{type:Number,required:true},
}));
module.exports=BookingModel;