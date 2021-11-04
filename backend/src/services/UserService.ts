import { UserType } from "models/User";
const UserModel = require('../models/User');

const userDTO = (user: UserType) => (
    {
        _id: user._id,
        email: user.email,
        name: user.name
    }
);

export const findAll = async () => {
    try {
        const users = await UserModel.find();

        const data = await users.map(userDTO);

        return data;
    } catch (error) {
        throw error;
    }
}

export const createOneUser = async (user: UserType) => {
    try {
        const data = await UserModel.create(user);

        return data;
    } catch (error) {
        throw error;
    }
}