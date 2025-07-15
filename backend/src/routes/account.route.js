import express from "express";
import { authenticateUser } from "../middlewares/jwt.js";
import { getAccountBalance, transferFunds } from "../controllers/account.controller.js";

const router = express.Router()

router.get('/account/balance', authenticateUser, getAccountBalance);
router.post('/account/transfer', authenticateUser, transferFunds);

export default router;