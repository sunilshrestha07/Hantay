import express from "express";
import { googleLogin, login, signup, test } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/user/test',test)
router.post('/user/signup',signup)
router.post('/user/login',login)
router.post('/user/google',googleLogin)

export default router