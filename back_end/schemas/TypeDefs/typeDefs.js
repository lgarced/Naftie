// import { gql } from "apollo-server-express";
const { gql} = require("apollo-server-express");


const typeDefs = gql`
scalar Date

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    posts: [Post]!
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

  type Friend {
    _id: ID
    firstName: String!
    lastName: String!
    createdAt: Date
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
    post(postId: ID!): Post
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

module.exports = typeDefs;
// export default typeDefs;


