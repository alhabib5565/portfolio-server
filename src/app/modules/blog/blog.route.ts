import express from 'express';
import { BlogController } from './blog.controller';
const router = express.Router()

router.post('/add-blog', BlogController.addBlog)
router.get('/', BlogController.getAllBlogs)
router.get('/:id', BlogController.getSingleBlogs)

export const blogRoutes = router