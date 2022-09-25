import { getAllUserForms } from "../controller/userController.js";
import express  from "express";
import verifySessionToken from "../authCheck/authCheck.js"

const router = express.Router();

router.get("/getAllUserForms/:id", verifySessionToken, getAllUserForms)

export default router;