import Post from '../models/post.model.js';

const postResolver = {
    Mutation: {
        createPost: async (_, { input }, context) => {            
            const { title, content, imageId } = input;            
            try {
                if (!title) {
                    throw new Error('Post must have title');
                }
                if (!content && !imageId) {
                    throw new Error(
                        'At list one is required (content or image)'
                    );
                }

                
                const newPost = new Post({
                    ...input,
                    imageId: null,
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
            try {
                const editingPost = Post.findById(input.id);
                if (context.getUser()._conditions._id !== editingPost.userId) {
                    throw new Error('Only owner can modify');
                }
                const updatedPost = Post.findByIdAndUpdate(input.id, input, {
                    new: true
                });
                return updatedPost;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },
        deletePost: async (_, { input }, context) => {
            try {
                const deletingPost = Post.findById(input.id);
                if (context.getUser()._conditions._id !== deletingPost.userId) {
                    throw new Error('Only owner can delete');
                }
                const deletedPost = Post.findByIdAndDelete(input.id);
                return deletedPost;
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        }
    }
};

export default postResolver;
