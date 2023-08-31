import mongoose from "mongoose";

const paymentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    paymentDate:{
        type:Date,
        default:Date.now()
    },

    loanId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Loan',
        required:true
    }

})

export default mongoose.model('Payment',paymentSchema)