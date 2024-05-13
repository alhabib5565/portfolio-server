import express from 'express';
import { UserController } from './user.controller';
const router = express.Router()

router.post('/add-user', UserController.addUser)
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUsers)

export const userRoutes = router