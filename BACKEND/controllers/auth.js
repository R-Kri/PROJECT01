import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    console.log(req.body);
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        console.log(newUser,"hhi");
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: false, // Ensure the cookie is sent over HTTPS in production
            sameSite: 'Lax',
        }).status(200).json({ message: 'Login successful', ...otherDetails,user });
    } catch (error) {
        next(error);
    }
}