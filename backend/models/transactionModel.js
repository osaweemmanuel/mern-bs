import mongoose from "mongoose";

const transactionSchema=mongoose.Schema({
    amount:{
        type: Number,
      required: true,
    },

    From:{      
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      To:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

      currency:{
        type:String,
        enum:[' $ US DOLLARS (USD)','£ GREAT BRITISH POUNDS (GBP)','¥ CHinese Yuan (CNY)  ','€ Euro']
      },

      referenceNo:{
        type:Number,
      },
      status:{
        type: Boolean, 
        default: false 
      },

},  {timestamps:true})

const Transaction=mongoose.model('Transaction',transactionSchema);
export default Transaction;