import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    dob: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    description: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);
export default User;
