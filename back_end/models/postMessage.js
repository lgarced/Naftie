import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
      } ,
      message: String,
      creator: String,
      tags: [String],
      selectedFile: String,
      likeCount: {
        type: Number,
        default: 0,
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
