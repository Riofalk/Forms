import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userForms: {
        type: [{
            type: String,
            required: true,

        }]
    },
    respondedIn: {
        type: [{
            type: String,
        }]
    },
    }, {timestamps: true});

 export default mongoose.model('user', userSchema)