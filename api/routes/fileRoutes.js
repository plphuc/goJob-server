import express from 'express';
import { uploadFile } from '../../services/fileServices.js';

const router = express.Router();

router.post('/', uploadFile);

export default router;
