import { Account } from "../models/account.model.js";

export async function getAccountBalance(req, res) {
  try {
    const userId = req.user._id;
    const accountExists = await Account.findById({ userId });
    if (!accountExists)
      return res.status(404).json({
        status: "fail",
        message: "Account not found",
      });
      return res.status(200).json({
        status: "success",
        data: {
          balance: accountExists.balance
        }
      })

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Unable to fetch account balance",
      error: error.message
    });
  }
}

export async function transferFunds(req, res) {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount, to} = req.body;
    const fromAccount = await Account.findById({userId: req.user._id}).session(session);
    if(fromAccount.data.balance < amount || !fromAccount){
        await session.abortTransaction();
        return res.status(400).json({
          status: "fail",
            message: "Insufficient balance",
        });
    }
    const toAccount = await Account.findById({userId: to}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(404).json({
          status: "fail",
            message: "Recipient account not found",
        });
    }
    const updateFromAccount = await Account.findByIdAndUpdate({userId: from},{$inc: {balance: -amount}}).session(session);
    const updateToAccount = await Account.findByIdAndUpdate({userId: to},{$inc: {balance: amount}}).session(session);
    if(updateFromAccount && updateToAccount){
        await session.commitTransaction();
        return res.status(200).json({
          status: "success",
          message: "Funds transferred successfully",
        });
    }

  } catch (error) {
        await session.abortTransaction();
        return res.status(500).json({
          status: "error",
          message: "Unable to transfer funds",
        });
  }
}
