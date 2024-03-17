import connectDB from "./src/db/index.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import userRouter from "./src/routes/user.route.js";
import adminRouter from './src/routes/admin.route.js'
import postRouter from './src/routes/post.route.js'
import path from 'path';

const app = express()

app.use(cors())
app.use(express.json());
app.use(cookieParser());

connectDB()  //imported from db the actual connect process is there
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Listining in PORT: ${process.env.PORT || 3000}`)
    })
})
.catch((error)=>{
        console.log("Error ",error)
})

const __dirname = path.resolve()


//create routes 

app.use('/api',userRouter)
app.use('/api',adminRouter)
app.use('/api',postRouter)


app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

//create function to handel errors
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal sever error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})