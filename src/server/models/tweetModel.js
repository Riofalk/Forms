import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema( {
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
    repostedBy: {
        type: []
    },
    }, {timestamps: true});

export default mongoose.model('tweet', tweetSchema)