import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    userName: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
        required: true,
        unique: true,
    },
    tweetes: {
        type: []
    },
    following: {
        type: []
    },
    followers: {
        type: []
    },
    feed: {
        type:[]
    },
    }, {timestamps: true});

 export default mongoose.model('user', userSchema)