import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user.resolver.js';

const helloResolver = {
    Query: {
        hello: () => 'Hello world'
    }
};

const mergedResolvers = mergeResolvers([userResolver, helloResolver]);

export default mergedResolvers;