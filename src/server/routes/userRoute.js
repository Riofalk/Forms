import { getAllUserForms } from "../controller/userController.js";
import { createForm } from "../controller/formController.js"
import express  from "express";

const router = express.Router();

router.get("/hello/:id", getAllUserForms)
router.post("/createForm/:id", createForm)

export default router;