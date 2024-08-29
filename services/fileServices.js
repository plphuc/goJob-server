import { uploadFileMiddleware } from '../api/middlewares/uploadFileMW.js';

export const uploadFile = async (req, res, next) => {
    await uploadFileMiddleware(req, res);
    const id = req.file.id
    return res.status(200).send({id});
};
