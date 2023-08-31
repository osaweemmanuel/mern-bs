import mongoose from "mongoose";

const cardSchema=new mongoose.Schema({
    cardNo:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
  
    cardType:{
        type:String,
        enum:['Debit','Credit'],
        default:'Debit'
    },
    expirationDay:{
       type:Date
    }
})

const AtmCard=mongoose.model('Card',cardSchema);
export default AtmCard;