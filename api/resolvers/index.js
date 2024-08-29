import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user.resolver.js';
import customResolver from './custom.resolver.js';
import postResolver from './post.resolver.js';

const helloResolver = {
    Query: {
        hello: () => 'Hello world'
    }
};

const mergedResolvers = mergeResolvers([
    userResolver,
    helloResolver,
    postResolver,
    { Date: customResolver.dateScalar }
]);

export default mergedResolvers;
