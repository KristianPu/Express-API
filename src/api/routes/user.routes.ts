import * as userController from "../controllers/user.controller";
import express from 'express';

const userRouter = express.Router();

userRouter.get('/user/:id', userController.getUserById);
userRouter.post('/user', userController.createUser);

export default userRouter;