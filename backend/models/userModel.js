import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please provide first name'],

    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please provide last name'],

    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        trim: true,

    },
    phone: {
        type: String,
        required: [true, 'Please provide phone']
    },
    Dob: {
        type: Date,
        required: true,

    },

    address: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
        required: true,
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    account_type: {
        type: String,
        enum: ['fixed', 'savings', 'current', 'checking', 'offshore'],
    },

    image: {
        type: String,
        required:[true,'Please image size must not exceed more than 1mb']
    },

    accountNo: {
        type: Number,
        minlength: 10,
        required: true,
        unique: true
    },

    account_bal: {
        type: Number,
        required: true,
        default: 0,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },

    zipcode:{
        type:Number
    },

    status: {
        type: Boolean, 
        default: false 
    },
});

//hashing the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password, salt)
})

//comparing password
userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

const User = mongoose.model('User', userSchema);
export default User;