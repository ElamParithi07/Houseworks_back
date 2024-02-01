const mongoose=require("mongoose")
const BookingModel=require("../models/BookingModel")
const BookingService={

    addBooking:async(booking)=>{
        var bookdoc=await BookingModel.create(booking);
        
        return bookdoc
    },
    getByCustomer:async(cnam)=>{
        var cus_view=await BookingModel.find({cus_uname:cnam})
        
        return cus_view
    },
    getByProfessional:async(pnam)=>{
        var prof_view=await BookingModel.find({prof_uname:pnam})
        
        return prof_view
    }
}
module.exports=BookingService;