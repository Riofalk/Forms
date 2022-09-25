import mongoose from "mongoose";

const responsSchema = new mongoose.Schema( {
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

export default mongoose.model('respons', responsSchema)