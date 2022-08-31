// import { gql } from "apollo-server-express";
const { gql} = require("apollo-server-express");


const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    firstName: String!
    lastName: String
    email: String
    password: String
    posts: [Post]
    createdAt: Date
    friends: [User]
    messages: [Message]
  }

  type Post {
    _id: ID
    message: String
    creator: User
    tags: [String]
    selectedFile: String
    likeCount: Int
    createdAt: Date
    comments: [Comment]
  }

  type postResponse {
    success: Boolean
    post: Post
  }
  # input PostData {
  #   _id: Int!
  #   message: String
  #   creatorId: ID!
  #   likes: Int
  # }

  # input AuthorData {
  #   id: Int!
  #   firstName: String
  #   lastName: String
  #   posts: [Post]
  # }


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
    user(_id: ID!): User
    posts: [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addPost(
      message: String!
      creator: String!
      tags: [String]
      selectedFile: String
      likeCount: Int
      createdAt: Date
    ): postResponse
    # addPost(input: [Post!]!): Post
    addComment(postId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;



module.exports = typeDefs;
// export default typeDefs;
//What is user name ? where is it devfined ?? username is defined on the query but no where else
//mutations need to be improved on the backend

