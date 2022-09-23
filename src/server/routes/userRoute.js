import { getAllUserForms } from "../controller/userController.js";
import { tokenId } from "../utils/tokens.js";
import express  from "express";

const router = express.Router();

router.get("/getAllUserForms/:id", getAllUserForms)
router.get("/getTokenId/", tokenId)

export default router;