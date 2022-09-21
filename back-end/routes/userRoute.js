import { getAllUserForms } from "../controller/userController.js";
import express  from "express";

const router = express.Router();

router.get("/hello/:id", getAllUserForms)

export default router;