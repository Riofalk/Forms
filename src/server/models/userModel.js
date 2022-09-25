import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    password: {
        type: String,
        required: true,
    },
    userId: { 
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
    },
    tweets: {
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
    }
    }, {timestamps: true})

 export default mongoose.model('user', userSchema)