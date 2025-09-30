import express from 'express';
import movieRouter from './movies.routes.js';

const router = express.Router();

router.use("/movies", movieRouter);

export default router;