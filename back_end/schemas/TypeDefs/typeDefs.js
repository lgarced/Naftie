import { gql } from "apollo-server-express";

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    posts: [postMessage]!
    createdAt: Date
    friends: [User]!
    messages: [Message]!
  }

  type Post {
    _id: ID
    message: String
    creator: String
    createdAt: Date
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    user: User
    comment: String
    createdAt: Date
  }

  type Message {
    _id: ID
    sender: User
    receiver: User
    message: String
    createdAt: Date
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): postMessage
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(message: String!): Post
    addComment(postId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;


export default typeDefs;


