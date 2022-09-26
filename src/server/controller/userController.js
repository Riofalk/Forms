import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';


export const getUserInfo = async (req, res) => {
    try {
        const getUserInfo = await userModel.findById(req.user.id, {password: 0})
        return res.status(202).json(getUserInfo) 
    }
    catch (error) {
        return res.status(404).send("User not found");
    }   
}

