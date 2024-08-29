const postTypeDef = `#graphql
    type Post {
        _id: ID!,
        userId: [User],
        title: String,
        createdDate: Date!,
        content: String,
        imageId: String,
    }
    
    type Query {
        getPost(input: GetPostInput!): Post
    }

    type Mutation {
        createPost(input: CreatePostInput!): Post,
        editPost(input: EditPostInput!): Post,
        deletePost(input: DeletePostInput!): Post,
    }

    input GetPostInput {
        id: ID!
    }

    input CreatePostInput {
        title: String!,
        content: String,
        imageId: String,
    }

    input EditPostInput {
        _id: ID!,
        title: String,
        content: String,
        imageId: String,
    }

    input DeletePostInput {
        _id: ID!
    }
`;

export default postTypeDef;
