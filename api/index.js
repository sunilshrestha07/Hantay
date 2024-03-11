import connectDB from "./src/db/index.js";
import {app} from './App.js'
import dotenv from 'dotenv'
dotenv.config()
import userRouter from "./src/routes/user.route.js";

connectDB()  //imported from db the actual connect process is there
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Listining in PORT: ${process.env.PORT || 3000}`)
    })
})
.catch((error)=>{
        console.log("Error ",error)
})

app.get('/test',(req,res)=>{
    res.send('Api is working')
})

//create routes 

app.use('/api',userRouter)




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