import express from 'express';
const router=express.Router();

import { authenticatedUser,authorizePermission } from "../middleware/authentication.js";
import { createLoan,deleteLoan,getAllLoan,loanPayment,getLoanBalance } from "../controllers/loanController.js";

router.route('/').post([authenticatedUser,authorizePermission('admin')],createLoan)
.get([authenticatedUser,authorizePermission('admin')],getAllLoan)
router.post('/payments',[authenticatedUser,authorizePermission('admin')],loanPayment)

router.route('/:id').get([authenticatedUser,authorizePermission('admin')])
.delete([authenticatedUser,authorizePermission('admin')],deleteLoan)

router.get('/:userId/loan-balance',[authenticatedUser,authorizePermission('admin')],getLoanBalance)





export default router