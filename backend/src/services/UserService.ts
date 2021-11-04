import { UserType } from "models/user";
const UserModel = require('../models/user');

// const userDTO = (user: UserType) => (
//     {
//         _id: user._id,
//         email: user.email,
//         name: user.name
//     }
// );

exports.findAll = async () => {
    try {
        const data = await UserModel.find();
        return data;
    } catch (error) {
        throw error;
    }
}

exports.create = async (user: UserType) => {
    try {
        const data = await UserModel.create(user);

        return data;
    } catch (error) {
        throw error;
    }
}