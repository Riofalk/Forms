import formModel from "../models/formModel.js";

export const getAllUserForms = async (req, res) => {
    try {
        const allUserForms = await formModel.find({}, {password:1});
        res.status(202).json(allUserForms);
        return allUserForms;
    }
    catch (error) {
        console.log(error)
    }   
}
