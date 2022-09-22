import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.pwd, salt);
    const newUser = new userModel({
      ...req.body,
      pwd: hash,
    });
    await newUser.save();
    res.status(201).send("new user is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};
