import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import fileUpload from 'express-fileupload';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { notFound,errorHandler } from './middleware/notFoundMiddlware.js';
dotenv.config();

import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import transactionRouter from './routes/transactionRoutes.js'
import cardRouter from './routes/cardRoutes.js'
import loanRouter from './routes/loanRoutes.js'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

const PORT=process.env.PORT || 5000;
const app=express();

if(process.env.NODE_ENV !=='production'){
    app.use(morgan('dev'))
}

// const __dirname=path.resolve();
// const __dirname = dirname(__filename);
// app.use(express.static(path.join(__dirname,'./public')));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, './public')));

app.use(express.json());
app.use(express.urlencoded({extends:true}))
app.use(cookieParser(process.env.JWT_SECRET))

app.use(fileUpload())



app.get('/',(req,res)=>res.send('Welcome page'))

app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/transaction',transactionRouter)
app.use('/api/card',cardRouter)
app.use('/api/loans',loanRouter)



app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`The server is running on Port ${PORT}`)
})

connectDB();