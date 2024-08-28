import express from 'express';
import { uploadFile } from '../../services/fileServices.js';
import multer from 'multer';

const router = express.Router();

router.post('/', uploadFile);

export default router;
