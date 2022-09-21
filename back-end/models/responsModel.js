import mongoose from "mongoose";

const responsSchema = new mongoose.Schema( {
    responseFinished: {
        type: Boolean,
        default: false,
        required: true,
    },
    responses: {
        type: [{
            responsKey: {
                type: Number,
                min: 1,
                required: true,
            },
            reposnsValue: {
                type: Number,
                min: 1,
                required: true,
            }
        }],
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

export default mongoose.model('respons', responsSchema)