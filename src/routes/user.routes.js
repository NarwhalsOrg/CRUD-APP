import express from 'express';
import { getProfile, updateProfile, deleteAccount } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.delete('/account', deleteAccount);

export default router;