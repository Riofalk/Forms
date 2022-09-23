import formModel from "../models/formModel.js";

export const createForm = async (req, res) => {
    try {
        const form = new formModel({...req.body,
                                    formCreator: req.params.id});
        await form.save();
        return res.status(202).send("New form created succesefully");
    }
    catch (error) {
        console.log(error)
    }   
}