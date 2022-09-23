import userModel from "../models/userModel.js";



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

