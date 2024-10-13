import mongoose from 'mongoose';
import Post from '../models/post.model.js';
import User from '../models/user.model.js';

const postResolver = {
    Mutation: {
        createPost: async (_, { input }, context) => {
            const { title, content, imageUrl } = input;
            try {
                if (!title) {
                    throw new Error('Post must have title');
                }
                if (!content && !imageUrl) {
                    throw new Error(
                        'At list one is required (content or image)'
                    );
                }

                const newPost = new Post({
                    ...input,
                    createdDate: Date.now(),
                    userId: context.getUser()._id
                });
                await newPost.save();
                return newPost;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },

        editPost: async (_, { input }, context) => {
            const { title, content, imageUrl } = input;
            try {
                const editingPost = await Post.findById(input._id);
                if (!editingPost) {
                    throw new Error('Post does not exists');
                }
                if (!context.getUser()._id.equals(editingPost.userId)) {
                    throw new Error('Only owner can modify');
                }
                const updatedPost = await Post.findByIdAndUpdate(
                    input._id,
                    { title, content, imageUrl },
                    {
                        new: true
                    }
                );
                return updatedPost;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },
        deletePost: async (_, { input }, context) => {
            try {
                const deletingPost = await Post.findById(input._id);
                if (!deletingPost) {
                    throw new Error('Post does not exists');
                }
                
                if (!context.getUser()._id.equals(deletingPost.userId)) {
                    throw new Error('Only owner can delete');
                }
                const deletedPost = await Post.findByIdAndDelete(input._id);
                return deletedPost;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        }
    },

    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.find({});
                return posts;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        }
    },

    Post: {
        user: async (parent) => {
            try {
                const userId = parent.userId;
                const user = await User.findById(userId);
                return user;
            } catch (error) {
                console.error('Error: ', error);
                throw new Error(error.message || 'Internal server error');
            }
        }
    }
};

export default postResolver;
