import { Types } from "mongoose";
import userService from "../../services/user.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';

export const getUserById = tryCatch((req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.params.id);
    const user = userService.getUserById(userId);
    res.send(user);
}); 

export const createUser = tryCatch((req: Request, res: Response) => {
    const newUser = userService.createUser(req.body);
    res.status(201).send(newUser);
}); 