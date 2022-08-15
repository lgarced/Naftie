const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [postMessage]!
  }

  type postMessage {
    _id: ID
    message: String
    creator: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [postMessage]
    post(postId: ID!): postMessage
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPostMessage(message: String!): postMessage
    addComment(postId: ID!, commentText: String!): postMessage
    removePostMessage(postId: ID!): postMessage
    removeComment(postId: ID!, commentId: ID!): postMessage
  }
`;

module.exports = typeDefs;
