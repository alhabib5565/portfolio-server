import cors from 'cors';
import express, { Application, NextFunction, Request, Response, } from 'express';
import { projectRoutes } from './app/modules/project/project.route';
import { skillRoutes } from './app/modules/skills/skills.routes';
import { userRoutes } from './app/modules/user/user.routes';
import { authRoutes } from './app/modules/auth/auth.route';
import { blogRoutes } from './app/modules/blog/blog.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/skills', skillRoutes)
app.use('/api/v1/blogs', blogRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)

app.get('/', async (req, res) => {
    res.json({
        message: 'protfolio server '
    })
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(401).json({
        success: false,
        message: err?.message || 'Internal server error',
        error: err
    })
})

export default app;