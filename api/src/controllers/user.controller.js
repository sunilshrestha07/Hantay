import {errorHandler} from '../utils/errorHandler.utils.js'
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'


export const test = (req,res,next)=>{
    res.send('APi is working in conroller')
}

//controller to singin

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password || email.trim() === '' || password.trim() === '' || name.trim() === '') {
        return next(errorHandler(401, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Creating a new User instance with hashed password
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        // Saving the new user to the database
        await newUser.save();
        
        // Sending a success response
        res.status(200).send("User signup success");
    } catch (error) {
        return next(errorHandler(401, 'Error saving user'));
    }
};


export const login = async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password || email.trim()=='' || password.trim()==''){
        return next(errorHandler(401,"All fields are required"))
    }
   try {
    const validUser = await User.findOne({email})
    if(!validUser){
        return next(errorHandler(404,"User not found"))
    }
    const validPassword = bcryptjs.compareSync(password,validUser.password)
    if(!validPassword){
        return next(errorHandler(404,"Incorrect password"))
    }

    //sending details except password
    const {password:pass,...rest}=validUser._doc

    //sending token 
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
    res.status(200).cookie('access_token',token,{
        httpOnly: true}).json(rest)


   } catch (error) {
    
   }
}
