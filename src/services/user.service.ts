import { Types } from "mongoose";
import userRepository from "../repositories/user.repository";
import User from "../schemas/user.schema";

const getUserById = (id: Types.ObjectId) => {
    return userRepository.findById(id);
}

const createUser = (user: User) => {
    return userRepository.create(user);
}

export default {
    getUserById,
    createUser
}