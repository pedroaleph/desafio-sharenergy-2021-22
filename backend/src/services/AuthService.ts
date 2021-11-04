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

exports.authenticate = async (email: string, password: string) => {
    try {

        const user:typeof UserModel = await UserModel.findOne({ email });

        await user.isCorretPassword(password);

        const userData = userDTO(user);

        const access_token = jwt.sign(userData, JWT_SECRET, { expiresIn });
        
        return { access_token, expiresIn, user: userData };
        
    } catch (error) {
        throw error;
    }
};