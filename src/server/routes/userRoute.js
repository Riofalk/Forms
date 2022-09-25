import { getUserInfo } from "../controller/userController.js";
import express  from "express";
import {verifySessionToken} from "../authCheck/authCheck.js"

const router = express.Router();

router.get("/getUserInfo", verifySessionToken, getUserInfo)

export default router;