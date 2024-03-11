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


export const googleLogin = async (req, res, next) => {
    const { name, email, profilePicture } = req.body;

    try {
        // Check if the user with the given email already exists
        const user = await User.findOne({ email });

        if (user) {
            // If the user exists, generate a JWT token for the user
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;

            // Send the JWT token in a cookie
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        } else {
            // If the user doesn't exist, create a new user with generated password
            const generatedPassword = name + Math.random().toString(9).slice(-4);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                profilePicture,
            });

            // Generate JWT token for the new user
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;

            // Save the new user to the database
            await newUser.save();

            // Send the JWT token in a cookie
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        // Handle errors and return an appropriate response
        return next(errorHandler(401, 'Error login with Google'));
    }
};
