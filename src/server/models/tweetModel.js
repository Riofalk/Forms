import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema( {
    profileImg: {
        type: String,
    },
    body: {
        type: String,
        required: true,
    },
    tweetBy: {
        type: String,
        required: true,
    },
    likedBy: {
        type: []
    },
    }, {timestamps: true});

export default mongoose.model('tweet', tweetSchema)