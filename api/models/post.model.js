import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    content: {
        type: String
    },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }
});

const Post = mongoose.model('Post', userSchema);
export default Post;
