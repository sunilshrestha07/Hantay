import express from "express";
import { signup, test } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/user/test',test)
router.post('/user/signup',signup)

export default router