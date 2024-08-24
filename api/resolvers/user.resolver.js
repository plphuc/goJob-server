import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

const userResolver = {
    Mutation: {
        signUp: async (_, { input }, context) => {
            try {
                const { username, name, password, gender, email } = input;
                if (!username || !name || !password || !gender || !email) {
                    throw new Error('All fields are required');
                }

                const existingUsername = await User.findOne({ username });
                if (existingUsername) {
                    throw new Error('User already exists');
                }

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const profilePic = `https://avatar.iran.liara.run/public/${
                    gender === 'male' ? 'boy' : 'girl'
                }?username=${username}`;

                const newUser = new User({
                    username,
                    name,
                    password: hashedPassword,
                    email,
                    gender,
                    profilePicture: profilePic
                });

                await newUser.save();
                await context.login(newUser);

                return newUser;
            } catch (error) {
                console.error('Error in sign up: ', error);
                throw new Error(error.message || 'Internal server error');
            }
        },
        login: async (_, { input }, context) => {
            const { username, password } = input;
            if (!username || !password) {
                throw new Error('Invalid username or password');
            }
            const { user } = await context.authenticate('graphql-local', {
                username,
                password
            });

            await context.login(user);
            return user;
        },
        logout: async (_, __, context) => {
            try {
                await context.logout();
                context.req.session.destroy((error) => {
                    if (error) {
                        throw error;
                    }
                });
                context.res.clearCookie('connect.sid');
                return { message: 'Logged out successfully' };
            } catch (error) {
                console.error('Error in log out: ', error);
                throw new Error(error.message || 'Internal server error');
            }
        }
    },

    Query: {
        hello: () => "Hello world from Daisy's app",
        authUser: async (_, __, context) => {
            try {
                const user = await context.getUser();
                return user;
            } catch (error) {}
        }
    }
};

export default userResolver;
