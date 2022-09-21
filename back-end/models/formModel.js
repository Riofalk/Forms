import mongoose from "mongoose";

const formSchema = new mongoose.Schema( {
    formCreator: {
        type: String,
        required: true,
    },
    formClosed: {
        type: Boolean,
        default: false,
    },
    resultView: {
        type: Boolean,
        default: false,
    },
    formLength: {
        type: Number,
        required: true
    },
    responded: {
        type: [],
    },
    responses: {
        type: [],
    },
    }, {timestamps: true});

export default mongoose.model('form', formSchema)