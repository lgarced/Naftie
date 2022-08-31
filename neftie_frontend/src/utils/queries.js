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
  query User($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
      posts {
        message
        # creator {
        #   firstName
        #   lastName
        #   createdAt
        # }
      }
    }
  }
`;
export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      message
      createdAt
    }
  }
`;

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