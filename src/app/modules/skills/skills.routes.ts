import express from 'express';
import { SkillController } from './skills.controller';
const router = express.Router()

router.post('/add-skill', SkillController.addSkill)
router.get('/', SkillController.getAllSkills)
router.get('/:id', SkillController.getSingleSkills)

export const skillRoutes = router