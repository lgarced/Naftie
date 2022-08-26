import { gql } from "@apollo/client"

//CHECK QUERIES THAT MATCH BACKEND 
export const QUERY_USERS = gql`
    query users {
      _id
      firstName
      lastName
      email
      password
      friends
      messages
      posts {
        _id
      }
    }
`

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      password
      posts {
        _id
        message
        creator
        createdAt
        comments {
          _id
          user
          comment
          createdAt
        }
      }
      friends
      messages
      comment {
        _id
        user
        comment
        createdAt
      }
    }
  }
`
export const QUERY_POSTS = gql`
  {
    posts {
      _id
      message
      creator
      createdAt
      comments {
        _id
        user
        comment
        createdAt
      }
    }
  }
`

export const QUERY_POST = gql`
  {
    post {
      _id
      message
      creator
      createdAt
      comments {
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`