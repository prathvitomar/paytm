import express from 'express';
import { userLogin, userSignup } from '../controllers/user.controller.js';
import { authenticateUser, jwtSign } from '../middlewares/jwt.js';

const router = express.Router();

router.post('/user/login', jwtSign, userLogin);
router.post('/user/signup',jwtSign, userSignup);

export default router;
