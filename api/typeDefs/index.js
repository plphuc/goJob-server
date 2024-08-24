import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDef from './user.typeDef.js';
import { gql } from 'apollo-server-express';

const helloTypeDef = gql`
    type Query {
        hello: String!
    }
`;

const mergedTypeDefs = mergeTypeDefs([userTypeDef, helloTypeDef]);

export default mergedTypeDefs;
