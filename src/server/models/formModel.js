import mongoose from "mongoose";

const formSchema = new mongoose.Schema( {
    formName: {
        type: String,
    },
    body: {
        type: String,
    },
    anonyoms: {
        type: Boolean,
        default: true,
    },
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
    questionBlock: {
        type: [{ 
            responsKey: {
                type: Number,
                required: true,
            },
            question: {
                type: String, 
                required: true
            },
            blockType: {
                type: String
            },
            reposnsOption: [{
                type: String
            }],
            
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
    });

export default mongoose.model('form', formSchema)