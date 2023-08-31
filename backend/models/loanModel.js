import mongoose from "mongoose";

const loanSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:[true,"Amount is Required"]
    },

    remainingBalance:{
        type:Number,
        required:true,
        default:0,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    duration:{
        type:Date,   
    },
    startDate:{
        type: Date,
        default: Date.now
    },

},{timestamps:true})

export default mongoose.model('Loan',loanSchema)