import express from 'express';
import fileRouter from './fileRoutes.js';

const router = express.Router();

const defaultRoutes = [
    {
        path: '/file',
        route: fileRouter
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
