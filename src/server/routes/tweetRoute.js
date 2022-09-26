import express  from "express";
import {verifySessionToken} from "../authCheck/authCheck.js"
import { postTweet, getUserTweets } from "../controller/tweetController.js";

const router = express.Router();

router.post("/tweet/:id", verifySessionToken, postTweet)
router.get("/getAllUserTweets/:id", getUserTweets)

export default router;