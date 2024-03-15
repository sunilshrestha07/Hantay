import express from "express";
import { googleLogin, login, signup, test, userUpdate } from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyuser.utils.js'
import {upload} from '../middlewares/multer.utils.js'

const router = express.Router()

router.get('/user/test',test)
router.post('/user/signup',signup)
router.post('/user/login',login)
router.post('/user/google',googleLogin)
router.put('/update/:userId',verifyToken,upload.single('profilePicture'),userUpdate)

export default router