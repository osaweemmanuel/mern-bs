import express from 'express'
import { authorizePermission,authenticatedUser } from '../middleware/authentication.js';

const router=express.Router();

import { register,loginUser,logout} from '../controllers/authController.js';


router.route('/',).post(register)
router.post('/login',loginUser);
router.get('/logout',logout)







export default router;