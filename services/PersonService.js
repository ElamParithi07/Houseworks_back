const mongoose=require("mongoose")
const PersonModel=require("../models/PersonModel")
const PersonService={

    signUp:async(user)=>{

        var pdoc=await PersonModel.create(user);
        // mongoose.connection.close()
        return pdoc
    },
    login: async (e, p) => {
        
        var user = await PersonModel.findOne({ email: e ,password:p});
        console.log(e,p);
        console.log(user);
        // mongoose.connection.close();
        return user;
      },
      changePassword:async(unm,passwd)=>{
        var user=await PersonModel.findOneAndUpdate({uname:unm},{password:passwd},{new:true,useFindAndModify:false})
        // mongoose.connection.close()
        return user
    }
}
module.exports=PersonService;