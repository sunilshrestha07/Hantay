import express from "express";
import { login, signup, test } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/user/test',test)
router.post('/user/signup',signup)
router.post('/user/login',login)

export default router