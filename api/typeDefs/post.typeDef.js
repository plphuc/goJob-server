
const postTypeDef = `#graphql
    type Post {
        _id: ID!,
        userId: [User],
        title: String,
        createdDate: Date!,
        content: String!,
        image: String!  
    }
    
    type Query {
        getPost(input: GetPostInput!): Post
    }

    type Mutation {
        createPost(input: CreatePostInput!): Post,
        editPost(input: EditPostInput!): Post,
        DeletePost(input: DeletePost): Post,
    }

    input CreatePostInput {
        title: String!,
        content: String,
        image: String
    }
`;

export default postTypeDef;
