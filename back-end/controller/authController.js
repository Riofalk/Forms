import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import dotenv from 'dotenv';

dotenv.config();

export const createUser = async (req, res) => {
    try {
        const { password } = req.body 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const newUser = new userModel({
            ... req.body,
            password: hash
        })
        
        await newUser.save();
        res.status(201).send('User is created')
    }
    catch (error) {
        res.status(405).send(error.message);
    }
}


export const loginUser = async (req, res) => {
    try {
        const { password, email } = req.body 
        const user = await userModel.findOne( {email: email})

        if (!user)  return res.status(404).send("User or password is not correct")

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect)  return res.status(404).send("User or password is not correct")

        const token = jwt.sign({id: user._id}, process.env.KEY_GEN, {expiresIn: "2h"});

        return res.
            cookie("session_token", token, {
            httpOnly: true,
            })
            .status(201)
            .send(`Successfuly loggen in`)
    }
    catch (error) {
        res.status(405).send(error.message);  
        console.log(error)  
    }
}