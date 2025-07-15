import mongoose from "mongoose";
import * as z from "zod";
import { jwtSign, jwtVerify } from "../middlewares/jwt.js";
import {User} from "../models/user.model.js";

const signupObj = z.object({
  firstName: z.string().min(3).max(15),
  lastName: z.string().min(3).max(15),
  username: z.string().min(3).max(15),
  password: z.string().min(6).max(20),
});

const loginObj = z.object({
    username: z.string().min(3).max(15),
    password: z.string().min(6).max(20),
})

export async function userLogin(req, res) {
  try {
    const { success } = loginObj.safeParse(req.body);
    if (!success)
      return res.status(400).json({
        status: "fail",
        message: "Invalid user data",
      });
      const userExist = await User.findOne({username : req.user.username});
      if(!userExist) return res.status(404).json({status: 'fail', message: 'User not found'});
      return res.status(200).json({
        status: "success",
        message: "User logged in successfully",
        data: {
          user: userExist,
          token: req.token,
        },
      })
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Login Request Failed, Try Again",
    });
  }
}

export async function userSignup(req, res) {
  try {
    const { success } = signupObj.safeParse(req.body);
    if (!success)
      return res.status(400).json({
        status: "fail",
        message: "Invalid user data",
      });
    const { username, password, firstName, lastName } = req.body;
    const userExist = await User.findOne({ username });
    if (userExist)
      return res.status(404).json({
        status: "fail",
        message: "User Already exists",
      });
    const token = req.token;
    if (!token)
      return res.status(401).json({
        status: "fail",
        message: "Token is required",
      });
    const userData = await User.create({
      firstName,
      lastName,
      username,
      password,
    });
    if (!userData)
      return res.status(500).json({
        status: "error",
        message: "Failed to create user",
      });
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        user: userData,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Signup Request Failed, Try Again",
    });
  }
}
