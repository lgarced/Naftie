import { gql } from "@apollo/client"

export const QUERY_USERS = gql`
    users {
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

