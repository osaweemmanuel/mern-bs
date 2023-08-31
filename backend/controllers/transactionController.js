import asyncHandler from "express-async-handler";
import Transaction from "../models/transactionModel.js"
import User from '../models/userModel.js'

const createTransaction=asyncHandler(async(req,res)=>{
    const {amount,To,From,referenceNo,currency}=req.body;

    let from_user=await User.findOne({accountNo:From});
    let to_user=await User.findOne({accountNo:To});

  
    const refNo=(Math.floor(Math.random()*900000));
  

    if(!from_user || !to_user){
        res.status(404);
        throw new Error('User does not exist')
    }else{
        if(amount > from_user.account_bal){
            res.status(404);
            throw new Error("Amount exceeds the account balance");
        }else{
           
            from_user.account_bal=from_user.account_bal - amount;
            to_user.account_bal=to_user.account_bal + amount;

            await from_user.save();
            await to_user.save();

            let transaction=new Transaction({From:from_user._id,To:to_user._id,amount,referenceNo:refNo,currency})
            await transaction.save();
            res.status(200).json({
                transaction,
                msg:'Successfully transferred'})
        }
    }
})



const DeleteAccount=asyncHandler(async(req,res)=>{
    const deletedAccount = await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg:'Transaction history successfully deleted' });
})



export {createTransaction,DeleteAccount}