import * as userController from "../controllers/user.controller";
import express from 'express';

const router = express.Router();

router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;