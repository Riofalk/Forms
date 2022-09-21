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
    responsOptions: {
        type: [{ 
            responsKey: {
                type: Number,
                min: 1,
                required: true,
            },
            reposnsOption: {
                type: String,
                required: true,
            }
        }],
    },
    responded: {
        type: [{
            id: {
                type: String,
                required: true,
            }
        }],
    },
    responses: {
        type: [{
            id: {
                type: String,
                required: true,
            }
        }],
    },
    }, {timestamps: true});

export default mongoose.model('form', formSchema)