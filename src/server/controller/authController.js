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

export const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ user: req.body.user });

    if (!user) {
      return res.status(404).send("Wrong username or password");
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.pwd, user.pwd);

    if (!isPasswordCorrect) {
      return res.status(404).send("Wrong username or password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    return res
      .cookie("session_token", token, { httpOnly: true })
      .status(201)
      .send(`Successfully logged in!`);
  } catch (error) {
    console.error(error);
  }
};
