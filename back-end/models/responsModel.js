import mongoose from "mongoose";

const responsSchema = new mongoose.Schema( {
    responseFinished: {
        type: Boolean,
        default: false,
        required: true,
    },
    response: {
        type: [],
    },
    userId: {
        type: String,
        required: true,
    },
    formId: {
        type: String,
        required: true,
    }
    }, {timestamps: true});

export default mongoose.model('response', responseSchema)