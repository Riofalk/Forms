import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

export const getAllUserForms = async (req, res) => {
    try {
        const allUserForms = await userModel.findById(req.params.id)
        res.status(202).json(allUserForms.userForms) 
        return allUserForms.userForms;
    }
    catch (error) {
        return res.status(404).send("User not found");
    }   
}


export const getUserInfo = async (req, res) => {
    try {
        const getUserInfo = await userModel.findById(req.user.id, {password: 0})
        return res.status(202).json(getUserInfo) 
    }
    catch (error) {
        return res.status(404).send("User not found");
    }   
}

