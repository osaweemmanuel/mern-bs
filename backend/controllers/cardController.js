import AtmCard from '../models/cardModel.js'
import asyncHandler from 'express-async-handler'

const createCard=asyncHandler(async(req,res)=>{
    const {cardNo,cardType,expirationDay}=req.body;
    const cardDetail=Math.floor(Math.random()*900000000)

    const newCard=new AtmCard({
        cardNo:cardDetail,
        cardType,
        expirationDay,
        user:req.user._id,
        
    })

    await newCard.save()
   res.status(201).json({msg:'Card successfully created'})
    
    
})

export {createCard}