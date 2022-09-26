import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

export const createUser = async (req, res) => {
    try {
        const { password } = req.body 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const newUser = new userModel({
            ...req.body,
            userId: req.body.userId,
            password: hash
        })
        await newUser.save();
        res.status(201).send('User is created')
    }
    catch (error) {
        return res.status(405).send(error.message);
    }
}


export const loginUser = async (req, res) => {
    try {
        const { password, userId } = req.body 
        const user = await userModel.findOne( {userId: userId})

        if (!user)  return res.status(404).send("User or password is not correct")

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect)  return res.status(404).send("User or password is not correct")
        
        const { _id} = user;

        const token = jwt.sign({id: _id}, process.env.KEY_GEN, {expiresIn: "2h"});
        return res.
            cookie("session_token", token, {
            httpOnly: true,
            })
            .status(201)
            .send(token)
    }
    catch (error) {
        res.status(405).send(error.message);  
        console.log(error)  
    }
}