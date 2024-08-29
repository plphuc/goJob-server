import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user.resolver.js';
import customResolver from './custom.resolver.js';

const helloResolver = {
    Query: {
        hello: () => 'Hello world'
    }
};

const mergedResolvers = mergeResolvers([
    userResolver,
    helloResolver,
    customResolver.dateScalar
]);

export default mergedResolvers;
