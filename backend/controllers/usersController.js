import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';




const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users, totalCount: users.length });
});

const getSingleUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) {
    res.status(404);
    throw new Error('No such user found');
  }
  res.status(200).json({ user });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.role !== 'admin') {
      res.status(404);
      throw new Error('Cannot delete admin user');
    }
    await user.remove();
    res.status(200).json({ msg: 'Successfully deleted' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.account_bal=req.body.account_bal 
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      role:updatedUser.role,
      account_bal:updatedUser.account_bal,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const activateUser = asyncHandler(async (req, res) => {
  const id=req.params.id;
  const user=await User.findByIdAndUpdate(id,{$set:{status:true}},{new:true})
  if(!user){
    res.status(404);
    throw new Error('User not found')
  }

  res.status(201).json({user,msg:'Account successfully activated'})

});






const deactiveUser=asyncHandler(async(req,res)=>{
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id,{$set:{status:false}},{new:true});
  console.log(user)
  if(!user){
    res.status(404);
    throw new Error(`There's no ${user} found`)
  }else{
    generateToken(user._id,res)
    res.status(200).json({msg:'User account as be deactived'})
  }

})


const uploadImage=asyncHandler(async(req,res)=>{
   console.log(req.files)
   if(!req.files){
     res.status(404);
     throw new Error('No image upload')
   }
   const userImage=req.files.image;
   if(!userImage.mimetype.startsWith('image')){
     res.status(404);
     throw new Error('Please upload image')
   }
   const imageSize=1024*1024;
   if(userImage.size > imageSize){
     res.status(404);
     throw new Error('Image must not exceed more than 1mb')
   }

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
  
  const imagePath = join(__dirname, '../public/uploads', userImage.name);
  console.log(imagePath);

  await userImage.mv(imagePath);
  res.status(201).json({ image: `/uploads/${userImage.name}` });

});



export { getAllUsers, getSingleUser, deleteUser, updateUser,activateUser,deactiveUser, uploadImage };