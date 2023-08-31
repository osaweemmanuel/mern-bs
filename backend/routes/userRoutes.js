import express from 'express';
const router = express.Router();

import {
    getAllUsers,
    updateUser,
    getSingleUser,
    deleteUser,
    activateUser,
    deactiveUser,
    uploadImage

} from '../controllers/usersController.js';
import { authenticatedUser, authorizePermission } from '../middleware/authentication.js';

// Route for getting all users (admin access)
router.get('/', authenticatedUser, authorizePermission('admin'), getAllUsers);
router.route('/uploadImage').post(uploadImage)

// Route for updating user (admin access)
router.route('/:id').patch([authenticatedUser,authorizePermission('admin')],activateUser).patch([authenticatedUser,authorizePermission('admin')],updateUser)



// Route for getting a single user (admin access)
router.get('/:id', getSingleUser);

// Route for deleting a user (admin access)
router.delete('/:id', authenticatedUser, authorizePermission('admin'), deleteUser);

// Route for activating a user (admin access)
router.patch('/:id/deactivate', [authenticatedUser, authorizePermission('admin')], deactiveUser);




export default router;
