const postTypeDef = `#graphql
    type Post {
        _id: ID!,
        userId: ID!,
        title: String,
        createdDate: Date!,
        content: String,
        imageUrl: String,
        user: User
    }
    
    type Query {
        getPosts: [Post],
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
        imageUrl: String,
    }

    input EditPostInput {
        _id: ID!,
        title: String,
        content: String,
        imageUrl: String,
    }

    input DeletePostInput {
        _id: ID!
    }
`;

export default postTypeDef;
