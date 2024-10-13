import express from 'express';
import { getFile, uploadFile } from '../../services/fileServices.js';

const router = express.Router();

router.post('/', uploadFile);

router.get('/', getFile)

export default router;
