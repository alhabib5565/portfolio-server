import express from 'express';
import { ProjectController } from './project.controller';
const router = express.Router()

router.post('/add-project', ProjectController.addProject)
router.get('/', ProjectController.getAllProjects)
router.get('/:id', ProjectController.getSingleProjects)

export const projectRoutes = router