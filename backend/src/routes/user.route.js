import express from 'express';
import { userLogin, userSignup, userLoginCheck } from '../controllers/user.controller.js';
import { authenticateUser, jwtSign } from '../middlewares/jwt.js';

const router = express.Router();

router.get('/user/me', authenticateUser, userLoginCheck)
router.post('/user/login', jwtSign, userLogin);
router.post('/user/signup',jwtSign, userSignup);

export default router;
