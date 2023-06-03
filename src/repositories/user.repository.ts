import User, { UserModel } from '../schemas/user.schema';
import { Types } from 'mongoose';

async function findById(_id: Types.ObjectId): Promise<User | null> {
    return UserModel.findOne({ _id }).exec();
}

async function create(user: User): Promise<User | null> {
    return await UserModel.create(user);
}

export default {
    findById,
    create
}