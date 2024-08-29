import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDef from './user.typeDef.js';
import { gql } from 'apollo-server-express';
import customTypeDef from './custom.typeDef.js';
import postTypeDef from './post.typeDef.js';

const helloTypeDef = gql`
    type Query {
        hello: String!
    }
`;

const mergedTypeDefs = mergeTypeDefs([
    userTypeDef,
    helloTypeDef,
    postTypeDef,
    customTypeDef.dateTypeDef
]);

export default mergedTypeDefs;
