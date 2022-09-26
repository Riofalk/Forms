import { Recommend } from "@mui/icons-material";
import tweetModel from "../models/tweetModel.js";
import userModel from "../models/userModel.js"


export const postTweet = async (req, res) => {
    try {
        if (req.body.tweetBy != req.params.id) return res.status(404).send("Wrong ID")
        const newTweet = new tweetModel({...req.body})
        const updatedUser = await userModel.findOneAndUpdate({_id: req.body.tweetBy},  {"$push": { tweets: newTweet._id } }, {returnOriginal: false})
        await newTweet.save()
        await updatedUser.save();
        return res.status(201).send('Tweeted!')  
    }
    catch (error) {
        console.log(error)
        return res.status(405).send(error);
    }   
}

export const getUserTweets = async (req, res) => {
    try {
        let tweetArray = [];
        const {tweets} = await userModel.findOne({ userId: req.params.id})
        for (let index in tweets) {
            const tweet = await tweetModel.findById( tweets[index]._id)
            tweetArray.unshift(tweet)
        }
        return res.status(201).json(tweetArray)
    }
    catch (error) {
        return res.status(405).send(error);
    }   
}

export const getAllTweets = async (req, res) => {
    try {
        const tweetArr = await tweetModel.find({})
        return res.status(201).json(tweetArr.reverse())
    }
    catch (error) {
        console.log(error)
        return res.status(405).send(error);
    }   
}

export const likePressed = async (req, res) => {
    try {
        const tweet = await tweetModel.find({_id : req.body._id})
        return res.status(200).send(tweet.likedBy.includes(req.body.userId) ) 
    }
    catch (error) {
        console.log(error)
        return res.status(405).send(error);
    }   
}