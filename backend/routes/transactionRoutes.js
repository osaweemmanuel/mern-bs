import express from 'express'
import { authorizePermission,authenticatedUser } from '../middleware/authentication.js';


const router=express.Router();
import { createTransaction,DeleteAccount } from '../controllers/transactionController.js';


router.post('/',[authenticatedUser,authorizePermission('admin')],createTransaction)
router.delete('/:id',[authenticatedUser,authorizePermission('admin')],DeleteAccount)
export default router