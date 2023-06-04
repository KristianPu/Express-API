import userController from "../controllers/user.controller";
import express from 'express';

const userRouter = express.Router();

userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);

export default userRouter;