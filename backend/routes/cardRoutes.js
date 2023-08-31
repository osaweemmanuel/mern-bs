import express from 'express'
const router=express.Router();

import { createCard } from '../controllers/cardController.js';
import {authenticatedUser,authorizePermission} from '../middleware/authentication.js'
router.post('/create',[authenticatedUser,authorizePermission('admin')],createCard)

export default router;