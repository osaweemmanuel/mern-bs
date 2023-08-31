import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

const register = asyncHandler(async (req, res) => {
    const {firstName,lastName,email, password,account_type,address,city,state,phone,gender,Dob,account_bal,image,zipcode } = req.body;

    if (!firstName || !lastName || !email || !password || !account_type || !address ||!city ||!state ||!phone ||!gender ||!Dob || !image) {
        res.status(400);
        throw new Error('Please provide all values');
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(404);
        throw new Error('Email already exists');
    }

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';
    const status=isFirstAccount? true :false;

    const accountNo = Math.floor(Math.random() * 9000000000);


    const user=await User.create({
        firstName,
        lastName,
        email,
        password,
        account_type,
        address,
        city,
        state,
        phone,
        gender,
        Dob,
        accountNo,
        role,
        account_bal,
        image,
        zipcode,
        status
        
    })

    if(user){
       res.status(201).json({
        _id:user._id,
        role:user.role,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        account_type:user.account_type,
        address:user.address,
        city:user.city,
        state:user.state,
        phone:user.phone,
        gender:user.gender,
        Dob:user.Dob,
        accountNo:user.accountNo,
        account_bal:user.account_bal,
        status:user.status
       
       })
    }else{
        
    }

   
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404);
        throw new Error('Please provide email and password');
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404);
        throw new Error('Email or password is invalid');
    }

    if (user.role !=='admin' && user.status == false) {
        res.status(404).send('Account is not active');
    } else {
        if (user && (await user.comparePassword(password))) {
            generateToken(user._id,res);
            res.status(200).json({
                password: user.password,
                email: user.email,
                role: user.role,
                _id: user._id,
                status:user.status
               
            });
        } else {
            res.status(404);
            throw new Error('Email or password is invalid');
        }
    }
});

const logout = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'Successfully logged out' });
});

export { register, loginUser, logout };
