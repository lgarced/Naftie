// import { AuthenticationError } from "apollo-server-express";
// import { User, Post, Comment, Message } from "./models/index.js";
const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../../models/index.js");
const { signToken } = require("../../utils/auth");
const { logout } = require("../../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (_, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (_, { firstName, lastName, email, password }) => {
      try {
        console.log("TEST", firstName, lastName, email);
        const user = await User.create({
          firstName,
          lastName,
          email,
          password,
        });
        console.log(user);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (_, payload, context) => {
      console.log("payload", payload);
      try{

        const newPost = await Post.create(payload);
        
        return {success: true, post: newPost};
      }catch(err){
        console.log(err);
        return {success: false, post: null}
      }
    },

    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.firstName },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          creator: context.user.firstName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.firstName,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

// addPost: async (parent, { message }, context) => {
//   if (context.user) {
//     const post = await Post.create({
//       message,
//       creator: context.user.firstName,
//     })

//     await User.findOneAndUpdate(
//       { _id: context.user._id },
//       { $addToSet: { posts: post._id } }
//     )

//     return post
//   }
//   throw new AuthenticationError("You need to be logged in!")
// },
