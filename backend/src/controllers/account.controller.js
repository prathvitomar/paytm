import { Account } from "../models/account.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

export async function getAccountBalance(req, res) {
  try {
    // console.log(req.user)
    const username = req.user.username;
    const accountExists = await User.findOne({ username: username });
    console.log(accountExists);
    if (!accountExists)
      return res.status(404).json({
        status: "fail",
        message: "Account not found",
      });
    const account = await Account.findOne({ userId: accountExists._id });
    return res.status(200).json({
      status: "success",
      data: {
        balance: account.balance,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Unable to fetch account balance",
      error: error.message,
    });
  }
}

// export async function transferFunds(req, res) {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   try {
//     console.log("REQ USER : ", req.user);
//     console.log("REQ BODY : ",req.body);
//     const { amount, to } = req.body;
//     const username = req.user.username;
//     const accountExists = await User.findOne({ username: username });
//     console.log("SENDER ACCOUNT : ", accountExists);
//     const fromAccount = await Account.findOneAndDelete({
//       userId: accountExists._id,
//     }).session(session);
//     if (fromAccount.balance < amount || !fromAccount) {
//       await session.abortTransaction();
//       return res.status(400).json({
//         status: "fail",
//         message: "Insufficient balance",
//       });
//     }
//     const toAccount = await Account.findById({ userId: to }).session(session);
//     console.log("RECEIVER ACCOUNT : ", toAccount);
//     if (!toAccount) {
//       await session.abortTransaction();
//       return res.status(404).json({
//         status: "fail",
//         message: "Recipient account not found",
//       });
//     }
//     const updateFromAccount = await Account.findOneAndUpdate(
//       { userId: from },
//       { $inc: { balance: -amount } }
//     ).session(session);
//     const updateToAccount = await Account.findOneAndUpdate(
//       { userId: to },
//       { $inc: { balance: amount } }
//     ).session(session);
//     if (updateFromAccount && updateToAccount) {
//       await session.commitTransaction();
//       return res.status(200).json({
//         status: "success",
//         message: "Funds transferred successfully",
//       });
//     }
//   } catch (error) {
//     await session.abortTransaction();
//     return res.status(500).json({
//       status: "error",
//       message: "Unable to transfer funds",
//     });
//   }
// }


export async function transferFunds(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { amount, to } = req.body;
    const username = req.user.username;

    const senderUser = await User.findOne({ username });
    if (!senderUser) {
      await session.abortTransaction();
      return res.status(404).json({ status: "fail", message: "Sender not found" });
    }

    const fromAccount = await Account.findOne({ userId: senderUser._id }).session(session);
    if (!fromAccount || fromAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        status: "fail",
        message: "Insufficient balance",
      });
    }

    const toUser = await User.findById(to);
    if (!toUser) {
      await session.abortTransaction();
      return res.status(404).json({
        status: "fail",
        message: "Recipient user not found",
      });
    }

    const toAccount = await Account.findOne({ userId: toUser._id }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(404).json({
        status: "fail",
        message: "Recipient account not found",
      });
    }

    await Account.findOneAndUpdate(
      { userId: senderUser._id },
      { $inc: { balance: -amount } },
      { session }
    );

    await Account.findOneAndUpdate(
      { userId: toUser._id },
      { $inc: { balance: amount } },
      { session }
    );

    await session.commitTransaction();
    return res.status(200).json({
      status: "success",
      message: "Funds transferred successfully",
    });

  } catch (error) {
    await session.abortTransaction();
    return res.status(500).json({
      status: "error",
      message: "Unable to transfer funds",
      error: error.message,
    });
  } finally {
    session.endSession();
  }
}
