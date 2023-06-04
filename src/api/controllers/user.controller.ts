import { Types } from "mongoose";
import userService from "../../services/user.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';

const getUserById = tryCatch(async (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.params.id);
    const user = await userService.getUserById(userId);
    res.send(user);
}); 

const createUser = tryCatch(async (req: Request, res: Response) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).send(newUser);
}); 

export default {
    getUserById,
    createUser
}