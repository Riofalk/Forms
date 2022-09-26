import tweetModel from "../models/tweetModel.js";
import userModel from "../models/userModel.js"


export const postTweet = async (req, res) => {
    try {
        const newTweet = new tweetModel({...req.body})
        if (req.body.tweetBy != req.params.id) return res.status(404).send("Wrong ID")
        await newTweet.save()
        const updateUserTweets = await userModel.findOneAndUpdate({_id: req.body.tweetBy},  {"$push": { tweets: newTweet._id } }, {returnOriginal: false})
        await updateUserTweets.save();
        return res.status(201).send('Tweeted!')  
    }
    catch (error) {
        return res.status(405).send("Fuck");
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