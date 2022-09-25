import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    profileImg: {
        type: String,
        default: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e"
    },
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