const {Schema, model} = require("mongoose");


const commentSchema = Schema(
    {   
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        comment: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;


