import express from 'express';
import { userLogin, userSignup } from '../controllers/user.controller.js';
import { authenticateUser, jwtSign } from '../middlewares/jwt.js';

const router = express.Router();

router.get('/user/login', authenticateUser, userLogin);
router.post('/user/signup',jwtSign, userSignup);

export default router;
