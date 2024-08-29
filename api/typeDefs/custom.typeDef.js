import { gql } from 'apollo-server-core';

const dateTypeDef = gql`
    scalar Date
`;

export default { dateTypeDef };
