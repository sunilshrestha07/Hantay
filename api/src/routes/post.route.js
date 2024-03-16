import express from 'express'
import { upload } from '../middlewares/multer.utils.js'
import { postFood } from '../controllers/post.controller.js'
import { verifyToken } from '../utils/verifyuser.utils.js'

const router = express.Router()

router.post('/post/:userId',verifyToken,upload.single('image'),postFood)


export default  router