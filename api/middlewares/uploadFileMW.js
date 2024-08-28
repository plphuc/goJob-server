import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import { promisify } from 'util';
import dotenv from 'dotenv';
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    file: (req, file) => {
        console.log("sak");
        
        const imageType = ['image/png', 'image/jpeg'];

        // if file is not image, save it to default bucket
        if (imageType.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-${file.originalname}`;
            return filename;
        }

        // else, save to bucket photos
        return {
            bucketName: 'photos',
            filename: `${Date.now()}-${file.originalname}`,
        };
    }
});

const upload = multer({ storage: storage }).single('file');
const uploadFileMiddleware = promisify(upload);

export { uploadFileMiddleware };
