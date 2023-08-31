import Loans from '../models/loanModel.js'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Loan from '../models/loanModel.js'
import Payment from '../models/paymentModel.js'



// const createLoan=asyncHandler(async(req,res)=>{
//     const {From,amount, interestRate,duration,startDate}=req.body;
//     const user=await User.findById(From);
//     if(!user){
//         res.status(404);
//         throw new Error('No user found')
//     }

//     if(user.account_bal < amount){
//         res.status(404);
//         throw new Error('Insufficient balance')
//     }

//     user.account_bal -=amount;
//     await user.save()

//     const loan=await Loan.create({
//         From,
//         amount,
//         duration,
//         interestRate,
//         startDate
//     })

//     return res.status(201).json({ loan, msg: 'Loan application successful' });
// })

const createLoan=asyncHandler(async(req,res)=>{
    const {userId,interestRate,amount,duration}=req.body;
    const admin=await User.findOne({role:'admin'})
    if(!admin){
        res.status(404);
        throw new Error('User is not an admin')
    }

    //Deducting from admin account
    admin.account_bal-=amount;
    await admin.save();

    //find the user by id
    const user=await User.findById({_id:userId});
    if(!user){
        res.status(404);
        throw new Error('There is no such user')
    }

    //Adding to money to user account balance
    user.account_bal +=amount
    await user.save();

    //creating a new loan

    const loan=new Loan({
        userId:req.user._id,
        interestRate:interestRate,
        amount:amount,
        duration:duration
    })

    await loan.save();

    res.status(201).json({msg:'Loan sucessfully granted',loan})

})

const getSingleLoan=asyncHandler(async(req,res)=>{
    res.send('single loan')
})

const getAllLoan=asyncHandler(async(req,res)=>{
    const loan=await Loan.find({})
    res.status(201).json({loan})
})
const deleteLoan=asyncHandler(async(req,res)=>{
    const loanDeleted=await Loans.findByIdAndDelete({_id:req.params.id})
    if(!loanDeleted){
        res.status(404);
        throw new Error('There is no user with such ')
    }

    res.status(201).json({msg:'Loan successfully cleared'})

})

const loanPayment=asyncHandler(async(req,res)=>{

    const { userId, amount } = req.body;

    // Retrieve the admin user
    const admin = await User.findOne({ role: 'admin' });
    if (!admin) {
      return res.status(404).json({ error: 'Admin user not found' });
    }
  
    // Deduct the payment amount from the user's account balance
    const user = await User.findOne({_id:userId});
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    if (user.account_bal < amount) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }
  
    user.account_bal -= amount;
    await user.save();
  
    // Add the payment amount to the admin's account balance
    admin.account_bal += amount;
    await admin.save();
  
    res.status(200).json({ message: 'Loan payment processed successfully' });

})

const getLoanBalance=asyncHandler(async(req,res)=>{
    const userId = req.params.userId;

  // Find the user by ID
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Find the loans associated with the user
  const loans = await Loan.find({ userId: userId });

  const totalAmountPaid=await Payment.aggregate([
    {$match:{userId:userId}},
    {$group:{_id:null,totalPaid:{$sum:'$amount'}}}
  ]);

  const amountPaid=totalAmountPaid.length > 0 ? totalAmountPaid[0].totalPaid : 0;

  //calculating the loan balance
  const remainingBalance=loans.reduce((total,loan)=>total + loan.amount,0) - amountPaid;


//   Calculate the total amount paid for the loans
//   const totalAmountPaid = await Payment.aggregate([
//     { $match: { userId: userId } },
//     { $group: { _id: null, totalPaid: { $sum: '$amount' } } }
//   ]);

//   const amountPaid = totalAmountPaid.length > 0 ? totalAmountPaid[0].totalPaid : 0;

//   // Calculate the loan balance
//   const remainingBalance= loans.reduce((total, loan) => total + loan.amount, 0) - amountPaid;



  res.status(200).json({remainingBalance });
})



export {createLoan,deleteLoan,getAllLoan,getSingleLoan,loanPayment,getLoanBalance}

