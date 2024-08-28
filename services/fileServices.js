import { uploadFileMiddleware } from '../api/middlewares/uploadFileMW.js';

export const uploadFile = async (req, res, next) => {
    await uploadFileMiddleware(req, res);

    
    return res.status(200).send(response);
};
