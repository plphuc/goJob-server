const userTypeDef = `#graphql
    type User {
        _id: ID!,
        username: String!,
        name: String!,
        password: String!,
        profilePicture: String,
        gender: String!,
        dob: Date!,
        email: String!,
        phone: String,
        description: String,            
    }

    type LogOutResponse {
        message: String!
    }

    type Query {
        authUser: User,
    }

    type Mutation {
        signUp(input: SignUpInput): User,
        login(input: LogInInput!): User,
        logout: LogOutResponse
    }

    input SignUpInput {
        username: String!,
        password: String!,
        name: String!,
        gender: String!,
        email: String!
    }

    input LogInInput {
        username: String!,
        password: String!
    }
`;

export default userTypeDef;
