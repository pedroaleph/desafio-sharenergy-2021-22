import { UserType } from 'models/User';
import jwt from 'jsonwebtoken';

const UserModel = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET ?? 'XXX';
const expiresIn =  process.env.TOKEN_EXPIRATION ?? 14400; // 4 horas

const userDTO = (user: UserType) => (
    {
        _id: user._id,
        email: user.email,
        name: user.name
    }
);

export const authenticate = async (email: string, password: string) => {
    try {

        const user = await UserModel.findOne({ email });

        if(!user)
            throw new Error('Invalid email!');

        await user.isCorrectPassword(password);

        const userData = userDTO(user);

        const access_token = jwt.sign(userData, JWT_SECRET, { expiresIn });
        
        return { access_token, user: userData };
        
    } catch (error) {
        throw error;
    }
};